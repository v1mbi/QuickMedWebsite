import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Globe,
} from "lucide-react";
import Footer from "../components/footer";
import { sendEmailNotification } from "../components/email";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    policyType: "Health Insurance",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  // Show a "Processing" state
  Swal.fire({
    title: 'Sending...',
    didOpen: () => { Swal.showLoading() },
    allowOutsideClick: false
  });

  try {
    await sendEmailNotification("Contact Page Form entry", formData.policyType, `${formData.fullName} (${formData.email}) wants ${formData.policyType}. Their message: "${formData.message}"`);
    setFormData({ fullName: "", policyType: "Life Insurance", email: "", message: "" }); // Clear form
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
        delayChildren: 0.4, // Increased from ~0.1 (longer initial pause on scroll)
        staggerChildren: 0.35, // Increased from ~0.15 (creates a slow, distinct step-by-step reveal)
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
          {/* Ambient Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, -20, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px]"
            />
          </div>

          {/* Main Container - Listens to scroll viewport entry */}
          <motion.main
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Triggers once when 100px into view
            variants={containerVariants}
            className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-end mb-16"
            >
              <div className="bg-white/60 backdrop-blur-md border border-white/50 px-8 py-3 rounded-2xl shadow-sm mb-4">
                <h1 className="text-blue-700 font-medium text-lg tracking-[0.2em] uppercase text-right">
                  Global Contact
                </h1>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={smoothSpring}
                className="bg-blue-700 px-10 py-5 rounded-2xl shadow-2xl shadow-blue-900/20 transform md:translate-x-6 relative overflow-hidden"
              >
                <h2 className="text-white font-bold text-4xl lg:text-6xl tracking-tight leading-none relative z-10">
                  Get in Touch.
                </h2>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                />
              </motion.div>
            </motion.div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <motion.div
                variants={itemVariants}
                className={`lg:col-span-2 p-8 lg:p-12 relative overflow-hidden ${glassCardStyle}`}
              >
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">
                    Send us a message
                  </h3>
                  <p className="text-slate-500 mb-10">
                    Data will be output to the system console upon submission.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1">
                          Full Name
                        </label>
                        <input
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          type="text"
                          placeholder="James Sterling"
                          className={inputStyle}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1">
                          Policy Type
                        </label>
                        <div className="relative">
                          <select
                            name="policyType"
                            value={formData.policyType}
                            onChange={handleChange}
                            className={`${inputStyle} appearance-none cursor-pointer`}
                          >
                            <option>Health Insurance</option>
                            <option>Funeral Insurance</option>
                            <option>Asset Insurance</option>
                            <option>General Enquiry</option>
                          </select>
                          <ChevronDown
                            size={18}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1">
                        Email
                      </label>
                      <input
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="contact@agency.com"
                        className={inputStyle}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-blue-900/40 uppercase tracking-widest ml-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className={`${inputStyle} resize-none`}
                        placeholder="Tell us more..."
                      />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={smoothSpring}
                        className="group relative flex items-center justify-center space-x-3 w-full md:w-auto px-12 py-5 bg-red-600 text-white font-bold rounded-2xl overflow-hidden shadow-xl shadow-red-600/20"
                      >
                        <span className="relative z-10">Send Message</span>
                        <Send
                          size={18}
                          className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
                          >
                            <CheckCircle2 size={20} className="mr-2" />
                            Data Transmitted
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </form>
                </div>
              </motion.div>

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
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="bg-emerald-500 animate-pulse w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/30"
                  >
                    <MessageCircle size={24} />
                  </motion.div>

                  <h4 className="text-emerald-900 font-bold text-xl mb-1 text-left">
                    Live Support
                  </h4>

                  <p className="text-emerald-800/70 text-sm mb-4 text-left font-medium">
                    Real-time consultation.
                  </p>

                  <div className="text-emerald-600 items-center flex flex-row font-bold">
                    <h1 className="text-lg">+44 7859 292790</h1>
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
                >
                  <div className="relative z-10 text-left">
                    <h4 className="font-bold text-xl mb-1">
                      Emergency Hotline
                    </h4>
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
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom Grid with 2 Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Mail,
                  label: "Correspondence",
                  value: "hello@agency.com",
                  color: "blue",
                },
                {
                  icon: Phone,
                  label: "Direct Line",
                  value: "+1 (888) 123-4567",
                  color: "red",
                },
                {
                  icon: MapPin,
                  label: "Global HQ (NYC)",
                  value: "742 Insurance Way, NY",
                  color: "blue",
                },
                {
                  icon: Globe,
                  label: "Regional (London)",
                  value: "52 Bishopsgate, EC2",
                  color: "blue",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                  }}
                  transition={smoothSpring}
                  className={`${glassCardStyle} p-6 flex items-center space-x-4 group cursor-pointer`}
                >
                  <div
                    className={`p-3 rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-[15deg] ${item.color === "red" ? "bg-red-500" : "bg-blue-700"}`}
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
                </motion.div>
              ))}
            </div>
          </motion.main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
