import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { DESTINATIONS_DATA, HOTELS_DATA, VATALIYA_CORPORATE_INFO } from '../data/hotelsData';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateHotel: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateHotel,
}) => {
  return (
    <footer className="bg-[#050b18] text-[#f6f4ef] border-t border-[#d8b45c]/25 pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Col 1: Brand & Instagram */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-lg bg-[#081a38] border border-[#d8b45c]/40">
                <img
                  src="/vataliya1.png"
                  alt="Vataliya Hotels & Resorts Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="block font-serif text-lg font-semibold tracking-[0.2em] text-white">
                  VATALIYA
                </span>
                <span className="block text-[9px] tracking-[0.3em] uppercase text-[#d8b45c]">
                  Hotels & Resorts
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Curating authentic luxury mountain retreats and distinctive hospitality experiences across Himachal Pradesh and India. Where luxury meets excellence.
            </p>
            {/* ONLY Instagram Social Media */}
            <div className="pt-2">
              <a
                href={VATALIYA_CORPORATE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#E1306C]/20 to-[#FD1D1D]/20 border border-[#E1306C]/40 text-[#f0d795] hover:border-[#E1306C] hover:text-white transition text-xs font-medium"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-[#E1306C]" />
                <span>Follow on Instagram @vataliyahotels</span>
              </a>
            </div>
          </div>

          {/* Col 2: Our Locations */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <span className="block text-[10px] font-semibold tracking-widest text-[#d8b45c] uppercase">
              Our Locations
            </span>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <button
                  onClick={() => onNavigateHotel('manaw-valley-resort')}
                  className="hover:text-[#f0d795] transition text-left"
                >
                  📍 Shimla (4★ Resort)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateHotel('hotel-indrasan-manali')}
                  className="hover:text-[#f0d795] transition text-left"
                >
                  📍 Manali (3★ Luxury)
                </button>
              </li>
              <li>
                <a href="#hotels" className="hover:text-[#f0d795] transition">
                  Our Partner Hotels
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#f0d795] transition">
                  Portfolio Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Properties & Inquiries */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="block text-[10px] font-semibold tracking-widest text-[#d8b45c] uppercase">
              Partner Properties & Emails
            </span>
            <ul className="space-y-3 text-gray-300">
              <li className="space-y-1">
                <button
                  onClick={() => onNavigateHotel('manaw-valley-resort')}
                  className="font-medium text-white hover:text-[#f0d795] transition text-left block"
                >
                  Manaw Valley Resort (Shimla)
                </button>
                <a
                  href={`mailto:${HOTELS_DATA['manaw-valley-resort'].hotelInquiryEmail}`}
                  className="text-gray-400 hover:text-[#d8b45c] text-[11px] block"
                >
                  {HOTELS_DATA['manaw-valley-resort'].hotelInquiryEmail}
                </a>
              </li>

              <li className="space-y-1">
                <button
                  onClick={() => onNavigateHotel('hotel-indrasan-manali')}
                  className="font-medium text-white hover:text-[#f0d795] transition text-left block"
                >
                  Hotel Indrasan (Manali)
                </button>
                <a
                  href={`mailto:${HOTELS_DATA['hotel-indrasan-manali'].hotelInquiryEmail}`}
                  className="text-gray-400 hover:text-[#d8b45c] text-[11px] block"
                >
                  {HOTELS_DATA['hotel-indrasan-manali'].hotelInquiryEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Central Reservations */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="block text-[10px] font-semibold tracking-widest text-[#d8b45c] uppercase">
              Corporate Office & Central Desk
            </span>
            <div className="space-y-2.5 text-gray-300">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#d8b45c] flex-shrink-0" />
                <a href={`tel:${VATALIYA_CORPORATE_INFO.phone}`} className="hover:underline font-medium text-white">
                  {VATALIYA_CORPORATE_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#d8b45c] flex-shrink-0" />
                <a href={`mailto:${VATALIYA_CORPORATE_INFO.bookingEmail}`} className="hover:underline">
                  {VATALIYA_CORPORATE_INFO.bookingEmail}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#d8b45c] flex-shrink-0" />
                <a href={`mailto:${VATALIYA_CORPORATE_INFO.partnershipsEmail}`} className="hover:underline">
                  {VATALIYA_CORPORATE_INFO.partnershipsEmail}
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1 text-gray-300 leading-relaxed">
                <MapPin size={16} className="text-[#d8b45c] flex-shrink-0 mt-0.5" />
                <span className="text-[11px]">{VATALIYA_CORPORATE_INFO.address}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <span>© 2026 Vataliya Hotels & Resorts. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#contact" className="hover:text-white transition">Hotel Operations & Partnerships</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
