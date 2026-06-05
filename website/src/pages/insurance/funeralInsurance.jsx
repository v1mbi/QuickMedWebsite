import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // Highly recommended for meta management
import { motion } from "framer-motion";
import FuneralTitle from "../../components/funeraltitle";
import MultiStepForm from "../../components/multiform";
import InsuranceSteps from "../../components/steps";
import {
  ShieldCheck,
  Wallet,
  Coins,
  Smartphone,
  LayoutGrid,
  Gift,
  Zap,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import WhyChooseUsHealth from "../../components/whychooseusHealth";
import Footer from "../../components/footer";
import { getSanityData } from "../../functions/outsource_media";

// Container variant to orchestrate slower stagger among major components
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Component variant for slow slide-up entry
const componentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function FuneralInsurance() {
  const [limits, setLimits] = useState([]);

  useEffect(() => {
    const fetchLimits = async () => {
      try {
        setLimits(
          (await getSanityData("plans"))
            .filter((plan) => plan.variation === "Funeral")
            .map((item) => item.allowance)
            .sort((a, b) => a - b)
            .filter((value, index, self) => self.indexOf(value) === index),
        );
      } catch (error) {
        console.error("Error fetching limits:", error);
      }
    };
    fetchLimits();
  }, []);

  return (
    <>
      {/* 1. Header Optimization via Helmet */}
      <Helmet>
        <title>
          USD Funeral Insurance Plans & Cash Payouts | QuickMed Connections
        </title>
        <meta
          name="description"
          content="Secure your peace of mind with USD funeral insurance plans from QuickMed Connections. Low-cost monthly fees starting at $0.75 for fast, reliable cash payouts."
        />
        <meta
          name="keywords"
          content="funeral insurance, USD funeral cover, cash cash payouts, affordable cash funeral policy, quickmed connections"
        />
        <link
          rel="canonical"
          href="https://yourwebsite.com/funeral-insurance"
        />

        {/* Open Graph Tags for Social Discovery */}
        <meta
          property="og:title"
          content="USD Funeral Insurance Plans | QuickMed Connections"
        />
        <meta
          property="og:description"
          content="Secure peace of mind with stable USD cash payouts starting at $0.75 a month."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 2. Semantic Page Layout (<main>) */}
      <main className="min-h-screen font-montserrat w-full flex flex-col">
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col"
        >
          {/* Hero Section */}
          <motion.div variants={componentVariants} component="header">
            <FuneralTitle />
          </motion.div>

          {/* Core Interactive Section */}
          <motion.div variants={componentVariants}>
            <section
              className="flex p-2 sm:p-10 flex-col lg:flex-row"
              aria-label="Funeral Coverage Calculator"
            >
              <div className="lg:w-3/5">
                <MultiStepForm limits={limits} title="Funeral Insurance" />
              </div>
              {/* Using <aside> since steps are supplemental information */}
              <aside className="lg:w-2/5 p-3 sm:p-8">
                <InsuranceSteps />
              </aside>
            </section>
          </motion.div>

          {/* Benefits Feature Section with Upgraded Keywords */}
          <motion.div variants={componentVariants}>
            <section
              className="w-full"
              aria-label="Why Choose Our Funeral Policy Cover"
            >
              <WhyChooseUsHealth
                points={[
                  {
                    title: "Stable USD Funeral Coverage", // Upgraded for keyword intent
                    desc: "Payouts are set in USD so your family gets the full value even if local prices change.",
                    icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
                  },
                  {
                    title: "Affordable Funeral Policy Rates", // Better target indexing
                    desc: "Pay as little as $0.75 a month to give your family up to $6,250 when they need it most.",
                    icon: <Wallet className="w-6 h-6 text-red-600" />,
                  },
                  {
                    title: "Guaranteed Quick Cash Payout", // Action keyword
                    desc: "Money is paid in cash so your family can pay for things like food and transport right away.",
                    icon: <Coins className="w-6 h-6 text-red-600" />,
                  },
                  {
                    title: "Mobile Enrollment Options",
                    desc: "No need to visit an office; sign up and pay your monthly fees easily using just your phone.",
                    icon: <Smartphone className="w-6 h-6 text-red-600" />,
                  },
                  {
                    title: "Customizable Cash Protection Plans",
                    desc: "Pick from four simple levels—Lite, Basic, Standard, or Premium—based on what you can afford.",
                    icon: <LayoutGrid className="w-6 h-6 text-red-600" />,
                  },
                  {
                    title: "Free Inclusive Mobile Data",
                    desc: "Some plans come with WhatsApp or WiFi data so you stay connected while staying covered.",
                    icon: <Gift className="w-6 h-6 text-red-600" />,
                  },
                  {
                    title: "Fast Underwriting & Approvals",
                    desc: "Skip the long, confusing forms with a quick process that gets you help much faster.",
                    icon: <Zap className="w-6 h-6 text-red-600" />,
                  },
                ]}
              />
            </section>
          </motion.div>

          {/* Contact Node Wrapper */}
          <motion.div variants={componentVariants}>
            <section aria-label="Contact Funeral Insurance Support Team">
              <FuneralContact />
            </section>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}

const FuneralContact = () => {
  return (
    <div className="w-full py-20 px-6 bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Content Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase"
            >
              Contact Support
            </motion.span>
            {/* Semantic H2 used instead of custom nested header structures */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              We’re here to <br />
              <span className="text-blue-600 font-serif italic">
                support you.
              </span>
            </h2>
            <p className="text-slate-500 mt-6 text-lg leading-relaxed max-w-md">
              Whether you have questions about our USD plans or need help with a
              claim, our team is ready to provide the guidance you need.
            </p>
          </div>

          {/* Quick Contact Info Info Architecture */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Call us
                </p>
                {/* Structured phone element */}
                <a
                  href="tel:+263771234567"
                  className="text-slate-900 font-semibold hover:text-blue-600 transition-colors"
                >
                  +263 77 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email us
                </p>
                {/* Structured email element */}
                <a
                  href="mailto:support@ecosure.co.zw"
                  className="text-slate-900 font-semibold hover:text-blue-600 transition-colors"
                >
                  support@ecosure.co.zw
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Minimalist Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="flex-1 w-full"
        >
          <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-200/30 blur-[100px] rounded-full" />

            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="fullname"
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+263..."
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 flex items-center justify-center gap-3 group transition-all"
              >
                <span>Send Inquiry</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  aria-hidden="true"
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
