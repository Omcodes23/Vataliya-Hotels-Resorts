import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; title: string; category?: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) => {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none animate-fadeIn"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-3 text-white/80 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 p-3 text-white/80 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 p-3 text-white/80 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all z-50"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full flex flex-col items-center"
      >
        <div className="relative max-h-[78vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl border border-[#d8b45c]/20">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-[#f0d795] font-serif text-lg font-medium tracking-wide">
            {currentImage.title}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {currentIndex + 1} of {images.length} {currentImage.category && `· ${currentImage.category}`}
          </p>
        </div>
      </div>
    </div>
  );
};
