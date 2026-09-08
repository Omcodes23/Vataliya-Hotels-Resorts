import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Loader2, Sparkles, X } from 'lucide-react';

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
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Safe index validation
  const safeIndex = images && images.length > 0
    ? Math.min(Math.max(0, currentIndex), images.length - 1)
    : 0;

  const currentImage = images && images.length > 0 ? images[safeIndex] : null;

  useEffect(() => {
    setLoading(true);
    setHasError(false);
  }, [currentIndex, isOpen]);

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

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, safeIndex, images?.length, onClose, setCurrentIndex]);

  if (!isOpen || !currentImage) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(safeIndex === 0 ? images.length - 1 : safeIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(safeIndex === images.length - 1 ? 0 : safeIndex + 1);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/92 backdrop-blur-xl p-3 sm:p-6 select-none animate-fadeIn"
      style={{ isolation: 'isolate' }}
    >
      {/* Top Bar / Close Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-50 flex items-center gap-3">
        <button
          onClick={onClose}
          className="p-3 text-white/80 hover:text-white bg-[#071329]/90 border border-[#d8b45c]/40 rounded-full hover:bg-[#d8b45c] hover:text-black transition-all shadow-xl hover:scale-105"
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <X size={22} />
        </button>
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 md:left-10 p-3 sm:p-4 text-[#f0d795] hover:text-black bg-[#071329]/90 border border-[#d8b45c]/40 rounded-full hover:bg-[#d8b45c] transition-all z-50 shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
        aria-label="Previous image"
        title="Previous (Left Arrow)"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 md:right-10 p-3 sm:p-4 text-[#f0d795] hover:text-black bg-[#071329]/90 border border-[#d8b45c]/40 rounded-full hover:bg-[#d8b45c] transition-all z-50 shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
        aria-label="Next image"
        title="Next (Right Arrow)"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Lightbox Frame */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full flex flex-col items-center justify-center relative mx-auto"
      >
        <div className="relative w-full h-[52vh] sm:h-[60vh] md:h-[66vh] max-h-[620px] min-h-[260px] sm:min-h-[380px] flex items-center justify-center bg-[#050b18]/90 border border-[#d8b45c]/40 rounded-2xl p-2 sm:p-4 shadow-2xl shadow-black overflow-hidden backdrop-blur-md">
          {/* Loading Spinner */}
          {loading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#d8b45c] z-10 bg-[#050b18]/80">
              <Loader2 size={32} className="animate-spin" />
              <span className="text-xs uppercase tracking-widest font-serif">Loading View...</span>
            </div>
          )}

          {/* Active Image */}
          {!hasError ? (
            <img
              src={currentImage.url}
              alt={currentImage.title}
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setHasError(true);
              }}
              className={`max-h-[62vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl transition-opacity duration-300 ${
                loading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 bg-[#071329] rounded-xl border border-[#d8b45c]/30 max-w-md my-8">
              <Sparkles size={36} className="text-[#d8b45c]" />
              <h4 className="font-serif text-lg text-white font-medium">
                {currentImage.title}
              </h4>
              <p className="text-xs text-gray-300">
                Experience the beauty and serenity of our mountain retreat.
              </p>
              {currentImage.category && (
                <span className="px-3 py-1 rounded-full bg-[#d8b45c]/20 text-[#f0d795] text-[10px] uppercase font-semibold border border-[#d8b45c]/40">
                  {currentImage.category}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Caption Bar */}
        <div className="mt-4 text-center space-y-1.5 px-4">
          <p className="text-[#f0d795] font-serif text-base sm:text-xl font-medium tracking-wide">
            {currentImage.title}
          </p>
          <div className="flex items-center justify-center gap-2.5 text-xs text-gray-300">
            {currentImage.category && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#d8b45c]/20 text-[#f0d795] text-[10px] font-semibold uppercase tracking-wider border border-[#d8b45c]/30">
                {currentImage.category}
              </span>
            )}
            <span className="text-gray-400">
              {safeIndex + 1} of {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
