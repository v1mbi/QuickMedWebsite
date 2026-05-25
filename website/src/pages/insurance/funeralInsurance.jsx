import React, {useEffect, useState} from "react";
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
import {getSanityData} from "../../functions/outsource_media";

// Container variant to orchestrate slower stagger among major components
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.25, // Noticeably slower step-down stagger
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
      duration: 1.1, // Increased duration for a slower lift
      ease: [0.25, 1, 0.5, 1], // Custom curve for a weighted slow down
    },
  },
};



export default function FuneralInsurance() {
  const [limits, setLimits] = useState([]);
useEffect(() => {
      const fetchLimits = async () => {
      try {
      setLimits(((await getSanityData('plans')).filter(plan => plan.variation === 'Funeral').map(item => {return item.allowance})).sort((a, b) => a - b).filter((value, index, self) => self.indexOf(value) === index));
      } catch (error) {
        console.error("Error fetching limits:", error);
      }};
      fetchLimits();
    }, []);

  return (
    <div className="min-h-screen font-montserrat w-full flex flex-col">
      {/* 
        This is a main route container. To have components load 'sum like that' 
        relative to each other, we wrap them in a motion container to handle the stagger.
      */}
      <motion.div
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Triggers with slight visibility
        variants={containerVariants}
        className="flex flex-col"
      >
        <motion.div variants={componentVariants}>
          <FuneralTitle />
        </motion.div>

        <motion.div variants={componentVariants}>
          <div className="flex p-2 sm:p-10 flex-col lg:flex-row">
            <div className="lg:w-3/5">
              <MultiStepForm
                limits={limits}
                title="Funeral Insurance"
              />
            </div>
            <div className="lg:w-2/5 p-3 sm:p-8">
              <InsuranceSteps />
            </div>
          </div>
        </motion.div>

        <motion.div variants={componentVariants}>
          <WhyChooseUsHealth
            points={[
              {
                title: "Keep Your Money's Value",
                desc: "Payouts are set in USD so your family gets the full value even if local prices change.",
                icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Low Cost, Big Help",
                desc: "Pay as little as $0.75 a month to give your family up to $6,250 when they need it most.",
                icon: <Wallet className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Quick Cash Payout",
                desc: "Money is paid in cash so your family can pay for things like food and transport right away.",
                icon: <Coins className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Everything on Your Phone",
                desc: "No need to visit an office; sign up and pay your monthly fees easily using just your phone.",
                icon: <Smartphone className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Plans for Every Budget",
                desc: "Pick from four simple levels—Lite, Basic, Standard, or Premium—based on what you can afford.",
                icon: <LayoutGrid className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Free Data Extras",
                desc: "Some plans come with WhatsApp or WiFi data so you stay connected while staying covered.",
                icon: <Gift className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Fast and Simple",
                desc: "Skip the long, confusing forms with a quick process that gets you help much faster.",
                icon: <Zap className="w-6 h-6 text-red-600" />,
              },
            ]}
          />
        </motion.div>

        <motion.div variants={componentVariants}>
          <FuneralContact />
        </motion.div>

        <motion.div variants={componentVariants}>
        
        </motion.div>
      </motion.div>
    </div>
  );
}

const FuneralContact = () => {
  return (
    <div className="w-full py-20 px-6 bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Content */}
        <motion.div
          // Modified: increased duration from 0.8s to 1.1s
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Ensures element is well in view
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div>
            <motion.span
              // Modified: increased duration slightly
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase"
            >
              Contact Support
            </motion.span>
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

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Call us
                </p>
                <p className="text-slate-900 font-semibold">+263 77 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email us
                </p>
                <p className="text-slate-900 font-semibold">
                  support@ecosure.co.zw
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Minimalist Form Card */}
        <motion.div
          // Modified: increased duration from default to 1.1s and added slight delay
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }} // smooth slow spring
          className="flex-1 w-full"
        >
          <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-200/30 blur-[100px] rounded-full" />

            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+263..."
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 flex items-center justify-center gap-3 group transition-all"
              >
                <span>Send Inquiry</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
