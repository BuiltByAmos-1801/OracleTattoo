import React from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
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
    <footer className="border-t border-white/10 bg-ink">
      <div className="section-shell">
        <div className="grid gap-10 py-12 sm:gap-12 sm:py-16 md:py-20 lg:grid-cols-[1.05fr_1.85fr]">
          <div className="max-w-xl">
            <Logo invert imageClassName="!h-20 sm:!h-24 md:!h-28" />
            <p className="mt-6 text-lg font-semibold leading-8 text-bone sm:mt-8 sm:text-xl sm:leading-9">
              Custom tattoos in Ranchi, designed with patience, precision, and clean studio practice.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-bone/56 sm:text-base">
              From first-timer consultations to religious pieces, portraits, lettering, cover-ups, and aftercare, Oracle Tattoo keeps the process calm and personal.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/booking" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-bone px-5 text-sm font-extrabold text-ink transition hover:bg-mist">
                Book Appointment
              </Link>
              <a href="tel:+917667059851" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/16 px-5 text-sm font-bold text-bone/78 transition hover:border-white/42 hover:text-bone">
                <Phone size={16} />
                Call Studio
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[0.8fr_0.9fr_1.25fr]">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone/54">Explore</h3>
              <div className="mt-5 grid gap-3">
                {footerLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="w-fit text-sm font-semibold text-bone/68 transition-colors hover:text-bone">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone/54">Specialties</h3>
              <div className="mt-5 grid gap-3 text-sm font-semibold text-bone/68">
                <span>Realism & Portraits</span>
                <span>Religious Tattoos</span>
                <span>Lettering & Scripts</span>
                <span>Small Fine-Line Work</span>
                <span>Cover-Ups & Rework</span>
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone/54">Visit Oracle Tattoo</h3>
              <address className="mt-5 flex gap-3 not-italic text-sm leading-7 text-bone/64">
                <MapPin className="mt-1 shrink-0 text-bone/44" size={17} />
                <span>
                  First floor, NH 75, Ratu Rd, beside Devi Mandap, opp. Sharda Automobiles TVS, Tilta, Ranchi, Jharkhand 835222
                </span>
              </address>
              <div className="mt-5 grid gap-2 text-sm font-semibold">
                <a href="tel:+917667059851" className="w-fit text-bone transition-colors hover:text-bone/72">+91 76670 59851</a>
                <a href="mailto:oracletattoo23@gmail.com" className="w-fit break-all text-bone/72 transition-colors hover:text-bone">oracletattoo23@gmail.com</a>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://www.instagram.com/oracletattooindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/16 text-bone/74 transition-colors hover:border-white hover:bg-white/6 hover:text-bone">
                  <Instagram size={17} />
                </a>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-bone/44">@oracletattooindia</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs font-semibold text-bone/46 sm:flex-row sm:items-center sm:justify-between">
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
