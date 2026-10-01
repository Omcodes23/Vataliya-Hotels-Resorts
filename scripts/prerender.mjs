/**
 * Post-build prerender.
 *
 * Google can render JavaScript, but it is a second-class path: rendering is
 * deferred and hotel pages can be skipped entirely. Each hotel page is
 * therefore baked into its own static HTML file at build time, so the title,
 * meta description, canonical, Open Graph tags and Hotel structured data are
 * all present in the first byte of the response.
 *
 * Uses node: built-ins only — no headless browser, no extra dependency. React
 * still renders the page client-side as normal; this only guarantees the head
 * tags a crawler reads are already in the HTML it receives.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ORIGIN = 'https://www.vataliyas.com';

/** Must stay in sync with the slug used in App.tsx / sitemap.xml. */
const hotelPathSlug = (slug) => (slug.startsWith('the-') ? slug.slice(4) : slug);

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Read the real hotel records out of src/data/hotelsData.ts so the prerendered
 * metadata can never drift from what the app actually renders. Parsed by
 * regex rather than imported, because that file is TypeScript.
 */
async function loadHotels() {
  const source = await readFile(join(root, 'src/data/hotelsData.ts'), 'utf8');

  const segmentFor = (slug) => {
    const start = source.indexOf(`slug: '${slug}'`);
    if (start === -1) throw new Error(`[prerender] hotel "${slug}" not found in hotelsData.ts`);
    const next = source.indexOf("slug: '", start + 10);
    return source.slice(start, next === -1 ? source.length : next);
  };

  const pick = (segment, re, group = 1) => {
    const m = segment.match(re);
    return m ? m[group] : undefined;
  };

  const all = [
    'the-fyra-ashapuri-snow-inn',
    'manaw-valley-resort',
    'hotel-indrasan-manali',
  ];

  return all.map((slug) => {
    const segment = segmentFor(slug);

    const amenities = [
      ...(pick(segment, /amenitiesList: \[([\s\S]*?)\n    \],/) || '').matchAll(/'([^']+)'/g),
    ].map((m) => m[1]);

    const gallery = pick(segment, /galleryImages: \[([\s\S]*?)\n    \],/) || '';
    const images = [...gallery.matchAll(/url: '([^']+)'/g)].map((m) => m[1]);

    const city = pick(segment, /city: '([^']+)'/);
    const name = pick(segment, /name: '([^']+)'/);
    const starRating = Number(pick(segment, /starRating: (\d+)/));

    // Room count is only stated for one property; don't invent it for the rest.
    const roomsMatch = pick(segment, /(\d+)\s+Well-Appointed Rooms/);

    return {
      slug,
      name,
      city,
      state: pick(segment, /state: '([^']+)'/),
      starRating,
      propertyAddress: pick(segment, /propertyAddress: '([^']+)'/),
      amenitiesList: amenities,
      images,
      numberOfRooms: roomsMatch ? Number(roomsMatch) : undefined,
      description: `${name} by Vataliya Hotels & Resorts in ${city}, Himachal Pradesh. A ${starRating}-Star mountain property operated by Vataliya, with inquiries handled by our central hospitality desk.`,
    };
  });
}

async function main() {
  const templatePath = join(dist, 'index.html');
  if (!existsSync(templatePath)) {
    console.error('[prerender] dist/index.html not found — run the build first.');
    process.exit(1);
  }
  const template = await readFile(templatePath, 'utf8');

  const hotels = await loadHotels();

  for (const hotel of hotels) {
    const url = `${ORIGIN}/hotels/${hotelPathSlug(hotel.slug)}`;
    const title = `${hotel.name} (${hotel.starRating}★, ${hotel.city}) by Vataliya Hotels & Resorts`;
    const html = injectHead(template, hotel, url, title);

    const outDir = join(dist, 'hotels', hotelPathSlug(hotel.slug));
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf8');
    console.log(`[prerender] wrote dist/hotels/${hotelPathSlug(hotel.slug)}/index.html`);
  }
}

/**
 * Rewrite the static template so a crawler sees this hotel's metadata without
 * executing any JavaScript. React replaces the #root contents on hydration, so
 * we also drop a <noscript> summary of the property into the body.
 */
function injectHead(template, hotel, url, title) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Hotel',
        '@id': `${ORIGIN}/#hotel/${hotel.slug}`,
        name: hotel.name,
        url,
        description: hotel.description,
        telephone: '+91-91066-62535',
        address: {
          '@type': 'PostalAddress',
          streetAddress: hotel.propertyAddress,
          addressLocality: hotel.city,
          addressRegion: hotel.state,
          addressCountry: 'IN',
        },
        starRating: {
          '@type': 'Rating',
          ratingValue: String(hotel.starRating),
          bestRating: '5',
          worstRating: '1',
        },
        ...(hotel.numberOfRooms
          ? { numberOfRooms: String(hotel.numberOfRooms), checkinTime: '14:00:00', checkoutTime: '12:00:00' }
          : {}),
        ...(hotel.amenitiesList?.length
          ? {
              amenityFeature: hotel.amenitiesList.map((a) => ({
                '@type': 'LocationFeatureSpecification',
                name: a,
                value: true,
              })),
            }
          : {}),
        ...(hotel.images?.length
          ? {
              image: hotel.images.map((src) => ({
                '@type': 'ImageObject',
                url: src.startsWith('/') ? ORIGIN + src : src,
              })),
            }
          : {}),
        brand: { '@id': `${ORIGIN}/#organization` },
        parentOrganization: { '@id': `${ORIGIN}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: hotel.name, item: url },
        ],
      },
    ],
  };

  const head = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(hotel.description)}" />
    <link rel="canonical" href="${escapeHtml(url)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(hotel.description)}" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(hotel.description)}" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
`;

  const noscript = `<noscript><h1>${escapeHtml(hotel.name)} by Vataliya Hotels &amp; Resorts</h1><p>${escapeHtml(hotel.description)}</p></noscript>`;

  return template
    // Drop the homepage versions first (tag first — later meta tags win in
    // Google's parser, so the homepage value must be the one removed).
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*\/?>/, '')
    .replace(/\s*<link rel="canonical"[^>]*\/?>/, '')
    .replace('</head>', `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${noscript}</div>`);
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});