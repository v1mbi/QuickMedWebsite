import React from "react";
import { motion } from "framer-motion";
import { X, AlertCircle, Bell, Info, ShieldAlert } from "lucide-react";

const Notification = ({ title, message, urgency, date, onClose }) => {
  // Configuration for different urgency levels
  const config = {
    urgent: {
      color: "text-rose-600",
      accentBg: "bg-rose-600",
      bg: "bg-rose-50/40",
      border: "border-rose-200/50",
      icon: <ShieldAlert size={18} className="text-rose-500" />,
    },
    medium: {
      color: "text-amber-600",
      accentBg: "bg-amber-600",
      bg: "bg-amber-50/40",
      border: "border-amber-200/50",
      icon: <AlertCircle size={18} className="text-amber-500" />,
    },
    low: {
      color: "text-blue-600",
      accentBg: "bg-blue-600",
      bg: "bg-blue-50/40",
      border: "border-blue-200/50",
      icon: <Info size={18} className="text-blue-500" />,
    },
  };

  const theme = config[urgency] || config.low;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
      // ADDED: Card-wide click handler
      onClick={onClose}
      className={`
        relative w-80 p-4 rounded-[1.5rem] border backdrop-blur-xl
        ${theme.bg} ${theme.border}
        flex flex-col gap-2 group transition-all duration-300
        cursor-pointer hover:scale-[1.02] active:scale-[0.98]
      `}
    >
      {/* Header Area */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-white/80 shadow-sm ring-1 ring-black/[0.03]">
            {theme.icon}
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-[13px] leading-none tracking-tight">
              {title}
            </h4>
            <span
              className={`text-[9px] font-black uppercase tracking-widest ${theme.color} opacity-80`}
            >
              {urgency} Priority
            </span>
          </div>
        </div>

        {/* Close Button - stopPropagation ensures we don't trigger onClose twice */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-1.5 rounded-full hover:bg-white/60 transition-all duration-200 text-slate-400 hover:text-slate-600"
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>

      {/* Message Content */}
      <div className="pl-[42px]">
        <p className="text-[12px] leading-relaxed text-slate-600/90 line-clamp-2 font-semibold tracking-tight">
          {message}
        </p>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold opacity-70 group-hover:opacity-100 transition-opacity">
            <Bell size={10} strokeWidth={2.5} />
            <span>{date}</span>
          </div>
          <span className="text-[10px] font-black text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
            Tap to Dismiss
          </span>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div
        className={`absolute bottom-0 left-8 right-8 h-[1.5px] rounded-full opacity-10 ${theme.accentBg}`}
      />
    </motion.div>
  );
};

export default Notification;
