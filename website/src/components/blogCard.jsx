import React, { useState } from 'react';

const BlogCard = ({ title, message, imageSrc, author, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Loading State
  if (!title || !message || !author || !date) {
    return (
      <div className="max-w-2xl w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 animate-pulse">
        <div className="h-48 bg-gray-200 rounded-xl mb-4" />
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    );
  }

  return (
    <>
      {/* --- MINI CARD VIEW --- */}
      <div
        onClick={() => setIsOpen(true)}
        className="group  h-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
        <div className="flex h-full flex-row p-4 gap-6">
          <div className="w-5/12  shrink-0 overflow-hidden rounded-xl">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="flex flex-col justify-between py-2">
            <div>
              <span className="text-[8px] sm:text-[10px] font-bold tracking-widest text-rose-500 uppercase">
                Article
              </span>
              <h2 className="text-[10px] sm:text-2xl font-bold font-jakarta text-slate-900 mt-1 mb-3 group-hover:text-rose-600 transition-colors">
                {title}
              </h2>
              <p className="text-slate-600 text-[0.525rem] sm:text-sm line-clamp-5 sm:line-clamp-4 font-jakarta leading-relaxed">
                {message}
              </p>
            </div>

            <div className="mt-2 sm:mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
              <span className="text-[0.525rem] sm:text-xs font-semibold text-slate-400">
                {date}
              </span>
              <button className="text-rose-600 font-bold text-[0.625rem] sm:text-xs flex items-center gap-1 group/btn">
                READ MORE{" "}
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- EXPANDED FULL-PAGE OVERLAY --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          {/* Background Opacity/Blur */}
          <div
            className="absolute inset-0  bg-white-900/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative top-5 w-full max-w-4xl max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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

            {/* Expanded Layout */}
            <div className="flex flex-col">
              {/* Hero Image */}
              <div className="w-full h-64 sm:h-96 overflow-hidden">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 sm:p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                      {author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold leading-none">
                        {author}
                      </p>
                      <p className="text-slate-400 text-sm mt-1">
                        {date} • 5 min read
                      </p>
                    </div>
                  </div>

                  <h1 className="text-xl sm:text-4xl font-jakarta font-black text-slate-900 leading-tight mb-8">
                    {title}
                  </h1>

                  <div className="prose prose-slate max-w-none">
                    <p className="text-xs sm:text-lg font-jakarta text-slate-600 leading-loose first-letter:text-5xl first-letter:font-bold first-letter:text-rose-600 first-letter:mr-3 first-letter:float-left">
                      {message}
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-rose-600 transition-colors shadow-lg shadow-slate-200"
                    >
                      Back to Feed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;