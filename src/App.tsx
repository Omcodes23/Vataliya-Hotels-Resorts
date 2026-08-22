import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowRight, BarChart3, Building2, ChevronDown, ChevronRight,
  CircleDollarSign, Globe2, Handshake, Hotel, LineChart, Linkedin, Mail,
  Menu, Network, Phone, Play, ShieldCheck, Sparkles, TrendingUp, Users, X,
  CheckCircle2, Facebook, Instagram, Youtube, MapPin, Clock, Briefcase,
  Award, Eye, Layers, HeartHandshake, Target, CalendarCheck, FileText,
  ClipboardCheck, PenLine, FileSignature,
} from 'lucide-react';

const HERO_IMG = 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920';
const RESORT_DUSK = 'https://images.pexels.com/photos/37108959/pexels-photo-37108959.jpeg?auto=compress&cs=tinysrgb&w=1920';
const LOBBY = 'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=1920';
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
const CONCIERGE = 'https://images.pexels.com/photos/5378703/pexels-photo-5378703.jpeg?auto=compress&cs=tinysrgb&w=1920';
const BALLROOM = 'https://images.pexels.com/photos/12689014/pexels-photo-12689014.jpeg?auto=compress&cs=tinysrgb&w=1920';
const CITY_NIGHT = 'https://images.pexels.com/photos/57945/pexels-photo-57945.jpeg?auto=compress&cs=tinysrgb&w=1920';
const HOTEL_NIGHT = 'https://images.pexels.com/photos/36477914/pexels-photo-36477914.jpeg?auto=compress&cs=tinysrgb&w=1920';
const LOBBY2 = 'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&w=1920';
const ROOM2 = 'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=1920';

const services = [
  { icon: Hotel, title: 'Hotel Operations', text: 'Disciplined daily operations that make every stay feel effortless.' },
  { icon: Network, title: 'Sales & B2B', text: 'A focused commercial engine that brings the right business to your door.' },
  { icon: TrendingUp, title: 'Revenue Management', text: 'Smarter pricing, stronger RevPAR, and profitable demand capture.' },
  { icon: Globe2, title: 'Digital & Marketing', text: 'A distinctive presence that turns attention into direct demand.' },
  { icon: BarChart3, title: 'Distribution', text: 'Balanced channel strategy with visibility where it matters most.' },
  { icon: Users, title: 'People & Culture', text: 'Training, staffing and standards built around genuine hospitality.' },
  { icon: CircleDollarSign, title: 'Finance & Controls', text: 'Clear reporting and careful controls that keep owners informed.' },
  { icon: Sparkles, title: 'Guest Experience', text: 'Memorable details that build loyalty, reviews and return stays.' },
];

const challenges = ['Inconsistent occupancy', 'High OTA dependence', 'Limited B2B distribution', 'Inefficient rate management', 'Seasonality pressure', 'Rising operating costs', 'Staffing complexity', 'Low digital visibility'];
const phases = ['Selected independent hotels', 'Professional management platform', 'Regional hotel portfolio', 'Multi-destination hotel chain', 'A recognised hospitality brand'];
const processSteps = [
  { icon: ClipboardCheck, title: 'Property Assessment', text: 'We evaluate the asset, location and market position.' },
  { icon: BarChart3, title: 'Business & Revenue Review', text: 'A clear-eyed look at performance and untapped opportunity.' },
  { icon: Layers, title: 'Management Scope', text: 'We define exactly what Vataliya will own and deliver.' },
  { icon: FileText, title: 'Commercial Proposal', text: 'A transparent commercial structure and performance targets.' },
  { icon: CalendarCheck, title: '90-Day Transition Plan', text: 'A structured handover that protects guests and revenue.' },
  { icon: FileSignature, title: 'Hotel Management Agreement', text: 'A long-term partnership formalised with clarity.' },
];

const portfolioItems = [
  { img: RESORT_DUSK, name: 'Boutique Resorts', tag: 'Leisure & Wellness', size: 'tall' },
  { img: HERITAGE, name: 'Heritage Hotels', tag: 'Cultural Properties', size: 'wide' },
  { img: CONFERENCE, name: 'Business Hotels', tag: 'Corporate & MICE', size: 'normal' },
  { img: POOL, name: 'Wellness Retreats', tag: 'Spa & Nature', size: 'normal' },
  { img: ROOM, name: 'Serviced Suites', tag: 'Extended Stay', size: 'normal' },
  { img: BALLROOM, name: 'Event Venues', tag: 'Weddings & MICE', size: 'wide' },
  { img: BEACH_AERIAL, name: 'Beachfront Resorts', tag: 'Coastal Leisure', size: 'tall' },
  { img: MOUNTAIN, name: 'Mountain Lodges', tag: 'Destination Retreats', size: 'normal' },
  { img: HOTEL_NIGHT, name: 'City Hotels', tag: 'Urban Business', size: 'normal' },
  { img: HERITAGE2, name: 'Restored Palaces', tag: 'Heritage Luxury', size: 'wide' },
];

const segments = [
  { img: RESORT_DUSK, name: 'Resorts', desc: 'Leisure properties with F&B, spa and experiences.' },
  { img: LOBBY, name: 'Boutique Hotels', desc: 'Design-led properties with distinct character.' },
  { img: HERITAGE, name: 'Heritage Properties', desc: 'Restored palaces and culturally significant assets.' },
  { img: CONFERENCE, name: 'Business Hotels', desc: 'Corporate-focused hotels in commercial hubs.' },
];

const pillars = [
  { img: CONCIERGE, title: 'Operations', desc: 'Standards, staffing and service that guests feel from arrival to departure.' },
  { img: CONFERENCE, title: 'Sales & B2B', desc: 'A commercial team that builds demand before it is needed.' },
  { img: LOBBY2, title: 'Revenue Management', desc: 'Pricing intelligence that protects and grows the topline.' },
  { img: ROOM2, title: 'Guest Experience', desc: 'Considered details that turn first-time guests into regulars.' },
];

const triptych = [DINING, SPA, POOL];

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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.reveal').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeSegment, setActiveSegment] = useState(0);
  const rootRef = useReveal();

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
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" ref={rootRef as React.RefObject<HTMLDivElement>}>
      <div className="scroll-progress" />
      <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark"><span>V</span><i /></span>
          <span className="brand-text"><strong>VATALIYA</strong><small>HOTELS & RESORTS</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#vision" onClick={closeMenu}>Vision</a>
          <a href="#approach" onClick={closeMenu}>What we do</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#model" onClick={closeMenu}>Our model</a>
          <a href="#why" onClick={closeMenu}>Why Vataliya</a>
          <div className="nav-dropdown">
            <button className="nav-dd-btn" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
              Portfolio <ChevronDown size={13} />
            </button>
            <div className="nav-dd-panel">
              {segments.map((s) => (
                <a key={s.name} href="#portfolio" onClick={closeMenu} className="dd-item">
                  <span className="dd-thumb" style={{ backgroundImage: `url(${s.img})` }} />
                  <span><b>{s.name}</b><small>{s.desc}</small></span>
                </a>
              ))}
            </div>
          </div>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Partner with us <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero dark-section">
          <div className="hero-bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
          <div className="hero-overlay" />
          <div className="hero-grid" />
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-content reveal">
            <p className="eyebrow"><span /> Hotel management & hospitality partners</p>
            <h1>You own the<br /><em>property.</em><br /><span>We build the business.</span></h1>
            <p className="hero-copy">We partner with independent hotel owners to run operations, sales, revenue and distribution — turning strong assets into professionally managed, revenue-driven hospitality businesses.</p>
            <div className="button-row">
              <a className="button button-gold" href="#contact">Start a conversation <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#approach"><Play size={15} /> See how it works</a>
            </div>
            <div className="hero-proof">
              <span><strong>01</strong> Owner-aligned</span>
              <span><strong>02</strong> Commercially driven</span>
              <span><strong>03</strong> Built to last</span>
            </div>
          </div>
          <div className="crest-stage" aria-hidden="true">
            <div className="stage-glow" />
            <div className="crest-ring ring-back" /><div className="crest-ring ring-front" />
            <div className="crest-shield">
              <div className="crest-crown">♢</div><span>V</span><small>VATALIYA</small>
            </div>
            <div className="float-card card-top"><small>THE OUTCOME</small><b>Greater profitability</b><TrendingUp size={18} /></div>
            <div className="float-card card-side"><small>THE FOCUS</small><b>Higher ADR</b><LineChart size={18} /></div>
            <div className="float-card card-bottom"><small>THE ENGINE</small><b>Full-service management</b><ShieldCheck size={18} /></div>
          </div>
          <a className="scroll-cue" href="#vision"><span>Scroll to explore</span><ArrowDown size={17} /></a>
        </section>

        {/* VISION */}
        <section id="vision" className="light-section vision-section section-pad">
          <div className="section-heading reveal"><p className="section-label">01 — Our vision</p><h2>Building a new generation<br /><em>of Indian hospitality.</em></h2></div>
          <div className="vision-layout">
            <div className="vision-statement reveal">
              <span className="quote-mark">"</span>
              <p>Great hotels deserve more than good intentions. They deserve a clear commercial point of view, rigorous systems and a team that treats the asset like its own.</p>
              <a className="text-link" href="#approach">Discover our approach <ArrowRight size={16} /></a>
            </div>
            <div className="focus-grid reveal">
              {['Operations', 'Sales & B2B', 'Revenue', 'Marketing', 'Travel trade', 'Corporate business', 'Guest experience'].map((item, i) => (
                <div className="focus-item" key={item}><span>0{i + 1}</span>{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* OWNER'S CHALLENGE */}
        <section className="challenge-section dark-section section-pad">
          <div className="challenge-grid" />
          <div className="section-heading light reveal"><p className="section-label">02 — The owner's challenge</p><h2>A good property does not<br /><em>automatically become a great business.</em></h2></div>
          <div className="challenge-layout">
            <div className="challenge-copy reveal">
              <p>Strong physical assets can still be held back by fragmented operations, inconsistent demand and decisions made without the full picture.</p>
              <p className="muted">The opportunity is to build a stronger business around the asset — one that performs in every season.</p>
            </div>
            <div className="pain-grid reveal">
              {challenges.map((item) => <div className="pain-item" key={item}><span>+</span>{item}</div>)}
            </div>
          </div>
        </section>

        {/* WHAT VATALIYA DOES — flow */}
        <section id="approach" className="approach-section light-section section-pad">
          <div className="section-heading centered reveal"><p className="section-label">03 — The Vataliya way</p><h2>From property to<br /><em>performance.</em></h2><p>One accountable partner connecting every lever of the hotel business.</p></div>
          <div className="flow reveal">
            <div className="flow-line" />
            <div className="flow-node"><small>01</small><Building2 /><b>Property</b><span>Hotel owner</span></div>
            <div className="flow-node featured"><small>02</small><Handshake /><b>Management</b><span>Vataliya</span></div>
            <div className="flow-node wide"><small>03</small><Network /><b>Business engine</b><span>Operations · Sales · Revenue · Marketing</span></div>
            <div className="flow-node result"><small>04</small><TrendingUp /><b>Outcome</b><span>Higher occupancy · Better ADR</span></div>
          </div>
        </section>

        {/* MANAGEMENT MODEL */}
        <section id="model" className="model-section dark-section section-pad">
          <div className="section-heading light reveal"><p className="section-label">04 — Our management model</p><h2>You continue to own<br /><em>the asset.</em></h2></div>
          <div className="model-cards reveal">
            <div className="model-card owner"><span className="card-number">01</span><h3>Owner</h3><p>Strategic ownership</p><ul><li>Asset ownership</li><li>Capital decisions</li><li>Strategic approvals</li></ul></div>
            <div className="model-card vataliya"><span className="card-number">02</span><h3>Vataliya</h3><p>Business performance</p><ul><li>Operations & staffing</li><li>Sales & revenue management</li><li>Marketing & guest experience</li></ul><a href="#contact">Explore the partnership <ArrowRight size={15} /></a></div>
            <div className="model-card joint"><span className="card-number">03</span><h3>Joint governance</h3><p>Aligned decisions</p><ul><li>Budgets & business plans</li><li>Capex planning</li><li>Major strategic decisions</li></ul></div>
          </div>
        </section>

        {/* FEATURE CARDS — pillars (Leisure "Ready For X" pattern) */}
        <section className="pillars-section light-section section-pad">
          <div className="section-heading reveal"><p className="section-label">05 — Core pillars</p><h2>Four levers that<br /><em>define performance.</em></h2></div>
          <div className="pillars-grid">
            {pillars.map(({ img, title, desc }, i) => (
              <article className="pillar-card reveal" key={title}>
                <div className="pillar-img" style={{ backgroundImage: `url(${img})` }} />
                <div className="pillar-body">
                  <span className="pillar-index">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a className="discover-link" href="#services">Discover <ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services-section dark-section section-pad">
          <div className="section-heading light reveal"><p className="section-label">06 — Management services</p><h2>One platform.<br /><em>Multiple business functions.</em></h2></div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, i) => (
              <article className="service-card reveal" key={title}>
                <span className="service-index">0{i + 1}</span>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
                <ChevronRight className="service-arrow" size={18} />
              </article>
            ))}
          </div>
        </section>

        {/* SALES ENGINE */}
        <section className="sales-section light-section section-pad">
          <div className="section-heading centered reveal"><p className="section-label">07 — The sales engine</p><h2>Our commercial<br /><em>differentiator.</em></h2></div>
          <div className="sales-flow reveal">
            <div className="sales-node"><Hotel size={22} /><b>Hotel</b></div>
            <div className="sales-connector" />
            <div className="sales-node featured"><Handshake size={22} /><b>Vataliya</b></div>
            <div className="sales-connector" />
            <div className="sales-b2b">
              {['Travel Agents', 'Tour Operators', 'DMCs', 'Corporate Travel', 'Group Organisers', 'B2B Partners'].map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
            <div className="sales-connector" />
            <div className="sales-node"><CalendarCheck size={22} /><b>Bookings</b></div>
            <div className="sales-connector" />
            <div className="sales-node result"><CircleDollarSign size={22} /><b>Revenue</b></div>
          </div>
          <blockquote className="sales-quote reveal">"Our objective is not simply to increase visibility. Our objective is to generate business."</blockquote>
        </section>

        {/* REVENUE MANAGEMENT */}
        <section className="revenue-section dark-section section-pad">
          <div className="revenue-copy reveal"><p className="section-label">08 — Revenue management</p><h2>We do not chase<br /><em>occupancy alone.</em></h2><p>We optimise the whole equation — creating profitable demand, not simply filling rooms.</p></div>
          <div className="equation reveal">
            <div><b>OCCUPANCY</b><span>+</span></div>
            <div><b>ADR</b><span>+</span></div>
            <div><b>RevPAR</b><span>+</span></div>
            <div><b>GOP</b><span>=</span></div>
            <strong>VALUE</strong>
          </div>
        </section>

        {/* PORTFOLIO masonry (Leisure "New Beginnings" pattern) */}
        <section id="portfolio" className="portfolio-section light-section section-pad">
          <div className="section-heading reveal"><p className="section-label">09 — The properties we partner with</p><h2>A portfolio of<br /><em>character and potential.</em></h2><p>We work across hospitality segments — each asset treated on its own terms.</p></div>
          <div className="masonry">
            {portfolioItems.map((item, i) => (
              <article className={`masonry-item ${item.size} reveal`} key={i}>
                <div className="masonry-img" style={{ backgroundImage: `url(${item.img})` }} />
                <div className="masonry-caption"><small>{item.tag}</small><b>{item.name}</b></div>
              </article>
            ))}
          </div>
        </section>

        {/* GUEST EXPERIENCE TRIPTYCH */}
        <section className="triptych-section dark-section section-pad">
          <div className="section-heading light centered reveal"><p className="section-label">10 — Guest experience</p><h2>Standards guests<br /><em>remember.</em></h2></div>
          <div className="triptych reveal">
            {triptych.map((src, i) => (
              <div className="triptych-panel" key={i} style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
        </section>

        {/* CORPORATE & GROUP split section */}
        <section className="split-section light-section section-pad">
          <div className="split-copy reveal">
            <p className="section-label">11 — Corporate & group business</p>
            <h2>Demand that<br /><em>fills the calendar.</em></h2>
            <p>From corporate travel contracts to group bookings and MICE, we build a commercial pipeline that smooths seasonality and strengthens weekday performance.</p>
            <a className="text-link" href="#contact">Learn more <ArrowRight size={16} /></a>
          </div>
          <div className="split-collage reveal">
            <div className="collage-img c1" style={{ backgroundImage: `url(${CONFERENCE})` }} />
            <div className="collage-img c2" style={{ backgroundImage: `url(${BALLROOM})` }} />
            <div className="collage-img c3" style={{ backgroundImage: `url(${DINING2})` }} />
          </div>
        </section>

        {/* SEGMENT TABS */}
        <section className="segments-section dark-section section-pad">
          <div className="section-heading light centered reveal"><p className="section-label">12 — Segments we manage</p><h2>Specialised across<br /><em>every asset type.</em></h2></div>
          <div className="segment-tabs reveal">
            {segments.map((s, i) => (
              <button key={s.name} className={activeSegment === i ? 'seg-tab active' : 'seg-tab'} onClick={() => setActiveSegment(i)}>{s.name}</button>
            ))}
          </div>
          <div className="segment-display reveal">
            <div className="seg-img" style={{ backgroundImage: `url(${segments[activeSegment].img})` }} />
            <div className="seg-info">
              <h3>{segments[activeSegment].name}</h3>
              <p>{segments[activeSegment].desc}</p>
              <p className="seg-extra">We bring segment-specific commercial strategy, operational standards and distribution networks — tuned to the guest profile and demand patterns of each asset class.</p>
            </div>
          </div>
        </section>

        {/* ONBOARDING BANNER */}
        <section className="banner-section">
          <div className="banner-bg" style={{ backgroundImage: `url(${CITY_NIGHT})` }} />
          <div className="banner-overlay" />
          <div className="banner-content reveal">
            <p className="section-label light">Now accepting partnerships</p>
            <h2>Currently onboarding partners<br /><em>across India.</em></h2>
            <p>If you own a hotel or resort and are considering a management partner, we would welcome a confidential conversation.</p>
            <a className="button button-gold" href="#contact">Enquire about partnership <ArrowRight size={17} /></a>
          </div>
        </section>

        {/* WHY PARTNER */}
        <section id="why" className="why-section light-section section-pad">
          <div className="section-heading centered reveal"><p className="section-label">13 — Why partner with Vataliya</p><h2>Built around the<br /><em>owner's advantage.</em></h2></div>
          <div className="why-grid">
            {[
              ['Sales first', 'We build the commercial engine before we chase the headlines.'],
              ['B2B distribution', 'We create relationships that bring consistent, qualified demand.'],
              ['Performance orientation', 'Every decision is measured against the business outcome.'],
              ['Professional systems', 'Clear standards create consistent delivery and repeatable growth.'],
              ['Owner transparency', 'You see the story behind the numbers, at every step.'],
              ['Long-term approach', 'We are building lasting businesses, not short-term wins.'],
            ].map(([title, text], i) => (
              <div className="why-card reveal" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={18} /></div>
            ))}
          </div>
        </section>

        {/* PROMISE */}
        <section className="promise-section dark-section">
          <div className="promise-inner reveal">
            <p className="section-label">The Vataliya promise</p>
            <h2>We don't just take over hotels.<br /><em>We build hotel businesses.</em></h2>
            <p>Our long-term ambition is a portfolio of professionally managed properties that retain the character of each destination — and perform with the strength of one considered platform.</p>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="roadmap-section light-section section-pad">
          <div className="section-heading reveal"><p className="section-label">14 — Long-term vision</p><h2>A considered path<br /><em>to scale.</em></h2></div>
          <div className="roadmap">
            <div className="road-line" />
            {phases.map((phase, i) => (
              <div className="phase reveal" key={phase}>
                <span className="phase-dot">0{i + 1}</span>
                <small>PHASE {i + 1}</small>
                <p>{phase}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section dark-section section-pad">
          <div className="section-heading light centered reveal"><p className="section-label">15 — Our process</p><h2>From first conversation<br /><em>to signed agreement.</em></h2></div>
          <div className="process-strip">
            {processSteps.map(({ icon: Icon, title, text }, i) => (
              <div className="process-step reveal" key={title}>
                <span className="ps-num">0{i + 1}</span>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section dark-section section-pad">
          <div className="contact-bg-orb" />
          <div className="contact-copy reveal">
            <p className="section-label">16 — Begin the conversation</p>
            <h2>You built the hotel.<br /><em>Let us build the business.</em></h2>
            <p>Tell us a little about your property and where you want to take it. We'll come back with a clear point of view.</p>
            <div className="contact-detail">
              <span><Phone size={17} /> +91 00000 00000</span>
              <span><Mail size={17} /> partnerships@vataliya.com</span>
              <span><MapPin size={17} /> India · pan-India operations</span>
            </div>
            <div className="social-row">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            {sent ? (
              <div className="sent-state">
                <CheckCircle2 size={40} />
                <h3>Thank you for reaching out.</h3>
                <p>Your partnership enquiry has been received. Our team will be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>Full name<input required placeholder="Your name" /></label>
                  <label>Property name<input required placeholder="Hotel or resort" /></label>
                </div>
                <div className="form-row">
                  <label>Location<input required placeholder="City, state" /></label>
                  <label>Phone number<input required placeholder="+91" /></label>
                </div>
                <label>Email address<input required type="email" placeholder="you@company.com" /></label>
                <label>Tell us about your property<textarea required rows={4} placeholder="A little about your property and ambitions..." /></label>
                <button className="button button-gold" type="submit">Send partnership enquiry <ArrowRight size={17} /></button>
              </>
            )}
          </form>
        </section>
      </main>

      {/* FLOATING CTA */}
      <a className="floating-cta" href="#contact">Partner with us</a>

      {/* FOOTER */}
      <footer className="footer dark-section">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top"><span className="brand-mark"><span>V</span><i /></span><span className="brand-text"><strong>VATALIYA</strong><small>HOTELS & RESORTS</small></span></a>
            <p className="footer-tagline">Where luxury meets excellence.</p>
          </div>
          <div className="footer-links">
            <div><small>Company</small><a href="#vision">About</a><a href="#why">Why Vataliya</a><a href="#contact">Contact</a></div>
            <div><small>Services</small><a href="#services">Operations</a><a href="#services">Sales & B2B</a><a href="#services">Revenue</a><a href="#services">Marketing</a></div>
            <div><small>Resources</small><a href="#approach">Process</a><a href="#portfolio">Portfolio</a><a href="#model">Our model</a></div>
            <div><small>Legal</small><a href="#">Privacy</a><a href="#">Terms</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vataliya Hotels & Resorts</span>
          <span>Confidentiality · Privacy · Terms</span>
          <span>Built for enduring hospitality</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
