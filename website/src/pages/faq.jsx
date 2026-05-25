import { HeartPulse, Church, Landmark } from "lucide-react";
import { Bird } from "lucide-react";
import FaqSection from "../components/faqQuestions";
import ReviewMarquee from "../components/reviews";
import Footer from "../components/footer";
import dove from "../assets/dove-svgrepo-com.svg";
import heart from "../assets/hospital.svg";
import bank from "../assets/bank.svg";
import { motion } from "framer-motion";

const FAQ = () => {
  const categories = [
    {
      name: "Funeral",
      icon: dove,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      name: "Health",
      icon: heart,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
    },
    {
      name: "Assets",
      icon: bank,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
  ];
  return (
    <div className="w-full flex flex-col space-y-16 text-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-16 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/40 my-10">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.4em] text-red-600 uppercase"
          >
            Support Center
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 tracking-tight">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Find answers on protecting your health, honoring your roots, and
            securing your family's future across borders.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col items-center p-8 rounded-[2rem] border ${cat.border} ${cat.bg} transition-all duration-300 group`}
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className={`text-lg font-bold tracking-tight ${cat.color}`}>
                {cat.name}
              </h3>
              <div className="mt-4 w-8 h-1 bg-white/50 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${cat.color.replace("text", "bg")}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FaqSection />

      <ReviewMarquee />

    </div>
  );
};

export default FAQ;
