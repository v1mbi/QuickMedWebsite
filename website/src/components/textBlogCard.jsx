import React, { useState } from 'react';

const TextBlogCard = ({ title, message, author, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Loading State - matches the height/shape of the text card
  if (!title || !message || !author || !date) {
    return (
      <div className="max-w-2xl w-full h-full min-h-[300px] bg-gray-50 border border-gray-200 rounded-3xl p-8 animate-pulse flex flex-col gap-4">
        <div className="h-4 w-20 bg-gray-200 rounded" />
        <div className="h-8 w-3/4 bg-gray-200 rounded" />
        <div className="h-20 w-full bg-gray-200 rounded" />
      </div>
    );
  }

  return (
    <>
      {/* --- MINI CARD VIEW (No Image) --- */}
      <div 
        onClick={() => setIsOpen(true)}
        className="group h-full relative max-w-2xl  flex flex-col bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden"
      >
        {/* Subtle background glow to add depth since there's no photo */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-50 rounded-full blur-3xl group-hover:bg-rose-100 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-black tracking-[0.2em] text-rose-500 uppercase">Editorial</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{date}</span>
          </div>

          <h2 className="text-2xl font-jakarta font-bold text-slate-900 leading-[1.15] mb-4 group-hover:text-rose-600 transition-colors duration-300">
            {title}
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed line-clamp-4 font-jakarta">
            {message}
          </p>
          
          <div className="mt-6 pt-2  border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-rose-600 font-bold text-xs border border-rose-100">
                {author.charAt(0)}
              </div>
              <span className="text-sm font-bold text-slate-800">{author}</span>
            </div>
            
            <button className="text-rose-600 font-bold text-xs flex items-center gap-1 group/btn">
              READ ARTICLE 
              <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- EXPANDED FULL-PAGE OVERLAY --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          
          <div 
            className="absolute inset-0 bg-white-900/60 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full top-6 max-w-3xl max-h-[80vh] bg-white rounded-[2.5rem] shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 z-10 p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="p-10 sm:p-16 md:p-24">
              <header className="text-center mb-12">
                <div className="inline-block px-4 py-1 rounded-full border border-rose-100 text-rose-500 text-[10px] font-bold uppercase tracking-widest mb-8">
                  Featured Thought
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-jakarta font-black text-slate-900 leading-[1.1] mb-10">
                  {title}
                </h1>

                <div className="flex items-center justify-center gap-4 text-slate-400 text-sm font-medium uppercase tracking-tighter">
                  <span className="text-slate-900 font-bold">{author}</span>
                  <span className="text-slate-200">/</span>
                  <span>{date}</span>
                </div>
              </header>

              <div className="max-w-xl mx-auto">
                <div className="prose prose-slate prose-lg">
                  {/* Drop cap for that "elegant" look */}
                  <p className="text-xl font-jakarta text-slate-600 leading-[2] first-letter:text-6xl first-letter:font-black first-letter:text-rose-600 first-letter:mr-3 first-letter:float-left">
                    {message}
                  </p>
                </div>

                <div className="mt-16 pt-10 border-t border-slate-100 flex justify-center">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-slate-900 font-bold text-xs tracking-[0.2em] group/close"
                  >
                    <span className="group-hover/close:-translate-x-2 transition-transform">←</span>
                    BACK TO FEED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextBlogCard;