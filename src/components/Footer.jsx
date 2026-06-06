import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import Logo from "./Logo.jsx";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Artists", to: "/artists" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-12 sm:py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.15fr_1.7fr]">
          <div>
            <Logo invert imageClassName="!h-20 sm:!h-24 md:!h-28" />
            <p className="mt-6 max-w-md text-sm leading-7 text-bone/62 sm:mt-8 sm:text-base">
              Ranchi's premier tattoo studio for custom tattoos, realism, mandala, tribal, cover-ups, piercings, and considered aftercare.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone">Quick Links</h3>
              <div className="mt-6 grid gap-3">
                {footerLinks.slice(0, 5).map((link) => (
                  <Link key={link.to} to={link.to} className="text-sm text-bone/58 transition-colors hover:text-bone">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone">Services</h3>
              <div className="mt-6 grid gap-3 text-sm text-bone/58">
                <span>Realistic Tattoo</span>
                <span>Religious Tattoos</span>
                <span>Couple Tattoo</span>
                <span>Small Tattoo Designs</span>
                <span>Piercing</span>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone">Connect</h3>
              <address className="mt-6 not-italic text-sm leading-7 text-bone/58">
                First floor, NH 75, Ratu Rd, beside Devi Mandap, opp. Sharda Automobiles TVS, Tilta, Ranchi, Jharkhand 835222
              </address>
              <a href="tel:+917667059851" className="mt-4 block text-sm text-bone">+91 76670 59851</a>
              <a href="mailto:oracletattoo23@gmail.com" className="mt-3 block break-all text-sm text-bone/74 transition-colors hover:text-bone">oracletattoo23@gmail.com</a>
              <div className="mt-6 flex gap-3">
                <a href="https://www.instagram.com/oracletattooindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-white/16 text-bone/74 transition-colors hover:border-white hover:text-bone">
                  <Instagram size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-bone/48 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p>© 2025 Oracle Tattoo. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://builtbyamos.great-site.net/?i=1"
              target="_blank"
              rel="noreferrer"
              className="text-bone underline decoration-white/30 underline-offset-4 transition-colors hover:text-bone/72"
            >
              BuiltByAmos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
