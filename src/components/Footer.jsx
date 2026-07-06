import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Award, BadgeCheck, Instagram, MapPin, Phone, ShieldCheck } from "lucide-react";
import { demoImages } from "../data/demoImages.js";
import logoSrc from "../images/Oracle_Tattoo_Logo.PNG";
import jennyImage from "../images/Jenny_OracleTattoo.png.JPG";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Artists", to: "/artists" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" }
];

const specialties = [
  "Religious Tattoos",
  "Band Tattoos",
  "Small Tattoos",
  "Portrait",
  "Animal Tattoos"
];

const stats = [
  { value: "1,250+", label: "Satisfied Customers" },
  { value: "15+", label: "Years of Experience" },
  { value: "750+", label: "Tattoos & Artworks" },
  { value: "45+", label: "Creative Concepts" }
];

const skillStats = [
  { label: "Experience", value: "95%" },
  { label: "Tattoo", value: "97%" },
  { label: "Consultation", value: "93%" }
];

const qualityPoints = [
  {
    icon: Award,
    title: "Impeccable Tattoo Quality",
    text: "We focus on precision, creativity, and high-quality tattoo artistry."
  },
  {
    icon: ShieldCheck,
    title: "Best & Hygienic Equipment",
    text: "All tools are sterilized and we follow strict hygiene standards."
  },
  {
    icon: BadgeCheck,
    title: "Experienced Artists",
    text: "Our skilled artists bring years of experience and artistic expertise."
  }
];

export default function Footer() {
  const location = useLocation();
  const shouldShowJennySection = location.pathname !== "/booking";

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section-shell py-12 sm:py-16 md:py-20">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <Link to="/" aria-label="Oracle Tattoo home" className="inline-flex">
              <img src={logoSrc} alt="Oracle Tattoo" className="h-16 w-auto object-contain invert sm:h-60" />
            </Link>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-bone/46">About Oracle Tattoo</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-black leading-tight text-bone sm:text-3xl md:text-4xl">
              Professional tattoo work with a personal story.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-bone/62 sm:text-base sm:leading-8">
              A Ranchi tattoo studio built around custom design, calm consultation, safe hygiene, and artwork you can wear with pride.
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

        <div className="grid gap-px overflow-hidden border border-white/12 bg-white/10 py-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black px-5 py-6 sm:px-6 sm:py-8">
              <p className="text-3xl font-black text-bone sm:text-4xl">{stat.value}</p>
              <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone/52">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 border-b border-white/10 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.24em] text-bone/52">Why Choose Us</h3>
            <p className="mt-4 text-xl font-black text-bone sm:text-2xl">Always provide satisfactory work.</p>
            <div className="mt-8 grid gap-5">
              {skillStats.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.18em] text-bone/64">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="mt-3 h-1 bg-white/10">
                    <div className="h-full bg-bone" style={{ width: item.value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 text-sm leading-7 text-bone/64 sm:text-base sm:leading-8">
            <p>
              At Oracle Tattoo, we believe every tattoo tells a story. Our skilled artists are passionate about turning your ideas into stunning body art with precision, creativity, and attention to detail.
            </p>
            <p>
              We follow strict hygiene standards and use high-quality equipment to ensure a safe and comfortable tattoo experience. Whether you want a small minimalist tattoo or a large custom design, our artists work closely with you to create something truly unique.
            </p>
            <p>
              At Oracle Tattoo, customer satisfaction is our priority. From consultation to aftercare guidance, we make sure every client leaves with a tattoo they are proud to wear for life.
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.24em] text-bone/52">About Oracle Tattoo</h3>
            <p className="mt-4 text-xl font-black text-bone sm:text-2xl">We are a professional tattoo studio.</p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-bone/64 sm:text-base sm:leading-8">
              At Oracle Tattoo, we believe every tattoo is a unique piece of art that represents your personality and story. Our talented tattoo artists specialize in creating custom designs, fine line tattoos, and detailed artwork tailored to your vision.
            </p>
            <div className="mt-8 grid gap-4">
              {qualityPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="grid gap-4 border border-white/12 bg-white/[0.03] p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-white/16 text-bone">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-bone">{point.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-bone/60">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden border border-white/12">
            <img src={demoImages.studio} alt="Inside Oracle Tattoo studio" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>

        {shouldShowJennySection && (
          <div className="grid gap-10 border-b border-white/10 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="overflow-hidden border border-white/12">
              <img src={jennyImage} alt="Jenny, Oracle Tattoo artist" className="aspect-[4/5] w-full object-cover object-center" />
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.24em] text-bone/52">The Artist</h3>
              <p className="mt-4 text-xl font-black text-bone sm:text-2xl">Jenny</p>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-bone/64 sm:text-base sm:leading-8">
                <p>
                  Hi, my name is Jenny and my journey as a tattoo artist is not just about art. It is about passion, struggle, patience, and believing in a dream.
                </p>
                <p>
                  The road to becoming an artist was not easy. There were moments of doubt, challenges, and times when the future felt uncertain.
                </p>
                <p>
                  Today, every tattoo I create carries that same belief: a patient approach, careful listening, and a personal connection with the person wearing it.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/artists/jenny" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-bone px-5 text-sm font-extrabold text-ink transition hover:bg-mist">
                  More About Jenny <ArrowRight size={16} />
                </Link>
                <Link to="/booking" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/18 px-5 text-sm font-bold text-bone/82 transition hover:border-white/46 hover:text-bone">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}

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
              <span>217b, 2nd floor Patliputra Kurji Rd, New Patliputra Colony, Opposite-Punjab National Bank, Golamber, Patna, Bihar 800013</span>
            </address>
            <div className="mt-5 flex flex-col gap-2 text-sm font-semibold">
              <a href="tel:+917667059851" className="w-fit text-bone transition-colors hover:text-bone/72">+91 76670 59851</a>
              <a href="mailto:oracletattoo23@gmail.com" className="w-fit break-all text-bone/72 transition-colors hover:text-bone">oracletattoo23@gmail.com</a>
            </div>
            <a
              href="https://maps.google.com/?q=217b%2C%202nd%20floor%20Patliputra%20Kurji%20Rd%2C%20New%20Patliputra%20Colony%2C%20Opposite-Punjab%20National%20Bank%2C%20Golamber%2C%20Patna%2C%20Bihar%20800013"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-bone px-5 text-sm font-extrabold text-ink transition hover:bg-mist"
            >
              <MapPin size={16} />
              Locate Studio
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.instagram.com/oracletattooindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/18 text-bone/78 transition-colors hover:border-white hover:bg-white/6 hover:text-bone">
                <Instagram size={17} />
              </a>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-bone/46">@ORACLETATTOOINDIA</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-bone/46 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Oracle Tattoo. Developed by BuiltByAmos.</p>
        </div>
      </div>
    </footer>
  );
}
