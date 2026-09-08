import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  // Safe index validation
  const safeIndex = images && images.length > 0
    ? Math.min(Math.max(0, currentIndex), images.length - 1)
    : 0;

  const currentImage = images && images.length > 0 ? images[safeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex(safeIndex === 0 ? images.length - 1 : safeIndex - 1);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex(safeIndex === images.length - 1 ? 0 : safeIndex + 1);
      }
    };

    // Lock body scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, safeIndex, images?.length, onClose, setCurrentIndex]);

  if (!isOpen || !currentImage || typeof document === 'undefined') {
    return null;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(safeIndex === 0 ? images.length - 1 : safeIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(safeIndex === images.length - 1 ? 0 : safeIndex + 1);
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 w-screen h-screen z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 select-none"
      style={{ isolation: 'isolate', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Top Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-6 sm:right-8 p-3 text-white/90 hover:text-white bg-[#071329]/90 border border-[#d8b45c]/50 rounded-full hover:bg-[#d8b45c] hover:text-black transition-all z-50 shadow-2xl hover:scale-105 cursor-pointer"
        aria-label="Close modal"
        title="Close (Esc)"
      >
        <X size={24} />
      </button>

      {/* Prev Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 md:left-10 p-3.5 sm:p-4 text-[#f0d795] hover:text-black bg-[#071329]/90 border border-[#d8b45c]/50 rounded-full hover:bg-[#d8b45c] transition-all z-50 shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Previous image"
        title="Previous (Left Arrow)"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 md:right-10 p-3.5 sm:p-4 text-[#f0d795] hover:text-black bg-[#071329]/90 border border-[#d8b45c]/50 rounded-full hover:bg-[#d8b45c] transition-all z-50 shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Next image"
        title="Next (Right Arrow)"
      >
        <ChevronRight size={28} />
      </button>

      {/* Enlarged Image and Caption Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full flex flex-col items-center justify-center relative mx-auto my-auto z-10"
      >
        {/* Main Image Frame */}
        <div className="relative max-h-[76vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-[#d8b45c]/40 bg-[#050b18]">
          <img
            key={currentImage.url}
            src={currentImage.url}
            alt={currentImage.title}
            loading="eager"
            className="max-h-[74vh] w-auto max-w-full object-contain rounded-xl shadow-2xl block"
          />
        </div>

        {/* Caption Info */}
        <div className="mt-4 text-center space-y-1.5 px-4">
          <p className="text-[#f0d795] font-serif text-lg sm:text-2xl font-medium tracking-wide drop-shadow-md">
            {currentImage.title}
          </p>
          <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
            {currentImage.category && (
              <span className="px-3 py-0.5 rounded-full bg-[#d8b45c]/20 text-[#f0d795] text-[11px] font-semibold uppercase tracking-wider border border-[#d8b45c]/30">
                {currentImage.category}
              </span>
            )}
            <span className="text-gray-300 font-medium">
              {safeIndex + 1} of {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
