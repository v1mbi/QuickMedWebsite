import React from "react";
import { Helmet } from "react-helmet-async"; // Highly recommended for React SPA SEO
import { motion } from "framer-motion";

// Component imports
import AssetQuoteForm from "../../components/assetForm";
import AllInsuranceAdvantages from "../../components/whyAsset";
import { Contact } from "../../components/contact";
import InsuranceSteps from "../../components/steps";
import image from "../../assets/assetWallPaper.jpeg";

const AssetInsurance = () => {
  return (
    <>
      {/* 1. Injection of SEO Meta Tags */}
      <Helmet>
        <title>Asset Insurance & Medical Coverage | QuickMed Connections</title>
        <meta
          name="description"
          content="Secure your family's future with reliable Asset Insurance from QuickMed Connections. Get a quick medical asset quote and explore our flexible coverage plans."
        />
        <meta
          name="keywords"
          content="asset insurance, zimbabwe, abroad, insurance, international, overseas,  medical asset coverage, quickmed connections, reliable healthcare coverage"
        />
        <link rel="canonical" href="https://yourwebsite.com/asset-insurance" />

        {/* Open Graph Tags for Social Media SEO */}
        <meta
          property="og:title"
          content="Asset Insurance & Medical Coverage | QuickMed Connections"
        />
        <meta
          property="og:description"
          content="Secure your family's future with reliable Asset Insurance from QuickMed Connections."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 2. Semantic Wrapper (<main> instead of <div>) */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[75vh] flex items-center justify-center font-sans overflow-hidden">
          {/* Background Image Layer (Optimized Alt Text) */}
          <motion.div
            initial={{ opacity: 1, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 -z-10"
          >
            <img
              src={image}
              alt="QuickMed Connections Asset Insurance and Healthcare Protection Background"
              className="w-full h-full object-cover"
              loading="eager" // Hero images should load instantly for Better Core Web Vitals (LCP)
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white backdrop-blur-[1px]" />
          </motion.div>

          {/* Main UI Container */}
          <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[0.425rem] sm:text-xs font-bold tracking-[0.3em] text-red-600 uppercase mb-4"
            >
              Generation Health • Reliable Coverage
            </motion.span>

            {/* Main Title Box (Semantic H1) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white/60 w-full border border-white/40 rounded-[2.5rem] py-12 md:py-16 shadow-2xl shadow-slate-200/50 backdrop-blur-xl"
            >
              <h1 className="text-4xl sm:text-5xl p-1 font-jakarta md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter text-center leading-none">
                Asset <span className="text-red-600">Insurance</span>
              </h1>
            </motion.div>

            {/* Action Callouts */}
            <div className="flex flex-col md:flex-row justify-between w-full mt-2 gap-2 md:gap-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="w-fit py-2 sm:py-4 font-montserrat md:py-3 px-5 sm:px-10 bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-xl sm:rounded-2xl font-bold text-[12px] sm:text-sm shadow-lg shadow-blue-100 uppercase tracking-widest transition-all"
              >
                Supporting Families Abroad
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
                whileTap={{ scale: 0.98 }}
                className="w-fit font-montserrat py-2 sm:py-4 md:py-3 px-5 sm:px-10 bg-gradient-to-b from-red-500 to-red-600 text-white rounded-xl sm:rounded-2xl font-bold text-[12px] sm:text-sm shadow-lg shadow-red-100 uppercase tracking-widest transition-all"
              >
                Invest in the Future
              </motion.button>
            </div>
          </div>
        </section>

        {/* 3. Segmented Layout Sections */}
        <section
          className="w-full flex flex-col lg:flex-row"
          aria-label="Quote and Process Registration"
        >
          <div className="lg:w-3/5">
            <AssetQuoteForm />
          </div>
          <div className="lg:w-2/5">
            <InsuranceSteps />
          </div>
        </section>

        <section aria-label="Insurance Advantages">
          <AllInsuranceAdvantages />
        </section>

        <section aria-label="Contact QuickMed Connections">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default AssetInsurance;
