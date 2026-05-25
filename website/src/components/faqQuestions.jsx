import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Globe,
  Users,
  UserPlus,
  Clock,
  CreditCard,
  Baby,
  Plane,
  Pill,
  TrendingUp,
  AlertCircle,
  FileText,
} from "lucide-react";

const faqs = [
  {
    id: 8,
    question: "Comprehensive Legal & Estate Support?",
    answer:
      "We provide expert guidance on drafting cross-border wills, establishing power of attorney, and connecting you with legal specialists who understand both UK and Zimbabwean property law to protect your global legacy.",
    icon: <Landmark className="w-5 h-5 text-purple-400" />,
    size: "lg",
  },
  {
    id: 1,
    question: "Funeral help?",
    answer: "We handle repatriation or local services with cultural dignity.",
    icon: <HeartPulse className="w-5 h-5 text-rose-400" />,
    size: "sm",
  },
  {
    id: 4,
    question: "Is my personal data secure?",
    answer:
      "Our platform utilizes AES-256 bank-grade encryption and HIPAA-compliant servers to ensure your medical history and family records remain private and accessible only to you.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    size: "md",
  },
  {
    id: 2,
    question: "Who can Join?",
    answer: "All Zimbabwean nationals abroad with dependents back home.",
    icon: <Users className="w-5 h-5 text-blue-400" />,
    size: "sm",
  },
  {
    id: 5,
    question: "How do I manage assets remotely?",
    answer:
      "Our centralized dashboard allows you to track global investments, verify property deeds in real-time, and manage bank accounts across borders without needing to travel.",
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    size: "md",
  },
  {
    id: 6,
    question: "USD Payments?",
    answer: "Yes. All contributions must be made in USD for consistency.",
    icon: <CreditCard className="w-5 h-5 text-rose-400" />,
    size: "sm",
  },
  {
    id: 7,
    question: "Newborns?",
    answer: "Register with a birth record for immediate membership cards.",
    icon: <Baby className="w-5 h-5 text-pink-400" />,
    size: "sm",
  },
  {
    id: 9,
    question: "Waiting Period?",
    answer: "Minimum 4 months waiting period for specific procedures.",
    icon: <Clock className="w-5 h-5 text-amber-400" />,
    size: "sm",
  },
  {
    id: 10,
    question: "Chronic Care?",
    answer: "Covered without extra cost if declared during registration.",
    icon: <Pill className="w-5 h-5 text-orange-400" />,
    size: "sm",
  },
  {
    id: 11,
    question: "Member Limit?",
    answer: "Up to 6 beneficiaries per plan for extended families.",
    icon: <UserPlus className="w-5 h-5 text-emerald-400" />,
    size: "sm",
  },
];

// Slower card transition settings
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // Slower reveal duration (1.2 seconds)
      ease: [0.25, 1, 0.5, 1], // Custom smooth deceleration curve
    },
  },
};

const FAQCard = ({ faq, isOpen, isHovered, onHoverStart, onHoverEnd }) => {
  const active = isOpen || isHovered;

  return (
    <motion.div
      layout
      variants={cardVariants} // Connects to container's stagger setting
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`
        relative overflow-y-auto no-scrollbar rounded-[1.8rem] md:rounded-[2.6rem] border p-5 md:p-9 transition-all duration-500 
        ${
          active
            ? "bg-white border-blue-400 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] scale-[1.01] z-10"
            : "bg-white/40 border-slate-100 shadow-sm z-0"
        }
        
        ${faq.size === "lg" || faq.size === "md" ? "col-span-2" : "col-span-1"}
        ${faq.size === "lg" ? "md:col-span-2 md:row-span-2 md:h-full" : ""}
        ${faq.size === "md" ? "md:col-span-2" : ""}
        
         min-h-[220px] sm:min-h-[160px] md:min-h-[240px] flex flex-col justify-between
      `}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <motion.div
            animate={{ scale: active ? 1.15 : 1, rotate: active ? 8 : 0 }}
            className={`rounded-2xl p-3.5 shadow-sm ring-1 ring-black/5 ${active ? "bg-blue-50" : "bg-white"}`}
          >
            {faq.icon}
          </motion.div>
          <ChevronDown
            size={20}
            className={`transition-transform duration-500 ${active ? "rotate-180 text-blue-500" : "text-slate-300"}`}
          />
        </div>

        <h3
          className={`text-[14px] md:text-[20px] font-black leading-[1.1] tracking-tight transition-colors duration-300 ${active ? "text-blue-700" : "text-slate-800"}`}
        >
          {faq.question}
        </h3>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5"
          >
            <p className="text-[12px] md:text-[15px] leading-relaxed text-slate-500 font-medium border-l-2 border-blue-200 pl-5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const [randomIndices, setRandomIndices] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const shuffleAndPick = () => {
      const shuffled = [...Array(faqs.length).keys()]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      setRandomIndices(shuffled);
    };
    shuffleAndPick();
    const interval = setInterval(shuffleAndPick, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[1600px] md:h-[2500px] lg:h-[1800px] xl:h-[1700px] border px-4 md:px-12 py-20 md:py-32 bg-slate-50/20">
      <div className="mx-auto max-w-7xl">
        {/* Animated Header (Slower) */}
        <motion.header
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: "easeOut" }} // Increased from 0.8s to 1.4s
          className="mb-16 md:mb-28 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-8xl text-slate-900 font-black tracking-tighter leading-[0.85] max-w-4xl">
            Secure the home <br />
            <span className="text-blue-600">you carry with you.</span>
          </h2>
          <p className="mt-6 text-slate-400 font-bold text-sm md:text-lg uppercase tracking-[0.2em]">
            Common questions from our global community
          </p>
        </motion.header>

        {/* Grid Container with Slower Scroll-Activated Staggering */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.18, // Increased from 0.08 to 0.18 for a slower wave effect
              },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4 md:gap-8"
        >
          {faqs.map((faq, index) => (
            <FAQCard
              key={faq.id}
              faq={faq}
              isOpen={randomIndices.includes(index)}
              isHovered={hoveredIndex === index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
