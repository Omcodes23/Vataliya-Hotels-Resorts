import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight, Compass, MapPin, Menu, Phone, Star, X } from 'lucide-react';
import { DESTINATIONS_DATA, VATALIYA_CORPORATE_INFO } from '../data/hotelsData';

interface NavbarProps {
  scrolled: boolean;
  activeView: string;
  onNavigateHome: () => void;
  onNavigateHotel: (slug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  activeView,
  onNavigateHome,
  onNavigateHotel,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [selectedLocationSlug, setSelectedLocationSlug] = useState<string | null>(null);
  const [mobileSelectedLocation, setMobileSelectedLocation] = useState<string | null>(null);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setLocationsDropdownOpen(false);
    setSelectedLocationSlug(null);
    setMobileSelectedLocation(null);
  };

  const selectedDestination = selectedLocationSlug
    ? DESTINATIONS_DATA.find((d) => d.slug === selectedLocationSlug)
    : null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || activeView !== 'home'
          ? 'bg-[#050b18] py-3.5 border-b border-[#d8b45c]/25 shadow-2xl backdrop-blur-md'
          : 'bg-gradient-to-b from-[#050b18]/95 via-[#050b18]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo & Tagline */}
        <button
          onClick={() => {
            onNavigateHome();
            closeAll();
          }}
          className="flex items-center gap-2.5 sm:gap-3.5 text-left group min-w-0"
        >
          <div className="relative flex items-center justify-center p-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d2244] via-[#07152b] to-[#030914] border border-[#d8b45c]/60 group-hover:border-[#d8b45c] group-hover:shadow-[0_0_20px_rgba(216,180,92,0.35)] transition-all duration-300 flex-shrink-0 shadow-lg">
            <img
              src="/vataliya1.png"
              alt="Vataliya Hotels & Resorts Logo"
              className="h-10 sm:h-12 w-auto object-contain block group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="min-w-0">
            <span className="block font-serif text-sm sm:text-lg font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-white group-hover:text-[#f0d795] transition truncate">
              VATALIYA
            </span>
            <span className="block text-[7.5px] sm:text-[9px] tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#d8b45c] truncate">
              Hotels & Resorts
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9 text-xs tracking-widest uppercase font-medium text-white/90">

          {/* Home */}
          <button
            onClick={onNavigateHome}
            className={`hover:text-[#f0d795] transition ${
              activeView === 'home' ? 'text-[#d8b45c] font-semibold' : ''
            }`}
          >
            Home
          </button>

          {/* OUR LOCATIONS Dropdown: Location First -> Hotel */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsDropdownOpen(true)}
            onMouseLeave={() => {
              setLocationsDropdownOpen(false);
              setSelectedLocationSlug(null);
            }}
          >
            <button
              onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
              className={`flex items-center gap-1.5 hover:text-[#f0d795] transition py-2 ${
                activeView.startsWith('hotel') ? 'text-[#d8b45c] font-semibold' : ''
              }`}
            >
              <MapPin size={13} className="text-[#d8b45c]" />
              Our Locations
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${locationsDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu Box */}
            {locationsDropdownOpen && (
              <div className="absolute top-full left-0 w-[450px] -ml-20 bg-[#071329] border border-[#d8b45c]/40 rounded-xl p-5 shadow-2xl animate-fadeIn">

                {!selectedDestination ? (
                  /* STEP 1: ONLY 2 LOCATION OPTIONS APPEAR */
                  <div className="space-y-3">
                    <div className="border-b border-white/10 pb-2.5 flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#d8b45c] uppercase font-semibold flex items-center gap-1.5">
                        <Compass size={12} /> Select Location
                      </span>
                      <span className="text-[10px] text-gray-400">Himachal Pradesh</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 pt-1">
                      {/* Location 1: Shimla */}
                      <button
                        onClick={() => setSelectedLocationSlug('shimla')}
                        className="w-full text-left p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#d8b45c] hover:bg-[#d8b45c]/10 transition flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#d8b45c]/10 border border-[#d8b45c]/30 flex items-center justify-center text-[#d8b45c] group-hover:scale-105 transition">
                            <MapPin size={18} />
                          </div>
                          <div>
                            <h4 className="font-serif text-base text-white font-medium group-hover:text-[#f0d795] transition">
                              Shimla
                            </h4>
                            <span className="text-[10px] text-gray-400">Himachal Pradesh · 3★ Mountain Resort</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[#d8b45c] font-medium">
                          <span>Select</span>
                          <ChevronRight size={14} />
                        </div>
                      </button>

                      {/* Location 2: Manali */}
                      <button
                        onClick={() => setSelectedLocationSlug('manali')}
                        className="w-full text-left p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#d8b45c] hover:bg-[#d8b45c]/10 transition flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#d8b45c]/10 border border-[#d8b45c]/30 flex items-center justify-center text-[#d8b45c] group-hover:scale-105 transition">
                            <MapPin size={18} />
                          </div>
                          <div>
                            <h4 className="font-serif text-base text-white font-medium group-hover:text-[#f0d795] transition">
                              Manali
                            </h4>
                            <span className="text-[10px] text-gray-400">Himachal Pradesh · 2 Luxury Properties</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[#d8b45c] font-medium">
                          <span>Select</span>
                          <ChevronRight size={14} />
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* STEP 2: HOTELS FOR THAT SELECTED LOCATION APPEAR */
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <button
                        onClick={() => setSelectedLocationSlug(null)}
                        className="inline-flex items-center gap-1.5 text-[10px] text-[#d8b45c] hover:underline font-semibold uppercase tracking-wider"
                      >
                        <ArrowLeft size={12} /> Change Location
                      </button>
                      <span className="text-[10px] text-gray-300">
                        Location: <strong className="text-white">{selectedDestination.name}</strong> ({selectedDestination.hotels.length} {selectedDestination.hotels.length === 1 ? 'Property' : 'Properties'})
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                      {selectedDestination.hotels.map((hotel) => (
                        <div
                          key={hotel.id}
                          onClick={() => {
                            onNavigateHotel(hotel.slug);
                            closeAll();
                          }}
                          className="cursor-pointer p-3.5 rounded-xl bg-gradient-to-br from-[#081a38] to-[#050b18] border border-[#d8b45c]/40 hover:border-[#d8b45c] hover:shadow-xl hover:shadow-[#d8b45c]/10 transition group/card flex items-center gap-3.5"
                        >
                          <div
                            className="w-24 h-20 rounded-lg bg-cover bg-center relative overflow-hidden flex-shrink-0"
                            style={{ backgroundImage: `url(${hotel.heroImage})` }}
                          >
                            <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[8px] text-[#f0d795] font-semibold flex items-center gap-0.5">
                              <Star size={8} fill="#d8b45c" className="text-[#d8b45c]" />
                              {hotel.starRating}★
                            </span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h5 className="font-serif text-sm text-white font-medium group-hover/card:text-[#d8b45c] transition truncate">
                              {hotel.name}
                            </h5>
                            <p className="text-[10px] text-gray-300 mt-0.5 truncate">
                              {hotel.locationName}
                            </p>
                            <span className="inline-flex items-center gap-1 text-[11px] text-[#f0d795] font-medium mt-1.5 group-hover/card:translate-x-1 transition-transform">
                              Explore Property <ArrowRight size={11} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

          {/* Section links */}
          <a
            href="#hotels"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="hover:text-[#f0d795] transition"
          >
            Our Hotels
          </a>

          <a
            href="#portfolio"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="hover:text-[#f0d795] transition"
          >
            Portfolio
          </a>

          <a
            href="#corporate"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="hover:text-[#f0d795] transition"
          >
            Corporate & MICE
          </a>

          <a
            href="#contact"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="hover:text-[#f0d795] transition"
          >
            Contact
          </a>
        </nav>

        {/* Right Phone Contact Link & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
            className="hidden sm:flex items-center gap-2 text-xs text-[#f0d795] hover:text-white px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#d8b45c]/15 to-[#f0d795]/5 border border-[#d8b45c]/40 hover:border-[#d8b45c] whitespace-nowrap shadow-sm transition"
          >
            <Phone size={12} className="text-[#d8b45c] flex-shrink-0" />
            <span className="font-medium tracking-wider">{VATALIYA_CORPORATE_INFO.phoneDisplay}</span>
          </a>

          {/* Mobile phone quick button */}
          <a
            href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
            className="sm:hidden flex items-center gap-1.5 text-[10.5px] text-[#f0d795] hover:text-white font-semibold tracking-wider transition px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#d8b45c]/15 to-[#f0d795]/5 border border-[#d8b45c]/40 whitespace-nowrap shadow-sm"
          >
            <Phone size={12} className="text-[#d8b45c] flex-shrink-0" />
            <span>{VATALIYA_CORPORATE_INFO.phoneDisplay}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#d8b45c] transition rounded-xl border border-white/15 bg-white/[0.03] hover:border-[#d8b45c]/40"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050b18] border-b border-[#d8b45c]/30 px-5 sm:px-6 py-5 space-y-4 text-white text-sm uppercase tracking-widest animate-fadeIn shadow-2xl">
          {/* Mobile Direct Central Call Banner */}
          <div>
            <a
              href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#d8b45c]/20 via-[#f0d795]/10 to-transparent border border-[#d8b45c]/40 text-[#f0d795] normal-case"
            >
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#d8b45c]" />
                <span className="text-xs font-semibold tracking-normal">
                  Central Sales: {VATALIYA_CORPORATE_INFO.phoneDisplay}
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-[#d8b45c] text-black px-2.5 py-1 rounded-md">
                Call
              </span>
            </a>
          </div>

          <button
            onClick={() => {
              onNavigateHome();
              closeAll();
            }}
            className="block w-full text-left py-2 border-b border-white/10"
          >
            Home
          </button>

          {/* Mobile Locations: 1. Choose Location -> 2. Show Hotel */}
          <div className="py-2 border-b border-white/10 space-y-2">
            <span className="block text-[10px] text-[#d8b45c] font-semibold tracking-wider">
              Our Locations
            </span>

            {/* Shimla Accordion */}
            <div className="rounded-lg bg-white/[0.03] border border-white/10 overflow-hidden">
              <button
                onClick={() => setMobileSelectedLocation(mobileSelectedLocation === 'shimla' ? null : 'shimla')}
                className="w-full p-3 flex items-center justify-between text-xs text-white"
              >
                <span>📍 Location: Shimla</span>
                <ChevronDown size={14} className={`transition-transform ${mobileSelectedLocation === 'shimla' ? 'rotate-180 text-[#d8b45c]' : ''}`} />
              </button>

              {mobileSelectedLocation === 'shimla' && (
                <div className="p-3 bg-[#071329] border-t border-white/10 space-y-2">
                  <span className="block text-[10px] text-gray-400">Hotel in Shimla:</span>
                  <button
                    onClick={() => {
                      onNavigateHotel('manaw-valley-resort');
                      closeAll();
                    }}
                    className="w-full text-left p-2.5 rounded bg-white/[0.04] text-[#f0d795] text-xs font-serif flex items-center justify-between"
                  >
                    <span>➔ Manaw Valley Resort (3★)</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </div>

            {/* Manali Accordion */}
            <div className="rounded-lg bg-white/[0.03] border border-white/10 overflow-hidden">
              <button
                onClick={() => setMobileSelectedLocation(mobileSelectedLocation === 'manali' ? null : 'manali')}
                className="w-full p-3 flex items-center justify-between text-xs text-white"
              >
                <span>📍 Location: Manali</span>
                <ChevronDown size={14} className={`transition-transform ${mobileSelectedLocation === 'manali' ? 'rotate-180 text-[#d8b45c]' : ''}`} />
              </button>

              {mobileSelectedLocation === 'manali' && (
                <div className="p-3 bg-[#071329] border-t border-white/10 space-y-2">
                  <span className="block text-[10px] text-gray-400">Hotels in Manali (2):</span>
                  <button
                    onClick={() => {
                      onNavigateHotel('hotel-indrasan-manali');
                      closeAll();
                    }}
                    className="w-full text-left p-2.5 rounded bg-white/[0.04] text-[#f0d795] text-xs font-serif flex items-center justify-between"
                  >
                    <span>➔ Hotel Indrasan (3★)</span>
                    <ArrowRight size={13} />
                  </button>
                  <button
                    onClick={() => {
                      onNavigateHotel('the-fyra-ashapuri-snow-inn');
                      closeAll();
                    }}
                    className="w-full text-left p-2.5 rounded bg-white/[0.04] text-[#f0d795] text-xs font-serif flex items-center justify-between"
                  >
                    <span>➔ Fyra Ashapuri Snow Inn (3★)</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <a
            href="#hotels"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
              closeAll();
            }}
            className="block py-2 border-b border-white/10"
          >
            Our Hotels
          </a>

          <a
            href="#portfolio"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
              closeAll();
            }}
            className="block py-2 border-b border-white/10"
          >
            Portfolio
          </a>

          <a
            href="#corporate"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
              closeAll();
            }}
            className="block py-2 border-b border-white/10"
          >
            Corporate & Groups
          </a>

          <a
            href="#contact"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
              closeAll();
            }}
            className="block py-2 border-b border-white/10"
          >
            Contact
          </a>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
              className="block w-full py-2.5 text-center text-xs text-[#f0d795] border border-[#d8b45c]/40 rounded-lg bg-[#081a38]"
            >
              📞 {VATALIYA_CORPORATE_INFO.phoneDisplay}
            </a>
            <a
              href={`tel:${VATALIYA_CORPORATE_INFO.phone2}`}
              className="block w-full py-2.5 text-center text-xs text-[#f0d795] border border-[#d8b45c]/40 rounded-lg bg-[#081a38]"
            >
              📞 {VATALIYA_CORPORATE_INFO.phone2Display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
