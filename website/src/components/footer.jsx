import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const pathname = useLocation().pathname;

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Blog", path: "/blog" },
    { name: "Help & FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const insuranceLinks = [
    { name: "Health Insurance", path: "/insurance/health" },
    { name: "Life Insurance", path: "/insurance/life" },
    { name: "Asset Insurance", path: "/insurance/asset" },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-100 font-sans">
      {/* Upper Footer: Branding & Links */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding Column */}
        <div className="p-1 md:col-span-1">
          <h2 className="text-3xl font-serif font-bold text-slate-900 leading-tight mb-4 italic">
            Plan for the Best.
            <br />
            <span className="text-red-600">Insure for the Rest.</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Simplifying medical connections across borders with reliability and
            care.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            <span className="w-8 h-[1px] bg-slate-200"></span>
            QuickMed Connections
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-1">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm transition-all duration-300 flex items-center group ${
                    pathname === link.path
                      ? "text-red-600 font-bold"
                      : "text-slate-500 hover:text-red-600"
                  }`}
                >
                  {link.name}
                  <ArrowUpRight
                    size={12}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Insurance Links */}
        <div className="p-1">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">
            Insurance
          </h3>
          <ul className="space-y-4">
            {insuranceLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm transition-all duration-300 flex items-center group ${
                    pathname === link.path
                      ? "text-red-600 font-bold"
                      : "text-slate-500 hover:text-red-600"
                  }`}
                >
                  {link.name}
                  <ArrowUpRight
                    size={12}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Snippet */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
            Support
          </h3>
          <p className="text-slate-500 text-xs mb-4">
            Have questions? Our team is available for consultations.
          </p>
          <a
            href="mailto:info@quickmedconnections.com"
            className="text-sm font-bold text-red-600 hover:underline flex items-center gap-2"
          >
            <Mail size={14} />
            Email Us
          </a>
        </div>
      </div>

      {/* Middle Bar: Contact Details Grid */}
      <div className="bg-slate-900 text-white/70 py-10 px-6">
        <div className="p-1 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-medium uppercase tracking-wider">
          {/* Phones */}
          <div className="flex flex-col gap-3">
            <span className="text-white/40 mb-1">Inquiries</span>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-red-500" />
              <span>UK: +44 7859 292790</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-red-500" />
              <span>RSA: +27 60 322 9801</span>
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-3">
            <span className="text-white/40 mb-1">Global Presence</span>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-red-500 mt-0.5" />
              <span>3 Wordsworth Rd, Daventry, UK</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-red-500 mt-0.5" />
              <span>Leslie Ave, Magaliessig, RSA</span>
            </div>
          </div>

          {/* Underwriter */}
          <div className="flex flex-col justify-center border-t border-white/10 md:border-none pt-6 md:pt-0">
            <p className="text-center md:text-right leading-relaxed">
              Underwritten By <br />
              <span className="text-white font-bold">
                Generation Health Medical Aid Fund
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="py-6 bg-slate-900 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
          © 2024 QuickMed Connections • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
