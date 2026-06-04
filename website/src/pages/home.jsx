import React, { useState, useEffect } from "react";
import {
  Shield,
  Bolt,
  Headset,
  Star,
  ChevronDown,
  Globe,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Mail,
  Heart,
  Umbrella,
  Coins,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { getSanityData } from "../functions/outsource_media";
import Footer from "../components/footer";
import blog from "../components/blogCard";
import videoSrc from "../assets/loop.mp4";
import TextBlogCard from "../components/textBlogCard";
import BlogCard from "../components/blogCard";
import { Contact } from "../components/contact";

export default function Home() {
  const MotionLink = motion.create(Link);
  const reviews = [
    {
      text: "Securing coverage for my parents in Zimbabwe was incredibly straightforward. Pure peace of mind.",
      author: "Tinashe M.",
      location: "London",
    },
    {
      text: "The direct billing system to private hospitals saved us during an emergency. Highly recommend.",
      author: "Chipo D.",
      location: "Birmingham",
    },
    {
      text: "Finally, a diaspora plan that doesn't lose value to inflation. Transparent pricing throughout.",
      author: "Farai G.",
      location: "Manchester",
    },
    {
      text: "Unbelievably quick setup. The AI onboarding tool gave us an accurate quote within seconds.",
      author: "Ruvimbo S.",
      location: "Coventry",
    },
  ];

  // 1. Double the array so it seamlessly wraps around when it hits the end

  // 2. Math parameters matching tailwind widths precisely
  // Card width (280px mobile / 360px desktop) + Gap width (24px mobile / 32px desktop)
  const mobileStep = -(280 + 24);
  const desktopStep = -(360 + 32);

  // Duplicate reviews array to create an uninterrupted infinite loop effect
  const loopTrack = [...reviews, ...reviews, ...reviews];
  const [blogs, setBlogs] = useState([]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const [openFaq, setOpenFaq] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(1);
  const partners = [
    "ECONET Zimbabwe",
    "Generation Health Medical Aid Society",
    "Budget medical Aid Society",
    "First Mutual Health",
  ];

  // Automatically transition from Phase 1 to Phase 2 content
  useEffect(() => {
    document.title = "Home | QuickMed Connections";
    getSanityData("blog").then(setBlogs);
    const timer = setTimeout(() => {
      setCurrentPhase(2);
    }, 4500); // Adjust this value to control how long Phase 1 stays on screen
    return () => clearTimeout(timer);
    
  }, []);

  // Slide paths for Phase transitions
  const phaseVariants = {
    enter: { x: -60, opacity: 0 },
    center: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
    exit: {
      x: 60,
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.4 },
    },
  };

  return (
    <div className="font-montserrat bg-slate-50 w-full text-slate-800  antialiased scroll-smooth min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative w-full overflow-hidden bg-white text-white min-h-[85vh] md:min-h-[90vh] flex items-center justify-center">
        {/* Background Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Backdrop Tint */}
        <div className="absolute h-3 inset-0 bg-gradient-to-t from-transparent to-white/10 backdrop-blur-[2px] z-10" />

        {/* Content Box Overlaid Above Video */}
        <div className="w-full   bg-gradient-to-b from-white to-white/40 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-screen overflow-hidden relative z-20">
          <AnimatePresence mode="wait">
            {currentPhase === 1 ? (
              /* ================= PHASE 1: INITIAL STORM TEXT ================= */
              <motion.div
                key="phase1"
                variants={phaseVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center my-auto w-full"
              >
                <span className="bg-red-500/20 text-red-600 border border-red-500 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase backdrop-blur-sm select-none">
                  {"->"} New Features Active {"<-"}
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-black/80 mt-6 tracking-tight max-w-3xl mx-auto leading-tight md:leading-none drop-shadow-sm w-full text-center block">
                  <div className="inline-block space-x-1 md:space-x-2">
                    <span className="inline-block text-black mr-0 md:mr-3">
                      Don't wait for the
                    </span>
                    <span className="inline-block  text-red-600 mr-0 md:mr-3">
                      Storm
                    </span>
                  </div>
                  <div className="inline-block space-x-1 md:space-x-2">
                    <span className="inline-block  text-black/80 ">
                      To buy an
                    </span>
                    <span className="inline-block text-blue-600">Umbrella</span>
                  </div>
                </h1>

                <p className="text-slate-700 mt-6 text-base sm:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-sm px-2">
                  From seamless coverage to trusted brand insights, explore a
                  fully integrated ecosystem designed for modern teams.
                </p>
              </motion.div>
            ) : (
              /* ================= PHASE 2: BRAND HERO DASHBOARD ================= */
              <motion.div
                key="phase2"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 14 }}
                className="w-full flex flex-col mb-20 items-center justify-center"
              >
                {/* Brand Logo Wrapper */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                  className="w-28 h-24 rounded-2xl p-4 bg-white/[0.06] backdrop-blur-md flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] mb-6 border border-white/[0.08]"
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  />
                </motion.div>

                {/* Main Feature Header Title */}
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl sm:text-4xl font-jakarta md:text-5xl lg:text-6xl font-black tracking-tight text-center text-blue-900 bg-gradient-to-r from-rose-900 via-rose-600 to-rose-900 bg-clip-text text-transparent mb-10  sm:px-4"
                >
                  Your Next Diaspora Insurance
                </motion.h1>

                {/* Grid Layout Layout Mesh Container */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full max-w-5xl grid grid-cols-5 gap-1 sm:gap-4 items-stretch text-slate-800 px-1 sm:px-2"
                >
                  {/* LEFT COLUMN PANEL: "Insure Your Future" Call Out */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="col-span-2 bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-rose-500/10 min-h-[220px] sm:min-h-[300px] border border-rose-400/20 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />

                    <div className="relative z-10">
                      <div className="text-rose-100 w-fit font-bold uppercase tracking-widest text-[0.325rem] sm:text-[0.525rem] md:text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        Global Protection
                      </div>
                      <h2 className="text-xl sm:text-4xl font-black tracking-tight mt-2 sm:mt-6 leading-tight">
                        Insure Your <br />
                        Future
                      </h2>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="text-[0.525rem] sm:text-md w-full mt-3 sm:mt-8 bg-white text-rose-600 font-bold text-base py-2 sm:py-4 px-3 sm:px-6 rounded-2xl shadow-md shadow-rose-900/20 hover:bg-rose-50 transition-colors flex items-center justify-center gap-1 sm:gap-2 relative z-10 group"
                    >
                      <span>Today</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>

                  {/* RIGHT COLUMN COMPLEX MESH PANEL */}
                  <div className="col-span-3 flex flex-col gap-3 justify-between">
                    {/* Top Panel Element: 80+ Affordable Plans Badge */}
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.015,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-white border border-red-300 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-red-300 shadow-md"
                    >
                      <div className="bg-rose-100 border border-rose-200 text-rose-600 font-extrabold text-[0.825rem] sm:text-xl px-4 py-2 rounded-xl flex-shrink-0 min-w-[70px] text-center shadow-inner">
                        80+
                      </div>
                      <div className="font-bold text-[0.825rem] sm:text-2xl text-red-600 tracking-tight">
                        Affordable Plans
                      </div>
                    </motion.div>

                    {/* Bottom Grid Segment Element: Category Showcase Cards */}
                    <motion.div
                      variants={itemVariants}
                      className="bg-white border border-red-300 rounded-3xl p-5 sm:p-6 shadow-md shadow-red-300 flex flex-col justify-between flex-grow"
                    >
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {/* Category Sub Card item: Health */}
                        <motion.div
                          whileHover={{ scale: 1.04, y: -2 }}
                          className="bg-red-50 border border-red-100 rounded-2xl p-2 sm:p-4 text-center flex flex-col items-center justify-center cursor-pointer group shadow-sm hover:bg-red-50/50 hover:border-red-100 transition-all"
                        >
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center mb-2 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="font-bold text-[0.525rem] sm:text-sm text-slate-700 group-hover:text-red-950">
                            Health
                          </span>
                        </motion.div>

                        {/* Category Sub Card item: Funeral */}
                        <motion.div
                          whileHover={{ scale: 1.04, y: -2 }}
                          className="bg-red-50 border border-red-100 rounded-2xl p-2 sm:p-4 text-center flex flex-col items-center justify-center cursor-pointer group shadow-sm hover:bg-red-50/50 hover:border-red-100 transition-all"
                        >
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center mb-2 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <Umbrella className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="font-bold text-[0.525rem] sm:text-sm text-slate-700 group-hover:text-red-950">
                            Funeral
                          </span>
                        </motion.div>

                        {/* Category Sub Card item: Assets */}
                        <motion.div
                          whileHover={{ scale: 1.04, y: -2 }}
                          className="bg-red-50 border border-red-100 rounded-2xl p-2 sm:p-4 text-center flex flex-col items-center justify-center cursor-pointer group shadow-sm hover:bg-red-50/50 hover:border-red-100 transition-all"
                        >
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center mb-2 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="font-bold text-[0.525rem] sm:text-sm text-slate-700 group-hover:text-red-950">
                            Assets
                          </span>
                        </motion.div>
                      </div>

                      {/* Bottom Accent Subtitle Footer text */}
                      <div className="text-center text-[10px] sm:text-xs font-semibold tracking-wide text-red-400 uppercase mt-2 sm:mt-6 border-t border-slate-100 pt-2 sm:pt-4">
                        accommodate all your insurance needs
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 2. TRUSTED BRAND PARTNERS */}
      <section className="bg-white py-10 border-y border-slate-100">
        <div className="  mx-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by industry defining giants
          </p>
          <div className="grid grid-cols-2 w-full md:grid-cols-4 justify-center items-start gap-6 sm:gap-12 font-bold text-md sm:text-xl tracking-tighter text-slate-400">
            {partners.map((partner, i) => (
              <span
                key={i}
                className="hover:text-slate-700 text-center w-full text-xs sm:text-sm md:text-md lg:text-lg  transition duration-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section id="why-choose-us" className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Why Insure your loved ones abroad?
          </h2>
          <p className="text-slate-500 text-[0.675rem] md:text-sm mt-1 md:mt-3">
            ~ Plan for a rainy day, even when you're miles away. Our diaspora
            insurance offers
          </p>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers once when 100px into view
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Card 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-jakarta text-lg text-slate-900">
              Currency Stability
            </h3>
            <p className="text-slate-500 mt-2 text-xs leading-relaxed">
              Paying for a policy in a strong currency (like USD, GBP, or EUR)
              ensures the payout keeps its value. Local policies can become
              worthless quickly if the home country's currency suffers from high
              inflation or devaluation.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              <Bolt className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-jakarta text-lg text-slate-900">
              Better Medical Access
            </h3>
            <p className="text-slate-500 mt-2 text-xs leading-relaxed">
              It grants immediate admission to high-quality private hospitals
              instead of underfunded public ones. Good international plans also
              cover expensive emergencies like air medical evacuation or direct
              billing, so no one has to scramble for cash at the hospital door.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <Headset className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-jakarta text-lg text-slate-900">
              Stops Emergency Debt
            </h3>
            <p className="text-slate-500 mt-2 text-xs leading-relaxed">
              When a crisis hits an uninsured relative or worker, families are
              forced to take out high-interest loans or sell off assets fast.
              Insurance turns a massive, unpredictable medical or funeral
              expense into a small, predictable premium.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. STEPS */}
      <section id="steps" className="py-20 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20">
            <h2 className="text-4xl font-jakarta font-extrabold sm:text-5xl  text-blue-600 tracking-tight">
              How to get started
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="relative pt-4 md:border-t-2 space-y-2 md:border-slate-200/60 md:pt-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  color: [
                    "rgba(37, 99, 235, 0.1)",
                    "rgba(37, 99, 235, 0.85)",
                    "rgba(37, 99, 235, 0.1)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0,
                }}
                className="text-7xl font-black absolute -top-10 left-0 select-none tracking-tighter origin-left"
              >
                01
              </motion.div>

              <div className="relative z-10">
                <motion.h3
                  animate={{ color: ["#0f172a", "#2563eb", "#0f172a"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0,
                  }}
                  className="font-extrabold text-xl tracking-tight"
                >
                  Select Insurance Type
                </motion.h3>
                <p className="text-slate-500 mt-3 text-sm leading-relaxed max-w-sm">
                  Choose the insurance plan that best fits your needs and
                  budget.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="relative pt-4 md:border-t-2 space-y-2 md:border-slate-200/60 md:pt-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  color: [
                    "rgba(37, 99, 235, 0.1)",
                    "rgba(37, 99, 235, 0.85)",
                    "rgba(37, 99, 235, 0.1)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.35,
                }}
                className="text-7xl font-black absolute -top-10 left-0 select-none tracking-tighter origin-left"
              >
                02
              </motion.div>

              <div className="relative z-10">
                <motion.h3
                  animate={{ color: ["#0f172a", "#2563eb", "#0f172a"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.35,
                  }}
                  className="font-extrabold text-xl tracking-tight"
                >
                  Submit Application
                </motion.h3>
                <p className="text-slate-500 mt-3 text-sm leading-relaxed max-w-sm">
                  Our AI-powered system processes your application and provides
                  an instant quote based on your specific needs and risk
                  profile.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="relative pt-4 md:border-t-2 space-y-2 md:border-slate-200/60 md:pt-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  color: [
                    "rgba(37, 99, 235, 0.1)",
                    "rgba(37, 99, 235, 0.85)",
                    "rgba(37, 99, 235, 0.1)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.7,
                }}
                className="text-7xl font-black absolute -top-10 left-0 select-none tracking-tighter origin-left"
              >
                03
              </motion.div>

              <div className="relative z-10">
                <motion.h3
                  animate={{ color: ["#0f172a", "#2563eb", "#0f172a"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.7,
                  }}
                  className="font-extrabold text-xl tracking-tight"
                >
                  Get Insured Instantly
                </motion.h3>
                <p className="text-slate-500 mt-3 text-sm leading-relaxed max-w-sm">
                  A member of our team will reach out within 24 hours to confirm
                  your coverage and answer any questions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="lg:grid space-y-2 flex flex-col items-center justify-center lg:grid-cols-2 h-fit py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.15, // Staggers header -> title -> each blog item sequence
            },
          },
        }}
      >
        {/* Header Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="col-span-2 items-center font-jakarta justify-center"
        >
          <h1 className="text-xl sm:text-4xl w-fit mx-auto md:text-5xl lg:text-6xl flex font-bold text-center text-slate-900 tracking-tighter leading-none mb-2 sm:mb-6 px-6">
            Insights into <br />
            <span className="text-red-500">QuickMed</span> Connections
          </h1>
          <p className="text-slate-500 w-full text-center mb-8 sm:mb-20 text-[0.425rem] md:text-sm font-medium tracking-[0.2em] uppercase italic px-6">
            "Life happens. We just make it easier to handle."
          </p>
        </motion.div>

        {/* Staggered Blog Cards */}
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="h-fit sm:h-[275px] w-11/12 mb-20 flex justify-center items-center mx-auto"
          >
            {blog.blogImage ===
            "https://via.placeholder.com/600x400?text=No+Image+Available" ? (
              <TextBlogCard
                title={blog.title}
                message={blog.message}
                author={blog.author}
                date={formatDate(blog.date)}
              />
            ) : (
              <BlogCard
                title={blog.title}
                message={blog.message}
                author={blog.author}
                date={formatDate(blog.date)}
                imageSrc={blog.blogImage}
              />
            )}
          </motion.div>
        ))}

        <br />

        {/* Button lands elegantly at the end of the reveal sequence */}
        <MotionLink
          to="/blog" // Changed from href to to
          variants={{
            hidden: { opacity: 1, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="col-span-2 w-11/12 sm:w-fit sm:mx-auto bg-rose-600 text-white font-bold  py-5 sm: px-10 rounded-2xl shadow-md hover:bg-rose-700 transition-colors flex items-center  gap-2 text-md sm:text-xl md:text-3xl  text-center"
        >
          <span className="w-full sm:w-fit text-center">
            Explore More Articles
          </span>
          <ArrowRight className="w-4 h-4" />
        </MotionLink>
      </motion.section>

      {/* 6. ANNOUNCEMENTS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50 py-16 px-6 md:py-24">
        {/* Subtle background glow for depth */}
        <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16">
          {/* Left Side: Dynamic Display Heading */}
          <div className="flex flex-row gap-2 font-jakarta text-5xl font-black tracking-tight text-indigo-900 sm:text-6xl md:flex-col md:text-7xl lg:text-8xl">
            <span className="opacity-40">About</span>
            <span>Us.</span>
          </div>

          {/* Right Side: Content Block */}
          <div className="flex max-w-xl flex-col items-start gap-5 text-center md:text-start">
            <div className="space-y-2 w-full">
              <span className="inline-block rounded-full bg-indigo-100/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-indigo-700 sm:text-xs">
                Insurance you can trust
              </span>
              <h2 className="font-jakarta text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                QuickMedConnections
              </h2>
            </div>

            <p className="font-sans text-sm font-normal leading-relaxed text-slate-600 sm:text-base antialiased">
              QuickMed Connections is a UK-based representative underwritten by
              <span className="font-semibold text-slate-900">
                {" "}
                Generation Health Medical Aid Fund
              </span>
              . We empower the Zimbabwean diaspora to easily secure, manage, and
              fund comprehensive medical aid plans—ranging from basic essential
              care to premium private hospital access. By also facilitating the
              procurement of critical prescription medications, we ensure
              reliable healthcare, financial peace of mind, and continuous
              medical protection for your families, dependents, and employees
              back home.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ & REVIEWS */}
      <div className="w-full bg-slate-50 py-12 overflow-hidden relative">
        {/* Soft gradient edge masks to hide cards entering/leaving the screen */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Conveyor Belt Track Viewport */}
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-[280px] sm:w-[360px] overflow-visible flex">
            <motion.div
              animate={{
                // Responsive keyframe array handling step slides dynamically via CSS variables
                x: [
                  "0px", // Hold 1
                  "0px",
                  "var(--step-1)",
                  "var(--step-1)", // Move & Hold 2
                  "var(--step-2)",
                  "var(--step-2)", // Move & Hold 3
                  "var(--step-3)",
                  "var(--step-3)", // Move & Hold 4
                  "var(--step-4)", // Wrap point back to 0px smoothly
                ],
              }}
              style={{
                // Injecting explicit layout steps directly as CSS variables
                "--step-1": `calc(1 * ${mobileStep}px)`,
                "--step-2": `calc(2 * ${mobileStep}px)`,
                "--step-3": `calc(3 * ${mobileStep}px)`,
                "--step-4": `calc(4 * ${mobileStep}px)`,
                // Media query switch values for desktop responsive overrides
                "@media (min-width: 640px)": {
                  "--step-1": `calc(1 * ${desktopStep}px)`,
                  "--step-2": `calc(2 * ${desktopStep}px)`,
                  "--step-3": `calc(3 * ${desktopStep}px)`,
                  "--step-4": `calc(4 * ${desktopStep}px)`,
                },
              }}
              transition={{
                duration: 14.4, // Total loop timeline (3.6s per review phase * 4 items)
                repeat: Infinity,
                ease: [0.25, 1, 0.5, 1], // Custom snappy-to-smooth cubic easing curve
                // Chronological frame timeline splits: 3s freeze static hold, 0.6s sliding change
                times: [0, 0.21, 0.25, 0.46, 0.5, 0.71, 0.75, 0.96, 1.0, 1.0],
              }}
              className="flex gap-6 sm:gap-8"
            >
              {loopTrack.map((review, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, borderColor: "rgba(37, 99, 235, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-[280px] sm:w-[360px] flex flex-col justify-between bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-[0_4px_24px_-6px_rgba(0,0,0,0.02)] shrink-0 group transition-colors duration-300 cursor-grab active:cursor-grabbing select-none"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-current opacity-90"
                      />
                    ))}
                  </div>

                  {/* Body Text */}
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed italic">
                    "{review.text}"
                  </p>

                  {/* Footer Meta Details */}
                  <div className="mt-6 border-t border-slate-50 pt-4 flex items-center justify-between">
                    <span className="font-extrabold text-xs sm:text-sm text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {review.author}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider uppercase bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                      {review.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mt-20 tracking-tight text-slate-900 font-jakarta mb-8">
          Loved by Our <span className="text-blue-600">Trusted Customers</span>
        </h2>
      </div>
      <Contact />
    </div>
  );
}
