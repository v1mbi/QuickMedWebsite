import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logofull.png";
import { useState, useEffect } from "react";
import { Menu, X, Phone, BookOpen, HelpCircle, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. FIX: Block background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Extra protection for mobile
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ];

  const insuranceLinks = [
    { name: "Funeral", path: "/insurance/funeral" },
    { name: "Health", path: "/insurance/health" },
    { name: "Asset", path: "/insurance/asset" },
  ];

  const isActive = (path) => location === path;
  const showGlass = scrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        showGlass
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent  py-4"
      }`}
    >
      <div className="w-full px-6 flex items-center justify-between">
        {/* Logo - Stays above the drawer because of z-index */}
        <Link to="/" className="flex-shrink-0 relative z-[110]">
          <img src={logo} className="h-10 md:h-12 object-contain" alt="Logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden ml-auto lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-red-600" : "text-slate-600 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center bg-slate-100/50 p-1 rounded-full border border-slate-200">
              {insuranceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive(link.path) ? "bg-red-600 text-white shadow-md" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-100"
          >
            Contact Today
          </Link>
        </div>

        {/* Mobile Toggle - Relative Z-index to keep it visible over drawer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[110] p-2 text-slate-900  rounded-xl"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* 2. FIX: Backdrop covering everything below navbar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0  backdrop-blur-sm z-[80] lg:hidden"
            />
            
            {/* 3. FIX: Drawer with safe padding and scrollable content */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-screen w-[280px] bg-white z-[90] lg:hidden flex flex-col shadow-2xl overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full pt-24"> {/* pt-24 avoids logo overlap */}
                <nav className="flex flex-col space-y-1">
                  <MobileLink to="/" icon={<LayoutGrid size={18} />} label="Home" active={isActive("/")} onClick={() => setIsOpen(false)} />
                  
                  <div className="py-6">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest ml-4">
                      Insurance Products
                    </span>
                    <div className="mt-3 space-y-1">
                      {insuranceLinks.map((link) => (
                        <MobileLink key={link.path} to={link.path} label={link.name} active={isActive(link.path)} onClick={() => setIsOpen(false)} isSub />
                      ))}
                    </div>
                  </div>

                  <MobileLink to="/blog" icon={<BookOpen size={18} />} label="Our Blog" active={isActive("/blog")} onClick={() => setIsOpen(false)} />
                  <MobileLink to="/faq" icon={<HelpCircle size={18} />} label="Help & FAQ" active={isActive("/faq")} onClick={() => setIsOpen(false)} />
                </nav>

                <div className="mt-auto pb-6">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-red-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold"
                  >
                    <Phone size={18} /> Contact Us
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileLink = ({ to, icon, label, active, isSub = false, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active ? "bg-red-50 text-red-600" : "text-slate-600"
    } ${isSub ? "ml-6 py-2 text-sm" : "font-semibold"}`}
  >
    {icon && <span className={active ? "text-red-600" : "text-slate-400"}>{icon}</span>}
    {label}
  </Link>
);

export default Navbar;