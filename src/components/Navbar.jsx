import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Artists", to: "/artists" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" }
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28, staggerChildren: 0.06, delayChildren: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.22 } }
};

const linkVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.54, ease: [0.22, 1, 0.36, 1] } }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled || isOpen
            ? "border-b border-white/12 bg-ink/90 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.36)] backdrop-blur-xl"
            : "border-b border-white/8 bg-ink/68 py-2 backdrop-blur-md"
        }`}
      >
        <nav className="section-shell flex items-center justify-between gap-6">
          <Logo className="bg-bone px-3 py-1.5 shadow-[0_8px_26px_rgba(0,0,0,0.35)]" />
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    isActive ? "text-bone" : "text-bone/58 hover:text-bone"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && <motion.span layoutId="activeNav" className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-bone" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className="magnetic-btn hidden border border-white/38 px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-bone transition-colors sm:inline-flex"
            >
              Book Now
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center border border-white/20 text-bone lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink pt-32"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="noise-overlay" />
            <motion.div className="section-shell relative flex min-h-[calc(100vh-8rem)] flex-col justify-between pb-10">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <motion.div variants={linkVariants} key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block font-serif text-[clamp(2.7rem,13vw,7.8rem)] leading-[0.92] ${
                          isActive ? "text-bone" : "text-bone/56"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={linkVariants} className="flex flex-col gap-3 border-t border-white/12 pt-8 text-sm text-bone/64 sm:flex-row sm:justify-between">
                <span>First floor, NH 75, Ratu Rd, Tilta, Ranchi</span>
                <a href="tel:+917667059851" className="text-bone">+91 76670 59851</a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
