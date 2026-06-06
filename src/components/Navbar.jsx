import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import Logo from "./Logo.jsx";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
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
  const isHomeTop = location.pathname === "/" && !isScrolled && !isOpen;

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
          isHomeTop ? "px-5 pt-6 sm:px-8 sm:pt-8" : "px-3 pt-3 sm:px-5 sm:pt-4"
        }`}
      >
        <nav
          className={`mx-auto flex w-full items-center justify-between gap-3 transition-all duration-500 ${
            isHomeTop
              ? "h-12 max-w-[1480px] text-bone"
              : "h-[66px] max-w-[1120px] rounded-[28px] border border-black/10 bg-bone px-5 text-ink shadow-[0_14px_34px_rgba(0,0,0,0.24)] sm:h-[78px] sm:rounded-[34px] sm:px-7"
          } ${
            !isHomeTop && (isScrolled || isOpen) ? "shadow-[0_18px_46px_rgba(0,0,0,0.32)]" : ""
          }`}
        >
          <div className={`flex items-center gap-2 sm:gap-3 ${isHomeTop ? "order-1" : "order-2"}`}>
            {!isHomeTop && (
              <>
                <a
                  href="https://wa.me/917667059851"
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-bone transition-transform hover:scale-105 sm:h-11 sm:w-11"
                  aria-label="Message Oracle Tattoo on WhatsApp"
                >
                  <MessageCircle size={19} strokeWidth={2.4} />
                </a>
                <a
                  href="tel:+917667059851"
                  className="grid h-9 w-9 place-items-center rounded-full border border-black/18 text-ink transition-colors hover:border-black sm:h-11 sm:w-11"
                  aria-label="Call Oracle Tattoo"
                >
                  <PhoneCall size={19} strokeWidth={1.9} />
                </a>
              </>
            )}
            <button
              type="button"
              className={`grid place-items-center transition-colors ${
                isHomeTop
                  ? "h-12 w-12 text-bone hover:bg-white/10"
                  : "h-9 w-9 rounded-full text-ink hover:bg-black/5 sm:h-11 sm:w-11"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={25} strokeWidth={2} />}
            </button>
          </div>
          {isHomeTop ? (
            <Logo className="order-2" imageClassName="h-12 sm:h-14" invert />
          ) : (
            <div className="order-1">
              <Logo />
            </div>
          )}
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
              <div className="space-y-1 sm:space-y-2">
                {navLinks.map((link) => (
                  <motion.div variants={linkVariants} key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block font-serif text-[clamp(2.1rem,7.5vw,5.1rem)] leading-[0.96] ${
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
