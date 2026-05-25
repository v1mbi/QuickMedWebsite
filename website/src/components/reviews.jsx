import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Farai M.",
    role: "UK Resident",
    text: "Finally, a way to handle my parents' healthcare from London without the stress.",
  },
  {
    name: "Sarah J.",
    role: "Canada Resident",
    text: "The asset dashboard is a game changer for keeping track of my Mutare properties.",
  },
  {
    name: "Tinashe K.",
    role: "SA Resident",
    text: "Clean, professional, and culturally respectful. Best service for the diaspora.",
  },
  {
    name: "Ellen G.",
    role: "USA Resident",
    text: "Secure payments in USD mean I never have to worry about coverage gaps.",
  },
  {
    name: "David O.",
    role: "Dubai Resident",
    text: "The funeral support gave our family peace of mind during a very difficult time.",
  },
];

// Slower card entry settings
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // Slower reveal duration (1.2 seconds)
      ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for a smooth, gradual slow down
    },
  },
};

const ReviewCard = ({ review }) => (
  <motion.div
    variants={cardVariants} // Connects perfectly to container's slower stagger orchestration
    style={{
      // Dynamically scales width from 300px at 320px screen to 500px at 1920px screen
      width: "clamp(300px, 25vw + 100px, 500px)",
    }}
    className="mx-4 flex-shrink-0 rounded-[2.5rem] border border-slate-200 bg-white/60 p-[clamp(1.5rem,3vw,3rem)] backdrop-blur-xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-red-600 text-red-600" />
          ))}
        </div>
        <Quote size={28} className="text-[#3b71ca] opacity-20" />
      </div>

      <p
        style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
        className="mb-8 text-[#3b71ca] font-bold leading-relaxed whitespace-normal break-words italic tracking-tight"
      >
        "{review.text}"
      </p>
    </div>

    <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
      <div className="h-[clamp(3rem,4vw,4rem)] w-[clamp(3rem,4vw,4rem)] rounded-2xl bg-gradient-to-br from-[#3b71ca] to-blue-900 text-white flex items-center justify-center font-black text-xl shadow-lg shrink-0">
        {review.name.charAt(0)}
      </div>
      <div>
        <h4 className="text-base font-black text-blue-950 tracking-tight">
          {review.name}
        </h4>
        <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">
          {review.role}
        </p>
      </div>
    </div>
  </motion.div>
);

const ReviewMarquee = () => {
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="bg-[#f8fafc] min-h-screen flex flex-col justify-center py-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-red-50/50 rounded-full blur-[120px]" />
      </div>

      {/* Slower Main Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: "easeOut" }} // Slower header reveal
        className="mb-16 md:mb-24 text-center px-4 relative z-10"
      >
        <h2
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          className="font-black text-blue-950 tracking-tighter leading-[0.9]"
        >
          Trusted by the <br />
          <span className="text-red-600">Global Diaspora.</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mt-8 h-2 bg-blue-950 mx-auto rounded-full"
        ></motion.div>
      </motion.div>

      {/* Orchestrated Marquee Entry */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.18, // Noticeably slower stepping gap between items load-in
            },
          },
        }}
        className="relative flex overflow-hidden group"
      >
        <motion.div
          className="flex whitespace-nowrap py-10"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 45,
            repeat: Infinity,
          }}
          whileHover={{ transition: { duration: 120 } }}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/50 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/50 to-transparent z-10"></div>
      </motion.div>

      {/* Bottom Text Slow Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="mt-12 text-center font-black text-blue-900 tracking-[0.5em] text-[clamp(0.6rem,0.8vw,0.75rem)] uppercase"
      >
        Continuous Community Feedback
      </motion.div>
    </section>
  );
};

export default ReviewMarquee;
