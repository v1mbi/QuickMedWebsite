import React from "react";

const Demo = () => {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
      <span className="bg-red-500/20 text-red-600 border border-red-500 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
        {"->"} New Features Active {"<-"}
      </span>

      <div className="text-4xl flex flex-col items-center md:text-6xl font-black text-black/80 mt-6 tracking-tight max-w-3xl mx-auto leading-tight drop-shadow-sm">
        <div className="leading-snug flex space-x-2 flex-row md:space-x-3">
          <h1 className="text-black">Don't wait for the</h1>
          <h1 className="text-red-600">Storm</h1>
        </div>
        <div className="leading-snug flex flex-row space-x-3">
          <h1 className="text-black/80">To buy an</h1>
          <h1 className="text-blue-600">Umbrella</h1>
        </div>
      </div>

      <p className="text-slate-700 mt-6 text-lg max-w-xl mx-auto leading-relaxed drop-shadow-sm">
        From seamless coverage to trusted brand insights, explore a fully
        integrated ecosystem designed for modern teams.
      </p>
    </div>
  );
};

export default Demo;
