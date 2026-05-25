import React from "react";
import { motion } from "framer-motion";
import { FileDown, Clock, PhoneCall, MapPin } from "lucide-react";
import serviceLocator from "../assets/service-locator.xlsx";

const ProviderResources = () => {
  // SLOW CONTAINER VARIANTS: Slower stagger for child elements
  const containerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Slowed down main container fade
        ease: "easeOut",
        staggerChildren: 0.4, // Increased stagger delay to 0.4 seconds per child
      },
    },
  };

  // SLOW ITEM VARIANTS: Slowed duration, larger slide-in, custom ease curve
  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // Slides from further down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // Slower reveal duration (1.2 seconds)
        ease: [0.25, 1, 0.5, 1], // Custom smooth deceleration curve for weighted slow down
      },
    },
  };

  return (
    <div className="w-full font-jakarta flex items-center justify-center p-6">
      {/* 
        Container triggers when it rolls into view.
        We ensure it only animates 'once' and waits for a slight '-100px' margin.
      */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Triggers when 100px deep in viewport
        className="w-full max-w-4xl backdrop-blur-md border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-3xl shadow-slate-200/50"
      >
        {/* Section 1: Service Provider List */}
        <motion.div
          variants={itemVariants} // Orchestrated by container staggered transition
          className="bg-white rounded-[2rem] p-8 mb-8 border border-white shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <MapPin size={24} />
            </div>
            {/* Header Transition (Slower) */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }} // Relaxed slide-down duration
              className="text-[12px] sm:text-xl font-montserrat md:text-2xl font-bold text-blue-600 tracking-tight"
            >
              Service Provider List
            </motion.h2>
            <motion.a
              href={serviceLocator}
              download
              whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
              whileTap={{ scale: 0.98 }}
              className="ml-auto 
              md:w-auto px-5 sm:px-10 py-2 sm:py-4 bg-red-500 text-white 
              font-bold rounded-lg sm:rounded-2xl flex items-center justify-center 
              gap-2 shadow-lg shadow-red-200 transition-colors 
              uppercase tracking-wider"
            >
              <FileDown size={20} />
              <h1 className="hidden md:block">Download Now</h1>
            </motion.a>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8 text-[0.75rem] sm:text-lg">
            This list shows all doctors and specialists currently available in
            your network. Find verified healthcare professionals close to your
            location, including general practitioners, dentists, and physical
            therapists who are ready to assist you.
          </p>
        </motion.div>

        {/* Section 2: Waiting Period */}
        <motion.div variants={itemVariants} className="px-4">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="p-2 bg-red-50 rounded-lg text-red-600">
              <Clock size={24} />
            </div>
            {/* Header Transition (Slower) */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }} // Relaxed slide-down duration + slight offset delay
              className="text-[12px] sm:text-xl font-montserrat md:text-2xl font-bold text-red-600 tracking-tight"
            >
              Waiting Period
            </motion.h2>
          </div>

          <p className="text-slate-600 leading-relaxed mb-4 text-[0.75rem] sm:text-lg text-center md:text-left">
            Review the expected waiting periods for different types of
            conditions and procedures. We provide transparent timelines for
            elective surgeries, specialist appointments, and chronic care
            management to help you plan your health journey effectively.
          </p>

          <p className="text-slate-500 font-medium italic mb-8 text-[0.75rem] sm:text-center md:text-left">
            For more information you can always contact us.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 bg-red-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-100"
            >
              <FileDown size={20} />
              Download PDF
            </motion.button>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
            >
              <PhoneCall size={20} />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProviderResources;
