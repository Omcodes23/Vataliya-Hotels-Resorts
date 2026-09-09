import React, { FormEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowRight, Award, Briefcase, Building2, Calendar,
  CheckCircle2, ChevronRight, Compass, Flame, HeartHandshake,
  Instagram, Mail, MapPin, MessageSquare, Mountain, Phone,
  ShieldCheck, Sparkles, Star, TreePine, Users, UtensilsCrossed,
} from 'lucide-react';
import { DESTINATIONS_DATA, HOTELS_DATA, VATALIYA_CORPORATE_INFO } from './data/hotelsData';
import { Navbar } from './components/Navbar';
import { HotelDetailPage } from './components/HotelDetailPage';
import { HotelBrandLogo } from './components/HotelBrandLogo';
import { Footer } from './components/Footer';

const HERO_IMG = 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920';
const RESORT_DUSK = 'https://images.pexels.com/photos/37108959/pexels-photo-37108959.jpeg?auto=compress&cs=tinysrgb&w=1920';
const POOL = 'https://images.pexels.com/photos/18884372/pexels-photo-18884372.jpeg?auto=compress&cs=tinysrgb&w=1920';
const HERITAGE = 'https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg?auto=compress&cs=tinysrgb&w=1920';
const HERITAGE2 = 'https://images.pexels.com/photos/33681488/pexels-photo-33681488.jpeg?auto=compress&cs=tinysrgb&w=1920';
const DINING = 'https://images.pexels.com/photos/17057034/pexels-photo-17057034.jpeg?auto=compress&cs=tinysrgb&w=1920';
const DINING2 = 'https://images.pexels.com/photos/1872892/pexels-photo-1872892.jpeg?auto=compress&cs=tinysrgb&w=1920';
const ROOM = 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1920';
const SPA = 'https://images.pexels.com/photos/6186740/pexels-photo-6186740.jpeg?auto=compress&cs=tinysrgb&w=1920';
const MOUNTAIN = 'https://images.pexels.com/photos/9348873/pexels-photo-9348873.jpeg?auto=compress&cs=tinysrgb&w=1920';
const BEACH_AERIAL = 'https://images.pexels.com/photos/20210509/pexels-photo-20210509.jpeg?auto=compress&cs=tinysrgb&w=1920';
const CONFERENCE = 'https://images.pexels.com/photos/8761636/pexels-photo-8761636.jpeg?auto=compress&cs=tinysrgb&w=1920';
const BALLROOM = 'https://images.pexels.com/photos/12689014/pexels-photo-12689014.jpeg?auto=compress&cs=tinysrgb&w=1920';
const HOTEL_NIGHT = 'https://images.pexels.com/photos/36477914/pexels-photo-36477914.jpeg?auto=compress&cs=tinysrgb&w=1920';
const LOBBY = 'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=1920';
const ROOM2 = 'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=1920';
const LOBBY2 = 'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&w=1920';

const portfolioItems = [
  { img: RESORT_DUSK, name: 'Boutique Mountain Resorts', tag: 'Shimla & Manali', size: 'tall' },
  { img: HERITAGE, name: 'Heritage Properties', tag: 'Cultural Palaces', size: 'normal' },
  { img: CONFERENCE, name: 'Business Hotels & MICE', tag: 'Corporate Hubs', size: 'normal' },
  { img: POOL, name: 'Wellness & Spa Retreats', tag: 'Steam & Nature', size: 'tall' },
  { img: ROOM, name: 'Mountain Balcony Suites', tag: 'Valley Views', size: 'normal' },
  { img: BALLROOM, name: 'Destination Celebrations', tag: 'Weddings & MICE', size: 'wide' },
  { img: BEACH_AERIAL, name: 'Beachfront Resorts', tag: 'Coastal Leisure', size: 'tall' },
  { img: MOUNTAIN, name: 'High-Altitude Lodges', tag: 'Himalayan Retreats', size: 'normal' },
  { img: HOTEL_NIGHT, name: 'City Hotels', tag: 'Urban Hospitality', size: 'normal' },
  { img: HERITAGE2, name: 'Restored Palaces', tag: 'Regal Luxury', size: 'wide' },
  { img: DINING, name: 'Gourmet Mountain Dining', tag: 'Culinary Splendor', size: 'normal' },
  { img: SPA, name: 'Ayurvedic & Steam Spas', tag: 'Rejuvenation', size: 'tall' },
  { img: LOBBY, name: 'Grand Luxury Lobbies', tag: 'Arrival Ambiance', size: 'normal' },
  { img: ROOM2, name: 'Pine Valley Master Suites', tag: 'Balcony Panoramas', size: 'normal' },
  { img: DINING2, name: 'Terrace Garden Cafes', tag: 'Outdoor Dining', size: 'wide' },
];

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.reveal').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeView, setActiveView] = useState<'home' | string>('home');
  const rootRef = useReveal();

  // Scroll listener for topbar & scroll progress
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const bar = document.querySelector('.scroll-progress') as HTMLElement;
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${window.scrollY / (h || 1)})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeView]);

  // URL hash sync
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash.startsWith('hotel/')) {
        const slug = hash.replace('hotel/', '');
        if (HOTELS_DATA[slug]) {
          setActiveView(`hotel:${slug}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (!hash || hash === 'top' || hash === 'home') {
        setActiveView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToHome = () => {
    window.location.hash = 'top';
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHotel = (slug: string) => {
    window.location.hash = `hotel/${slug}`;
    setActiveView(`hotel:${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentHotelSlug = activeView.startsWith('hotel:')
    ? activeView.replace('hotel:', '')
    : null;

  const currentHotel = currentHotelSlug ? HOTELS_DATA[currentHotelSlug] : null;

  return (
    <div className="site-shell bg-[#050b18] text-[#f6f4ef]" ref={rootRef as React.RefObject<HTMLDivElement>}>
      <div className="scroll-progress" />

      {/* Global Navbar with 2-Step Location Selector */}
      <Navbar
        scrolled={scrolled}
        activeView={activeView}
        onNavigateHome={navigateToHome}
        onNavigateHotel={navigateToHotel}
      />

      {/* Main Content Area: Individual Hotel Page OR Home Landing */}
      {currentHotel ? (
        <HotelDetailPage
          hotel={currentHotel}
          onBack={navigateToHome}
        />
      ) : (
        <main id="top">
          {/* HERO SECTION */}
          <section className="hero dark-section relative min-h-[850px] flex items-center">
            <div className="hero-bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
            <div className="hero-overlay" />
            <div className="hero-grid" />
            <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />

            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

              {/* Centered / Broad Hero Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8b45c]/15 border border-[#d8b45c]/30 text-[#f0d795] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                  <Sparkles size={13} className="text-[#d8b45c]" />
                  Luxury Mountain Hospitality & Operations Partner
                </div>

                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08]">
                  Where Luxury<br />
                  <em className="text-[#f0d795] italic">Meets Himalayan</em><br />
                  <span className="text-white text-[0.8em]">Excellence.</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-200 font-light max-w-xl leading-relaxed">
                  Vataliya Hotels & Resorts partners with distinctive mountain properties in Shimla and Manali — delivering elevated hospitality, centralized operations, and memorable guest experiences.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#hotels"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#d8b45c] to-[#f0d795] text-[#101827] font-semibold text-xs tracking-widest uppercase rounded-lg shadow-xl shadow-[#d8b45c]/25 hover:scale-105 transition"
                  >
                    View Our Hotels <ArrowRight size={16} />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-4 border border-white/30 text-white font-medium text-xs tracking-wider uppercase rounded-lg hover:border-[#d8b45c] hover:text-[#f0d795] backdrop-blur-md transition"
                  >
                    Connect with Sales
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-gray-300">
                  <span className="flex items-center gap-2">
                    <strong className="text-[#d8b45c] text-sm">01</strong> Shimla: Manaw Valley Resort (3★)
                  </span>
                  <span className="flex items-center gap-2">
                    <strong className="text-[#d8b45c] text-sm">02</strong> Manali: Hotel Indrasan & Fyra Ashapuri Snow Inn
                  </span>
                  <span className="flex items-center gap-2">
                    <strong className="text-[#d8b45c] text-sm">03</strong> Central B2B Operations
                  </span>
                </div>
              </div>

              {/* Right Brand Emblem Box */}
              <div className="lg:col-span-4 hidden lg:flex flex-col items-center">
                <div className="luxury-hero-card max-w-sm w-full">
                  <div className="luxury-shimmer-border w-full shadow-2xl">
                    <div className="luxury-sheen-container p-8 rounded-[1.4rem] bg-gradient-to-br from-[#081a38]/95 via-[#071329]/95 to-[#050b18]/95 text-center space-y-4">
                      <div className="w-24 h-24 mx-auto luxury-logo-halo">
                        <div className="luxury-logo-inner p-0">
                          <img
                            src="/vataliya1.png"
                            alt="Vataliya Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-white tracking-wider">
                          VATALIYA
                        </h3>
                        <p className="text-[10px] text-[#d8b45c] uppercase tracking-widest mt-0.5">
                          Hotels & Resorts Partner
                        </p>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed pt-2 border-t border-white/10">
                        Central hospitality desk for property management, group bookings, and stay inquiries.
                      </p>
                      <div className="pt-1 flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#f0d795] font-semibold tracking-wider">
                        <Phone size={13} className="text-[#d8b45c] flex-shrink-0" />
                        <a
                          href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
                          className="hover:underline"
                        >
                          {VATALIYA_CORPORATE_INFO.phoneDisplay}
                        </a>
                        <span className="text-gray-500">|</span>
                        <a
                          href={`tel:${VATALIYA_CORPORATE_INFO.phone2}`}
                          className="hover:underline"
                        >
                          {VATALIYA_CORPORATE_INFO.phone2Display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <a className="scroll-cue" href="#hotels">
              <span>Explore Hotels</span>
              <ArrowDown size={17} />
            </a>
          </section>

          {/* 01. OUR PARTNER HOTELS (CLEAN LOGO & LOCATION ONLY) */}
          <section id="hotels" className="py-24 px-4 sm:px-8 bg-[#071329] text-[#f6f4ef] border-t border-[#d8b45c]/20">
            <div className="max-w-7xl mx-auto space-y-12">

              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
                  <Building2 size={14} /> 01 — Our Partner Hotels
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                  Hotels & Resorts by Vataliya
                </h2>
              </div>

              {/* Minimalist Hotel Brand Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Object.values(HOTELS_DATA).map((hotel) => (
                  <div
                    key={hotel.id}
                    onClick={() => navigateToHotel(hotel.slug)}
                    className="group cursor-pointer p-7 rounded-2xl bg-gradient-to-br from-[#081a38] to-[#050b18] border border-[#d8b45c]/35 hover:border-[#d8b45c] hover:shadow-2xl hover:shadow-[#d8b45c]/10 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                  >
                    {/* Hotel Logo Container */}
                    <div className="w-52 h-24 rounded-2xl bg-white p-3 flex items-center justify-center group-hover:scale-105 transition shadow-md overflow-hidden border border-white/10">
                      <HotelBrandLogo
                        hotel={hotel}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#f0d795] font-medium pt-1">
                      <MapPin size={13} className="text-[#d8b45c]" />
                      <span>{hotel.city}, {hotel.state}</span>
                    </div>

                    {/* Hotel Name by Vataliya */}
                    <h3 className="font-serif text-2xl text-white font-medium group-hover:text-[#f0d795] transition">
                      {hotel.name} <span className="text-[#d8b45c] text-lg font-normal">by Vataliya</span>
                    </h3>

                    {/* Clean Explore Action */}
                    <div className="pt-2 w-full">
                      <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#d8b45c] uppercase group-hover:translate-x-1 transition-transform">
                        Explore Property <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 02. PORTFOLIO MASONRY GALLERY */}
          <section id="portfolio" className="portfolio-section light-section section-pad">
            <div className="section-heading reveal">
              <p className="section-label">02 — Our Portfolio</p>
              <h2>A Portfolio of<br /><em>Character and Potential.</em></h2>
              <p>We work across hospitality segments — each property treated on its own terms with bespoke management, marketing, and distribution.</p>
            </div>
            <div className="masonry">
              {portfolioItems.map((item, i) => (
                <article className={`masonry-item ${item.size} reveal`} key={i}>
                  <div className="masonry-img" style={{ backgroundImage: `url(${item.img})` }} />
                  <div className="masonry-caption">
                    <small>{item.tag}</small>
                    <b>{item.name}</b>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 03. CORPORATE & GROUP BUSINESS / MICE */}
          <section id="corporate" className="split-section light-section section-pad">
            <div className="split-copy reveal space-y-4">
              <p className="section-label">03 — Corporate & Group Business</p>
              <h2>Elevating Corporate<br /><em>Retreats & Celebrations.</em></h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                From corporate leadership offsites, executive conferences, and incentive travel to breathtaking destination weddings in Shimla and Manali — Vataliya delivers seamless planning, banqueting, and dedicated hospitality coordination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white border border-gray-200">
                  <h4 className="font-serif text-sm font-semibold text-[#10203a]">Corporate Offsites & MICE</h4>
                  <p className="text-xs text-gray-500 mt-1">Conference setups, projector halls & high-speed Wi-Fi.</p>
                </div>
                <div className="p-3 rounded-lg bg-white border border-gray-200">
                  <h4 className="font-serif text-sm font-semibold text-[#10203a]">Destination Celebrations</h4>
                  <p className="text-xs text-gray-500 mt-1">Mountain weddings, banquets & gala dinner catering.</p>
                </div>
              </div>

              <div className="pt-2">
                <a className="text-link font-medium" href="#contact">
                  Connect for Group Tariffs & MICE <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="split-collage reveal">
              <div className="collage-img c1" style={{ backgroundImage: `url(${CONFERENCE})` }} />
              <div className="collage-img c2" style={{ backgroundImage: `url(${BALLROOM})` }} />
              <div className="collage-img c3" style={{ backgroundImage: `url(${DINING2})` }} />
            </div>
          </section>

          {/* 04. CONNECT WITH VATALIYA (NO FORM - DIRECT CONTACT DESK) */}
          <section id="contact" className="py-24 px-4 sm:px-8 bg-[#050b18] text-[#f6f4ef] border-t border-[#d8b45c]/25 relative overflow-hidden">
            <div className="contact-bg-orb" />

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">

              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
                  <Phone size={14} /> 04 — Connect with Vataliya
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
                  Direct Contact & Corporate Desk
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  Reach out directly to our central management team for room reservations, property operations, and B2B partnerships.
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: Central Reservations & Sales */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#081a38] to-[#071329] border border-[#d8b45c]/35 shadow-xl space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d8b45c]/10 border border-[#d8b45c]/30 flex items-center justify-center text-[#d8b45c]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#f0d795] uppercase font-semibold tracking-wider">
                      Sales & Stay Inquiries
                    </span>
                    <h3 className="font-serif text-xl text-white font-medium mt-1">
                      Central Reservations
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300">
                    Call our central hospitality desk for group bookings, corporate stays, and tariff information.
                  </p>
                  <div className="pt-2 space-y-2 text-sm">
                    <div className="flex flex-wrap items-center gap-2 text-[#f0d795] font-semibold">
                      <Phone size={15} />
                      <a
                        href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
                        className="hover:underline"
                      >
                        {VATALIYA_CORPORATE_INFO.phoneDisplay}
                      </a>
                      <span className="text-gray-500">|</span>
                      <a
                        href={`tel:${VATALIYA_CORPORATE_INFO.phone2}`}
                        className="hover:underline"
                      >
                        {VATALIYA_CORPORATE_INFO.phone2Display}
                      </a>
                    </div>
                    <a
                      href={`mailto:${VATALIYA_CORPORATE_INFO.bookingEmail}`}
                      className="flex items-center gap-2 text-gray-300 hover:text-white"
                    >
                      <Mail size={15} /> {VATALIYA_CORPORATE_INFO.bookingEmail}
                    </a>
                  </div>
                </div>

                {/* Card 2: Hotel Management & Partnerships */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#081a38] to-[#071329] border border-[#d8b45c]/35 shadow-xl space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d8b45c]/10 border border-[#d8b45c]/30 flex items-center justify-center text-[#d8b45c]">
                    <HeartHandshake size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#f0d795] uppercase font-semibold tracking-wider">
                      Asset Owners & B2B
                    </span>
                    <h3 className="font-serif text-xl text-white font-medium mt-1">
                      Management Partnerships
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300">
                    Partner with Vataliya to manage your hotel operations, sales, revenue, and distribution.
                  </p>
                  <div className="pt-2 space-y-2 text-sm">
                    <a
                      href={`mailto:${VATALIYA_CORPORATE_INFO.partnershipsEmail}`}
                      className="flex items-center gap-2 text-[#f0d795] font-semibold hover:underline"
                    >
                      <Mail size={15} /> {VATALIYA_CORPORATE_INFO.partnershipsEmail}
                    </a>
                    <div className="flex flex-wrap items-center gap-2 text-gray-300">
                      <Phone size={15} className="text-[#d8b45c]" />
                      <a href={`tel:${VATALIYA_CORPORATE_INFO.phone}`} className="hover:text-white">
                        {VATALIYA_CORPORATE_INFO.phoneDisplay}
                      </a>
                      <span className="text-gray-500">|</span>
                      <a href={`tel:${VATALIYA_CORPORATE_INFO.phone2}`} className="hover:text-white">
                        {VATALIYA_CORPORATE_INFO.phone2Display}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 3: Corporate Office Address */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#081a38] to-[#071329] border border-[#d8b45c]/35 shadow-xl space-y-4 md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 rounded-xl bg-[#d8b45c]/10 border border-[#d8b45c]/30 flex items-center justify-center text-[#d8b45c]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#f0d795] uppercase font-semibold tracking-wider">
                      Headquarters
                    </span>
                    <h3 className="font-serif text-xl text-white font-medium mt-1">
                      Corporate Office
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {VATALIYA_CORPORATE_INFO.address}
                  </p>
                  <div className="pt-2">
                    <a
                      href={VATALIYA_CORPORATE_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#E1306C] hover:underline font-medium"
                    >
                      <Instagram size={15} /> Follow @vataliyahotels
                    </a>
                  </div>
                </div>

              </div>

              {/* Direct Action Hub */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#081a38] via-[#102d53] to-[#081a38] border border-[#d8b45c]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="space-y-1">
                  <h4 className="font-serif text-2xl text-white font-medium">
                    Have an Immediate Inquiry?
                  </h4>
                  <p className="text-xs text-gray-300">
                    Connect directly with our team via WhatsApp or call our central sales line.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
                    className="px-6 py-3 bg-gradient-to-r from-[#d8b45c] to-[#f0d795] text-[#101827] font-semibold text-xs tracking-widest uppercase rounded-lg shadow-lg hover:scale-105 transition flex items-center gap-2"
                  >
                    <Phone size={14} /> Call: {VATALIYA_CORPORATE_INFO.phoneDisplay}
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${VATALIYA_CORPORATE_INFO.whatsappNumber}&text=Hello%20Vataliya%20Hotels,%20I%20have%20an%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#20bd5a] transition flex items-center gap-2"
                  >
                    <MessageSquare size={14} /> WhatsApp Us
                  </a>
                </div>
              </div>

            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateHotel={navigateToHotel}
      />
    </div>
  );
}

export default App;
