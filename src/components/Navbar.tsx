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
          className="flex items-center gap-3.5 text-left group"
        >
          <div className="relative flex items-center justify-center p-1.5 rounded-lg bg-[#081a38] border border-[#d8b45c]/50 group-hover:border-[#d8b45c] transition shadow-md">
            <img
              src="/vataliya1.png"
              alt="Vataliya Hotels & Resorts Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <div>
            <span className="block font-serif text-base sm:text-lg font-semibold tracking-[0.2em] text-white group-hover:text-[#f0d795] transition">
              VATALIYA
            </span>
            <span className="block text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[#d8b45c]">
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
                            <span className="text-[10px] text-gray-400">Himachal Pradesh · 4★ Mountain Resort</span>
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
                            <span className="text-[10px] text-gray-400">Himachal Pradesh · 3★ Mountain Haven</span>
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
                  /* STEP 2: ONLY HOTEL FOR THAT SELECTED LOCATION APPEARS */
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <button
                        onClick={() => setSelectedLocationSlug(null)}
                        className="inline-flex items-center gap-1.5 text-[10px] text-[#d8b45c] hover:underline font-semibold uppercase tracking-wider"
                      >
                        <ArrowLeft size={12} /> Change Location
                      </button>
                      <span className="text-[10px] text-gray-300">
                        Location: <strong className="text-white">{selectedDestination.name}</strong>
                      </span>
                    </div>

                    <div
                      onClick={() => {
                        onNavigateHotel(selectedDestination.hotel.slug);
                        closeAll();
                      }}
                      className="cursor-pointer p-4 rounded-xl bg-gradient-to-br from-[#081a38] to-[#050b18] border border-[#d8b45c]/50 hover:border-[#d8b45c] hover:shadow-xl hover:shadow-[#d8b45c]/10 transition group/card space-y-3"
                    >
                      <div
                        className="h-36 rounded-lg bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: `url(${selectedDestination.hotel.heroImage})` }}
                      >
                        <span className="absolute top-2 left-2 px-2.5 py-1 rounded bg-black/75 text-[9px] text-[#f0d795] font-semibold flex items-center gap-1">
                          <Star size={10} fill="#d8b45c" className="text-[#d8b45c]" />
                          {selectedDestination.hotel.starRating}-Star Property
                        </span>
                      </div>

                      <div>
                        <h5 className="font-serif text-base text-white font-medium group-hover/card:text-[#d8b45c] transition">
                          {selectedDestination.hotel.name}
                        </h5>
                        <p className="text-[11px] text-gray-300 mt-0.5">
                          {selectedDestination.hotel.locationName}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-[#f0d795] font-medium inline-flex items-center gap-1.5 group-hover/card:translate-x-1 transition-transform">
                          Explore Property & Details <ArrowRight size={13} />
                        </span>
                      </div>
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

        {/* Right Phone Contact Link */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
            className="flex items-center gap-2 text-xs text-[#f0d795] hover:text-white font-medium tracking-wider transition px-3 py-1.5 rounded-lg bg-white/[0.04] border border-[#d8b45c]/30"
          >
            <Phone size={13} className="text-[#d8b45c]" />
            <span>{VATALIYA_CORPORATE_INFO.phoneDisplay}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#d8b45c] transition rounded-md border border-white/10"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050b18] border-b border-[#d8b45c]/30 px-6 py-6 space-y-4 text-white text-sm uppercase tracking-widest animate-fadeIn">
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
                    <span>➔ Manaw Valley Resort (4★)</span>
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
                  <span className="block text-[10px] text-gray-400">Hotel in Manali:</span>
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

          <div className="pt-2">
            <a
              href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
              className="block w-full py-3 text-center text-xs text-[#f0d795] border border-[#d8b45c]/40 rounded-lg bg-[#081a38]"
            >
              Call: {VATALIYA_CORPORATE_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
