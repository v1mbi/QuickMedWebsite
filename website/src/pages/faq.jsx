import { HeartPulse, Church, Landmark, Bird } from "lucide-react";
import FaqSection from "../components/faqQuestions";
import ReviewMarquee from "../components/reviews";
import Footer from "../components/footer";
import dove from "../assets/dove-svgrepo-com.svg";
import heart from "../assets/hospital.svg";
import bank from "../assets/bank.svg";
import { motion } from "framer-motion";
import { useEffect } from "react";

const FAQ = () => {
  const categories = [
    {
      name: "Funeral",
      altText: "Funeral Insurance FAQ policy information",
      icon: dove,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      name: "Health",
      altText: "Health Insurance FAQ policy coverage rules",
      icon: heart,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
    },
    {
      name: "Assets",
      altText: "Asset Insurance FAQ asset and wealth protection guide",
      icon: bank,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
  ];

  useEffect(() => {
    // 1. Core Browser Title Tag with targeted keywords
    document.title = "Insurance FAQ & Help Center | QuickMed Connections";

    // 2. Dynamic Meta Description Tag Injection (What shows up on Google search result snippets)
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Find answers to frequently asked questions about cross-border health insurance, funeral plans, asset protection, and global claims assistance with QuickMed Connections.",
    );

    // 3. Dynamic Meta Keywords Tag Injection (For older/internal directory search index rules)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "QuickMed FAQ, insurance questions, cross border health coverage, international funeral plan help, asset protection rules, claim submission help",
    );
  }, []);

  return (
    // Wrapped main layout block in a semantic <main> context container
    <main className="w-full flex flex-col space-y-16 text-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-16 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/40 my-10">
        {/* Header Content Section */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.4em] text-red-600 uppercase block"
          >
            Support Center
          </motion.span>
          {/* Main Page H1 Anchor - Absolute prime position for search crawling spiders */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 tracking-tight">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Find answers on protecting your health, honoring your roots, and
            securing your family's future across borders. Read through our core
            insurance channels.
          </p>
        </header>

        {/* Categories Grid - Structured cleanly as a functional section panel */}
        <section
          aria-label="FAQ Help Categories"
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6"
        >
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
                {/* Optimized alt text properties containing functional context keywords */}
                <img
                  src={cat.icon}
                  alt={cat.altText}
                  className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              {/* Changed component title elements to semantic H2 tags for logical document indexing */}
              <h2 className={`text-lg font-bold tracking-tight ${cat.color}`}>
                {cat.name}
              </h2>
              <div
                className="mt-4 w-8 h-1 bg-white/50 rounded-full overflow-hidden"
                aria-hidden="true"
              >
                <motion.div
                  className={`h-full ${cat.color.replace("text", "bg")}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </section>
      </div>

      {/* Semantic wrapper blocks around dynamic component sections to flag modular content weights */}
      <section aria-label="Detailed Question Database">
        <FaqSection />
      </section>

      <section aria-label="Customer Success Reviews">
        <ReviewMarquee />
      </section>
    </main>
  );
};

export default FAQ;
