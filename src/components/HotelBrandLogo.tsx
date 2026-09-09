import React, { useState } from 'react';
import { Mountain, Sparkles, Star, TreePine } from 'lucide-react';
import { HotelData } from '../data/hotelsData';

interface HotelBrandLogoProps {
  hotel: HotelData;
  className?: string;
}

export const HotelBrandLogo: React.FC<HotelBrandLogoProps> = ({
  hotel,
  className = 'w-48 h-24',
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  // Render the distinctive custom luxury emblem fallback
  const renderFallbackLogo = () => {
    if (hotel.id === 'manaw-valley-resort') {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1e3d] to-[#061022] text-[#d8b45c] p-2 select-none border border-[#d8b45c]/30 rounded-xl shadow-inner">
          <div className="flex items-center gap-1.5 text-[#d8b45c] mb-1">
            <TreePine size={16} className="text-[#d8b45c]" />
            <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-[#f0d795]">
              SHIMLA
            </span>
            <TreePine size={16} className="text-[#d8b45c]" />
          </div>
          <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-white uppercase text-center leading-tight">
            MANAW VALLEY
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-4 bg-[#d8b45c]/50" />
            <span className="text-[8px] tracking-[0.3em] uppercase text-[#d8b45c] font-medium">
              RESORT · 3★
            </span>
            <span className="h-[1px] w-4 bg-[#d8b45c]/50" />
          </div>
        </div>
      );
    }

    if (hotel.id === 'hotel-indrasan-manali') {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0e2243] to-[#071329] text-[#d8b45c] p-2 select-none border border-[#d8b45c]/30 rounded-xl shadow-inner">
          <div className="flex items-center gap-1 text-[#d8b45c] mb-1">
            <Mountain size={15} />
            <div className="flex text-[#d8b45c]">
              <Star size={9} fill="#d8b45c" />
              <Star size={9} fill="#d8b45c" />
              <Star size={9} fill="#d8b45c" />
            </div>
            <Mountain size={15} />
          </div>
          <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-white uppercase text-center leading-tight">
            HOTEL INDRASAN
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-4 bg-[#d8b45c]/50" />
            <span className="text-[8px] tracking-[0.3em] uppercase text-[#d8b45c] font-medium">
              MANALI · HIMACHAL
            </span>
            <span className="h-[1px] w-4 bg-[#d8b45c]/50" />
          </div>
        </div>
      );
    }

    if (hotel.id === 'the-fyra-ashapuri-snow-inn') {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1429] via-[#0d1c3a] to-[#060e1d] text-[#d8b45c] p-2 select-none border border-[#d8b45c]/30 rounded-xl shadow-inner">
          <div className="flex items-center gap-1.5 text-[#d8b45c] mb-0.5">
            <Sparkles size={13} className="text-[#f0d795]" />
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#f0d795]">
              FYRA
            </span>
            <Sparkles size={13} className="text-[#f0d795]" />
          </div>
          <span className="font-serif text-xs sm:text-sm font-bold tracking-wider text-white uppercase text-center leading-tight">
            ASHAPURI SNOW INN
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-4 bg-[#d8b45c]/50" />
            <span className="text-[8px] tracking-[0.25em] uppercase text-[#d8b45c] font-medium">
              MANALI · 3★
            </span>
            <span className="h-[1px] w-4 bg-[#d8b45c]/50" />
          </div>
        </div>
      );
    }

    // Default luxury fallback
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#081a38] text-[#d8b45c] p-2 select-none border border-[#d8b45c]/30 rounded-xl">
        <Sparkles size={16} className="text-[#d8b45c] mb-1" />
        <span className="font-serif text-sm font-semibold text-white uppercase text-center">
          {hotel.name}
        </span>
        <span className="text-[8px] tracking-[0.2em] uppercase text-[#d8b45c] mt-0.5">
          {hotel.city}
        </span>
      </div>
    );
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {!imageFailed && hotel.logoUrl ? (
        <img
          src={hotel.logoUrl}
          alt={`${hotel.name} Logo`}
          className="max-h-full max-w-full object-contain"
          onError={() => setImageFailed(true)}
          loading="eager"
        />
      ) : (
        renderFallbackLogo()
      )}
    </div>
  );
};
