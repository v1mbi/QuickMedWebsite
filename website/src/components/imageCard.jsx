import React, { useState } from "react";

const ImageCard = ({ imageSrc, altText = "Image preview" }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Loading State if no image source is provided
  if (!imageSrc) {
    return (
      <div className="max-w-2xl w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 animate-pulse">
        <div className="w-full aspect-square bg-gray-200 rounded-xl" />
      </div>
    );
  }

  return (
    <>
      {/* --- MINI IMAGE VIEW --- */}
      <div
        onClick={() => setIsOpen(true)}
        className="group h-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer p-4"
      >
        <div className="overflow-hidden h-full w-full rounded-xl aspect-square">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

      {/* --- EXPANDED IMAGE OVERLAY (LIGHTBOX) --- */}
      {isOpen && (
        <div className="fixed top-10 inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          {/* Background Opacity/Blur - Click anywhere on the background to close */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content container */}
          <div className="relative max-w-4xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-all shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Expanded Full Image */}
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
