import React from "react";
import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
import logoSrc from "../images/Oracle_Tattoo_Logo.PNG";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Artists", to: "/artists" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" }
];

const specialties = [
  "Realism & Portraits",
  "Religious Tattoos",
  "Lettering & Scripts",
  "Small Fine-Line Work",
  "Cover-Ups & Rework"
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section-shell py-12 sm:py-16 md:py-20">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <Link to="/" aria-label="Oracle Tattoo home" className="inline-flex">
              <img src={logoSrc} alt="Oracle Tattoo" className="h-16 w-auto object-contain invert sm:h-30" />
            </Link>
            <h2 className="mt-6 max-w-2xl text-2xl font-black leading-tight text-bone sm:text-3xl md:text-4xl">
              Custom tattoos in Ranchi, made with clean design and careful studio practice.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-bone/62 sm:text-base sm:leading-8">
              Oracle Tattoo helps you plan meaningful body art, from first consultations and religious pieces to portraits, lettering, cover-ups, and aftercare.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/booking" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-bone px-5 text-sm font-extrabold text-ink transition hover:bg-mist">
              Book Appointment
            </Link>
            <a href="tel:+917667059851" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/18 px-5 text-sm font-bold text-bone/82 transition hover:border-white/46 hover:text-bone">
              <Phone size={16} />
              Call Studio
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[0.8fr_0.9fr_1.4fr]">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.24em] text-bone/52">Explore</h3>
            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="w-fit text-sm font-semibold text-bone/68 transition-colors hover:text-bone">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.24em] text-bone/52">Specialties</h3>
            <div className="mt-5 grid gap-3">
              {specialties.map((item) => (
                <span key={item} className="text-sm font-semibold text-bone/68">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-black uppercase tracking-[0.24em] text-bone/52">Visit Oracle Tattoo</h3>
            <address className="mt-5 flex max-w-2xl gap-3 not-italic text-sm leading-7 text-bone/64">
              <MapPin className="mt-1 shrink-0 text-bone/44" size={17} />
              <span>First floor, NH 75, Ratu Rd, beside Devi Mandap, opp. Sharda Automobiles TVS, Tilta, Ranchi, Jharkhand 835222</span>
            </address>
            <div className="mt-5 flex flex-col gap-2 text-sm font-semibold">
              <a href="tel:+917667059851" className="w-fit text-bone transition-colors hover:text-bone/72">+91 76670 59851</a>
              <a href="mailto:oracletattoo23@gmail.com" className="w-fit break-all text-bone/72 transition-colors hover:text-bone">oracletattoo23@gmail.com</a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.instagram.com/oracletattooindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/18 text-bone/78 transition-colors hover:border-white hover:bg-white/6 hover:text-bone">
                <Instagram size={17} />
              </a>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-bone/46">@oracletattooindia</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-bone/46 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Oracle Tattoo. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://builtbyamos.great-site.net/?i=1" target="_blank" rel="noreferrer" className="text-bone underline decoration-white/30 underline-offset-4 transition-colors hover:text-bone/72">
              BuiltByAmos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
