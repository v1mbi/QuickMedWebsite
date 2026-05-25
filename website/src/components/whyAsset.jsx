import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  HeartHandshake,
  Clock,
  TrendingUp,
  Lock,
  Smartphone,
  Beef,
  Sprout,
  Car,
  Home,
  Monitor,
  Briefcase,
  Plane,
} from "lucide-react";

/**
 * AllInsuranceAdvantages
 * Displays all insurance categories and their key benefits in a single view.
 */
const AllInsuranceAdvantages = () => {
  const config = {
    vehicle: {
      color: "blue",
      title: "Vehicle",
      points: [
        {
          icon: <Zap />,
          title: "Instant Roadside",
          desc: "24/7 recovery and breakdown assistance across Zimbabwe.",
        },
        {
          icon: <ShieldCheck />,
          title: "Full Cover",
          desc: "Comprehensive protection against accidents and theft.",
        },
        {
          icon: <Clock />,
          title: "Quick Claims",
          desc: "Paperless processing to get you back on the road faster.",
        },
      ],
    },
    business: {
      color: "indigo",
      title: "Business",
      points: [
        {
          icon: <TrendingUp />,
          title: "Continuity",
          desc: "Ensure operations never stop, even after unexpected losses.",
        },
        {
          icon: <Lock />,
          title: "Liability",
          desc: "Shield your company from legal risks and third-party claims.",
        },
        {
          icon: <Briefcase />,
          title: "Asset Security",
          desc: "Coverage for equipment, stock, and fixed property.",
        },
      ],
    },
    mobile: {
      color: "violet",
      title: "Mobile",
      points: [
        {
          icon: <Smartphone />,
          title: "Screen Protection",
          desc: "Instant cover for accidental cracks and liquid damage.",
        },
        {
          icon: <Lock />,
          title: "Theft Recovery",
          desc: "Quick replacement for stolen handsets to keep you connected.",
        },
        {
          icon: <Zap />,
          title: "Global Cover",
          desc: "Your mobile device is protected even when you travel abroad.",
        },
      ],
    },
    livestock: {
      color: "amber",
      title: "Livestock",
      points: [
        {
          icon: <Beef />,
          title: "Herd Security",
          desc: "Protection against theft, straying, and accidental death.",
        },
        {
          icon: <HeartHandshake />,
          title: "Disease Cover",
          desc: "Safeguard your pedigree investment against illnesses.",
        },
        {
          icon: <TrendingUp />,
          title: "Value Guard",
          desc: "Market-linked payouts to help you rebuild your herd.",
        },
      ],
    },
    crop: {
      color: "emerald",
      title: "Crop",
      points: [
        {
          icon: <Sprout />,
          title: "Climate Shield",
          desc: "Coverage for drought, excessive rain, and frost damage.",
        },
        {
          icon: <TrendingUp />,
          title: "Yield Guarantee",
          desc: "Financial security from planting until the harvest is in.",
        },
        {
          icon: <Clock />,
          title: "Flexible Terms",
          desc: "Premiums structured around seasonal farming cash flow.",
        },
      ],
    },
    travel: {
      color: "sky",
      title: "Travel",
      points: [
        {
          icon: <Globe />,
          title: "Global Medical",
          desc: "Emergency medical cover in over 150 countries.",
        },
        {
          icon: <Plane />,
          title: "Trip Interruption",
          desc: "Compensation for missed flights and cancellations.",
        },
        {
          icon: <ShieldCheck />,
          title: "Visa Approval",
          desc: "Embassy-ready certificates sent instantly to your email.",
        },
      ],
    },
    electronic: {
      color: "rose",
      title: "Electronics",
      points: [
        {
          icon: <Monitor />,
          title: "Tech Support",
          desc: "Hardware failure and accidental damage cover for IT.",
        },
        {
          icon: <Zap />,
          title: "Power Surge",
          desc: "Protection against electrical damage from grid instability.",
        },
        {
          icon: <Lock />,
          title: "Data Security",
          desc: "Assistance with recovery costs following hardware damage.",
        },
      ],
    },
    home: {
      color: "cyan",
      title: "Home",
      points: [
        {
          icon: <Home />,
          title: "Building Cover",
          desc: "Protection for your structure against fire and storms.",
        },
        {
          icon: <ShieldCheck />,
          title: "Contents Guard",
          desc: "Safeguard your furniture and household goods.",
        },
        {
          icon: <Clock />,
          title: "Rent Loss",
          desc: "Alternative accommodation cover if your home is unlivable.",
        },
      ],
    },
  };

  const themeClasses = {
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-50",
      shadow: "hover:shadow-blue-500/10",
    },
    indigo: {
      text: "text-indigo-600",
      bg: "bg-indigo-50",
      shadow: "hover:shadow-indigo-500/10",
    },
    violet: {
      text: "text-violet-600",
      bg: "bg-violet-50",
      shadow: "hover:shadow-violet-500/10",
    },
    amber: {
      text: "text-amber-600",
      bg: "bg-amber-50",
      shadow: "hover:shadow-amber-500/10",
    },
    emerald: {
      text: "text-emerald-600",
      bg: "bg-emerald-50",
      shadow: "hover:shadow-emerald-500/10",
    },
    sky: {
      text: "text-sky-600",
      bg: "bg-sky-50",
      shadow: "hover:shadow-sky-500/10",
    },
    rose: {
      text: "text-rose-600",
      bg: "bg-rose-50",
      shadow: "hover:shadow-rose-500/10",
    },
    cyan: {
      text: "text-cyan-600",
      bg: "bg-cyan-50",
      shadow: "hover:shadow-cyan-500/10",
    },
  };

  return (
    <section className="py-24 px-6 bg-slate-50/50 rounded-[3.5rem] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-black tracking-[0.3em] text-blue-600 uppercase mb-4"
          >
            The Moovah Advantage
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Complete protection for <br className="hidden md:block" />{" "}
            everything you value.
          </motion.h3>
        </div>

        {/* This maps through EVERY category in the config */}
        <div className="space-y-24">
          {Object.entries(config).map(([key, category]) => {
            const theme = themeClasses[category.color];
            return (
              <div key={key} className="space-y-10">
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className={`h-px flex-1 bg-slate-200`} />
                  <h4
                    className={`text-xl font-black uppercase tracking-widest ${theme.text}`}
                  >
                    {category.title}
                  </h4>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* Benefits Grid for this specific category */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {category.points.map((point, index) => (
                    <motion.div
                      key={`${key}-point-${index}`}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      whileHover={{ y: -8 }}
                      className={`p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 ${theme.shadow}`}
                    >
                      <div
                        className={`w-14 h-14 ${theme.bg} ${theme.text} rounded-2xl flex items-center justify-center mb-6`}
                      >
                        {React.cloneElement(point.icon, {
                          size: 24,
                          strokeWidth: 2.5,
                        })}
                      </div>
                      <h5 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                        {point.title}
                      </h5>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        {point.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllInsuranceAdvantages;
