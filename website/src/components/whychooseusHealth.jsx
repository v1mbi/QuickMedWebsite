import React from "react";
import { motion } from "framer-motion";


/**
 * WhyChooseUsHealth Component
 * A modern, minimalist section highlighting the advantages of health plans in Zimbabwe.
 */
const WhyChooseUsHealth = ({points}) => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 px-6 bg-slate-50 rounded-3xl font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-jakarta font-bold tracking-[0.2em] text-red-600 uppercase mb-3"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-montserrat md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Protection built around your life
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 ${
                index === 6
                  ? " lg:col-span-3 flex flex-col lg:items-center lg:text-center"
                  : ""
              }`}
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold  text-slate-900 mb-3 tracking-tight">
                {point.title}
              </h4>
              <p className="text-slate-600 font-jakarta leading-relaxed max-w-sm">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsHealth;
