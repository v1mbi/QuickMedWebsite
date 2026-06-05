import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  Globe,
} from "lucide-react";
import Footer from "../components/footer";
import { sendEmailNotification } from "../components/email";

const ContactPage = () => {
  useEffect(() => {
    // 1. Core Browser Title Tag
    document.title = "Contact Us | QuickMed Connections - Insurance Support";

    // 2. Dynamic Meta Description Tag Injection (What shows up on Google search results)
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Get in touch with QuickMed Connections. Contact our support team for Health, Funeral, and Asset insurance inquiries or access our 24/7 emergency claims support.",
    );

    // 3. Dynamic Meta Keywords Tag Injection (For internal site search tools / legacy systems)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "QuickMed Connections, contact QuickMed, health insurance contact, funeral insurance support, asset insurance claims, insurance hotline, emergency insurance care",
    );
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    policyType: "Health Insurance",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show a "Processing" state
    Swal.fire({
      title: "Sending...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    try {
      await sendEmailNotification(
        "Contact Page Form entry",
        formData.policyType,
        `${formData.fullName} (${formData.email}) wants ${formData.policyType}. Their message: "${formData.message}"`,
      );
      // Reset form variables to a standard select state
      setFormData({
        fullName: "",
        policyType: "Health Insurance",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }

    // Trigger the success UI state
    setIsSubmitted(true);

    // Reset success message after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  // --- Ultra-Smooth Animation Settings ---
  const smoothSpring = {
    type: "spring",
    stiffness: 260,
    damping: 25,
    mass: 0.5,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.35,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: smoothSpring },
  };

  const glassCardStyle =
    "bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem]";
  const inputStyle =
    "w-full px-6 py-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 focus:border-blue-500 focus:bg-white/80 focus:ring-4 focus:ring-blue-500/10 outline-none placeholder:text-slate-400 transition-shadow duration-300";

  return (
    <div className="w-full bg-slate-50">
      <div className="flex-col px-4 md:px-10 py-5 flex w-full">
        <div
          className="min-h-screen w-full rounded-[3rem] bg-gradient-to-br from-slate-50 to-blue-50/50 font-sans text-slate-900 relative overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          {/* Ambient Background - Hidden from screen readers */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            aria-hidden="true"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, -20, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px]"
            />
          </div>

          {/* Main Container - Semantic <main> tag for crawlers */}
          <motion.main
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20"
          >
            {/* Header Content inside <header> wrapper */}
            <motion.header
              variants={itemVariants}
              className="flex flex-col items-end mb-16"
            >
              <div className="bg-white/60 backdrop-blur-md border border-white/50 px-8 py-3 rounded-2xl shadow-sm mb-4">
                <span className="text-blue-700 font-medium text-lg tracking-[0.2em] uppercase text-right block">
                  Global Contact
                </span>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={smoothSpring}
                className="bg-blue-700 px-10 py-5 rounded-2xl shadow-2xl shadow-blue-900/20 transform md:translate-x-6 relative overflow-hidden"
              >
                {/* Changed to H1: Defines the core targeted intent of the page */}
                <h1 className="text-white font-bold text-4xl lg:text-6xl tracking-tight leading-none relative z-10">
                  Get in Touch with QuickMed.
                </h1>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.header>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Form Section */}
              <motion.section
                variants={itemVariants}
                className={`lg:col-span-2 p-8 lg:p-12 relative overflow-hidden ${glassCardStyle}`}
                aria-labelledby="message-form-heading"
              >
                <div className="relative z-10">
                  {/* Changed to H2 for proper layout structure */}
                  <h2
                    id="message-form-heading"
                    className="text-3xl font-bold text-blue-900 mb-2"
                  >
                    Send us a message
                  </h2>
                  <p className="text-slate-500 mb-10">
                    Fill out our contact form below to query an insurance expert
                    about your package options.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        {/* Tied label explicitly to input via htmlFor */}
                        <label
                          htmlFor="fullName"
                          className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1 block"
                        >
                          Full Name
                        </label>
                        <input
                          required
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          type="text"
                          placeholder="James Sterling"
                          className={inputStyle}
                        />
                      </div>
                      <div className="space-y-2">
                        {/* Tied label explicitly to select via htmlFor */}
                        <label
                          htmlFor="policyType"
                          className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1 block"
                        >
                          Policy Type
                        </label>
                        <div className="relative">
                          <select
                            id="policyType"
                            name="policyType"
                            value={formData.policyType}
                            onChange={handleChange}
                            className={`${inputStyle} appearance-none cursor-pointer`}
                          >
                            <option value="Health Insurance">
                              Health Insurance
                            </option>
                            <option value="Funeral Insurance">
                              Funeral Insurance
                            </option>
                            <option value="Asset Insurance">
                              Asset Insurance
                            </option>
                            <option value="General Enquiry">
                              General Enquiry
                            </option>
                          </select>
                          <ChevronDown
                            size={18}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1 block"
                      >
                        Email Address
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="contact@agency.com"
                        className={inputStyle}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1 block"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className={`${inputStyle} resize-none`}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={smoothSpring}
                        className="group relative flex items-center justify-center space-x-3 w-full md:w-auto px-12 py-5 bg-red-600 text-white font-bold rounded-2xl overflow-hidden shadow-xl shadow-red-600/20"
                      >
                        <span className="relative z-10">Send Message</span>
                        <Send
                          size={18}
                          className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          aria-hidden="true"
                        />
                      </motion.button>

                      <AnimatePresence>
                        {isSubmitted && (
                          <motion.div
                            initial={{ opacity: 0, x: -15, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={smoothSpring}
                            className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100"
                            role="status"
                          >
                            <CheckCircle2
                              size={20}
                              className="mr-2"
                              aria-hidden="true"
                            />
                            Data Transmitted Successfully
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </form>
                </div>
              </motion.section>

              {/* Sidebar Channels */}
              <div className="space-y-6">
                <motion.a
                  href="https://wa.me/447859292790"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                  transition={smoothSpring}
                  className={`${glassCardStyle} p-8 border border-emerald-500/10 cursor-pointer block no-underline`}
                  aria-label="Contact our WhatsApp Live Support line at +44 7859 292790"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-emerald-500 animate-pulse w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/30"
                    aria-hidden="true"
                  >
                    <MessageCircle size={24} />
                  </motion.div>

                  {/* Changed to H3 for nesting tree compliance */}
                  <h3 className="text-emerald-900 font-bold text-xl mb-1 text-left">
                    Live Support
                  </h3>

                  <p className="text-emerald-800/70 text-sm mb-4 text-left font-medium">
                    Real-time consultation.
                  </p>

                  <div className="text-emerald-600 items-center flex flex-row font-bold">
                    <span className="text-lg">+44 7859 292790</span>
                    <div className="ml-auto text-xs font-bold uppercase tracking-wider bg-emerald-500 px-4 py-2 rounded-lg text-white animate-pulse">
                      Contact Today
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 0.98 }}
                  transition={smoothSpring}
                  className="bg-blue-700 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl cursor-pointer"
                  role="region"
                  aria-label="Emergency Hotline Support Channel"
                >
                  <div className="relative z-10 text-left">
                    {/* Changed to H3 for nesting tree compliance */}
                    <h3 className="font-bold text-xl mb-1">
                      Emergency Hotline
                    </h3>
                    <p className="text-blue-100/70 text-sm mb-6 font-light">
                      Available 24/7 for claims.
                    </p>
                    <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/10 w-fit text-xs font-bold uppercase tracking-wider animate-pulse">
                      Online
                    </div>
                  </div>
                  <motion.div
                    className="absolute top-0 -right-20 w-32 h-full bg-white/5 skew-x-12"
                    whileHover={{ x: 400 }}
                    transition={{ duration: 1.2 }}
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom Contact Matrix Grid wrapped in a semantic section tag */}
            <section
              aria-label="Alternative Contact Locations and Nodes"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                {
                  icon: Mail,
                  label: "Correspondence",
                  value: "hello@agency.com",
                  href: "mailto:hello@agency.com",
                  color: "blue",
                },
                {
                  icon: Phone,
                  label: "Direct Line",
                  value: "+1 (888) 123-4567",
                  href: "tel:+18881234567",
                  color: "red",
                },
                {
                  icon: MapPin,
                  label: "Global HQ (NYC)",
                  value: "742 Insurance Way, NY",
                  href: null,
                  color: "blue",
                },
                {
                  icon: Globe,
                  label: "Regional (London)",
                  value: "52 Bishopsgate, EC2",
                  href: null,
                  color: "blue",
                },
              ].map((item, index) => {
                // Generates an anchor element if a link href protocol is valid, otherwise fallback to standard div container
                const Component = item.href ? motion.a : motion.div;
                return (
                  <Component
                    key={index}
                    href={item.href || undefined}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                    }}
                    transition={smoothSpring}
                    className={`${glassCardStyle} p-6 flex items-center space-x-4 group cursor-pointer no-underline`}
                  >
                    <div
                      className={`p-3 rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-[15deg] ${item.color === "red" ? "bg-red-500" : "bg-blue-700"}`}
                      aria-hidden="true"
                    >
                      <item.icon size={20} />
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-slate-900 font-bold text-sm truncate group-hover:text-blue-700 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </Component>
                );
              })}
            </section>
          </motion.main>
        </div>
      </div>
      
    </div>
  );
};

export default ContactPage;
