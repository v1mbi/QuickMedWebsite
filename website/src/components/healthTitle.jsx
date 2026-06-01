import React from "react";
import { motion } from "framer-motion";

const HealthTitle = () => {
  return (
    <div className="relative w-full h-[75vh] flex items-center justify-center font-sans overflow-hidden">
          {/* 1. Background Image Layer */}
          <motion.div
            initial={{ opacity: 1, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 -z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
              alt="Modern clinical background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white backdrop-blur-[1px]" />
          </motion.div>
    
          {/* 2. Main UI Container */}
          <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[0.425rem] sm:text-xs  font-bold tracking-[0.3em] text-red-600 uppercase mb-4"
            >
              Generation Health • Reliable Coverage
            </motion.span>
    
            {/* Main Title Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white/60 w-full border border-white/40 rounded-[2.5rem] py-12 md:py-16 shadow-2xl shadow-slate-200/50 backdrop-blur-xl"
            >
              <h1 className="text-5xl font-jakarta md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter text-center  leading-none">
                Death <span className="text-red-600">Insurance</span>
              </h1>
            </motion.div>
    
            {/* Action Buttons - Maximized Spacing */}
            <div className="flex flex-col md:flex-row justify-between w-full mt-2 gap-2 md:gap-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="w-fit py-2 sm:py-4 font-montserrat md:py-3 px-5 sm:px-10 bg-gradient-to-b  from-blue-500 to-blue-600 text-white rounded-xl sm:rounded-2xl font-bold text-[12px] sm:text-sm shadow-lg shadow-blue-100 uppercase tracking-widest transition-all"
              >
                Supporting Families Abroad
              </motion.button>
    
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
                whileTap={{ scale: 0.98 }}
                className="w-fit font-montserrat py-2 sm:py-4 md:py-3 px-5 sm:px-10 bg-gradient-to-b  from-red-500 to-red-600 text-white rounded-xl sm:rounded-2xl font-bold text-[12px] sm:text-sm shadow-lg shadow-red-100 uppercase tracking-widest transition-all"
              >
                Invest in the Future
              </motion.button>
            </div>
          </div>
        </div>
  );
};

export default HealthTitle;
