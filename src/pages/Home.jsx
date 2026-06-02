import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { demoImages } from "../data/demoImages.js";
import { services } from "../data/services.js";
import jennyOracleTattoo from "../images/Jenny_OracleTattoo.png.JPG";

const schema = {
  "@context": "https://schema.org",
  "@type": "TattooShop",
  name: "Oracle Tattoo",
  description: "Oracle Tattoo is a tattoo studio in Ranchi, Jharkhand for custom tattoos, realism tattoos, religious tattoos, mandala tattoos, cover-up tattoos, piercings, and first-time tattoo guidance.",
  image: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First floor, NH 75, Ratu Rd, beside Devi Mandap, opp. Sharda Automobiles TVS, Tilta",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "835222",
    addressCountry: "IN"
  },
  telephone: "+917667059851",
  openingHours: ["Mo-Sa 11:00-20:00"],
  url: "https://www.oracletattoo.in",
  priceRange: "$$",
  areaServed: ["Ranchi", "Tilta", "Ratu Road", "Jharkhand"],
  keywords: "best tattoo in Ranchi, tattoo in Ranchi, tattoo studio Ranchi, tattoo shop Ranchi, tattoo artist Ranchi, piercing in Ranchi, custom tattoo Ranchi, religious tattoo Ranchi, cover-up tattoo Ranchi",
  sameAs: ["https://www.instagram.com/oracletattooindia"]
};

const testimonials = [
  "The consultation felt personal, the studio was spotless, and the final tattoo healed beautifully.",
  "Clean linework, patient artists, and no rushed energy. Oracle is exactly what Ranchi needed.",
  "I came in with an old tattoo I hated. They rebuilt it into something I am proud to wear."
];

const processSteps = [
  {
    label: "01",
    title: "Consult",
    text: "We read your idea, placement, skin tone, old tattoos, and references before recommending a style direction."
  },
  {
    label: "02",
    title: "Design",
    text: "Your tattoo is composed for body flow first. Size, contrast, and negative space are decided before the needle starts."
  },
  {
    label: "03",
    title: "Ink",
    text: "Sessions are paced for comfort, hygiene, and precision, with clear breaks and no rushed finishing."
  },
  {
    label: "04",
    title: "Heal",
    text: "You leave with aftercare guidance, healing checkpoints, and touch-up advice for long-term clarity."
  }
];

const trustPoints = [
  "Single-use needles and sterile setup",
  "Custom artwork, never copied from flash without intent",
  "Placement guidance before final sizing",
  "WhatsApp-first booking for fast confirmation"
];

const faqs = [
  {
    question: "Do I need an appointment?",
    answer: "Appointments are recommended for tattoos, especially custom pieces. Small piercings and quick consultations may be available depending on the day."
  },
  {
    question: "How much will my tattoo cost?",
    answer: "Pricing depends on size, placement, detail, artist, and number of sessions. Share references through the booking form for a better estimate."
  },
  {
    question: "Can you cover an old tattoo?",
    answer: "Most old tattoos can be improved, but not every tattoo can be covered cleanly in one session. We assess darkness, scarring, and available space first."
  },
  {
    question: "Is the studio safe for first-timers?",
    answer: "Yes. First-timers get placement advice, pain expectations, prep notes, and aftercare instructions before the session begins."
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.38]);
  const heroImageY = useTransform(scrollY, [0, 700], [0, -90]);

  return (
    <PageTransition>
      <Helmet>
        <title>Best Tattoo in Ranchi | Oracle Tattoo Studio Jharkhand</title>
        <meta name="description" content="Looking for the best tattoo in Ranchi? Oracle Tattoo is a custom tattoo and piercing studio in Tilta, Ranchi for realism, mandala, religious, sleeve, cover-up, and first tattoos." />
        <meta name="keywords" content="best tattoo in Ranchi, tattoo in Ranchi, tattoo studio Ranchi, tattoo shop Ranchi, tattoo artist Ranchi, best tattoo artist in Ranchi, piercing in Ranchi, custom tattoo Ranchi, religious tattoo Ranchi, cover up tattoo Ranchi, Oracle Tattoo Ranchi" />
        <link rel="canonical" href="https://www.oracletattoo.in/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24 sm:min-h-screen sm:pt-28">
        <div className="noise-overlay" />
        <motion.img
          src={demoImages.hero}
          alt="Tattoo artist working in a monochrome studio"
          className="absolute right-0 top-0 hidden h-full w-[42vw] object-cover opacity-28 xl:block"
          style={{ y: heroImageY }}
        />
        <motion.div className="section-shell relative z-10" style={{ y: heroY, opacity: heroOpacity }}>
          <p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-bone/58 sm:mb-7 sm:text-xs sm:tracking-[0.28em]">Ranchi / Custom Tattoo Studio / Since precision</p>
          <h1 className="serif-display max-w-[12ch] text-[clamp(2.8rem,13vw,15rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-balance sm:leading-[0.82]">
            Oracle Tattoo
          </h1>
          <div className="mt-7 flex flex-col gap-4 sm:mt-10 sm:gap-5 md:flex-row md:items-center md:gap-8">
            <p className="text-lg font-light text-mist sm:text-xl md:text-3xl">Where Skin Becomes Canvas</p>
            <span className="inline-flex w-fit items-center gap-2 border border-white/14 px-3 py-2 text-xs text-bone/72 sm:px-4 sm:text-sm">
              <MapPin size={14} className="shrink-0 sm:hidden" />
              <MapPin size={15} className="hidden shrink-0 sm:block" /> Tilta, Ranchi, Jharkhand
            </span>
          </div>
        </motion.div>
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-bone/56 sm:bottom-8 sm:gap-3">
          <span className="text-[0.64rem] font-bold uppercase tracking-[0.24em]">Scroll</span>
          <motion.span animate={{ y: [0, 10, 0] }} transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={18} />
          </motion.span>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink">
        <div className="section-shell grid gap-px overflow-hidden bg-white/10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {["Custom Tattoo Studio", "Hygienic Setup", "Tilta, Ranchi", "Mon-Sat, 11 AM-8 PM"].map((item) => (
            <div key={item} className="bg-ink px-4 py-5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-bone/68 sm:px-5 sm:py-7 sm:text-xs sm:tracking-[0.2em]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-coal py-12 sm:py-16 md:py-28">
        <div className="section-shell grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.35fr] lg:items-center">
          <ScrollReveal className="relative overflow-hidden bg-coal">
            <img
              src={jennyOracleTattoo}
              alt="Oracle Tattoo studio artist"
              className="aspect-[4/5] w-full object-cover object-center opacity-88 transition duration-700 hover:scale-105 hover:opacity-100 sm:aspect-[16/13] lg:aspect-[4/5]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,#050505_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-coal lg:block" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Studio Introduction</p>
            <h2 className="serif-display text-[clamp(2rem,6.5vw,7.6rem)] leading-[0.94] sm:leading-[0.92]">
              Best Tattoo Studio in Ranchi
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-bone/64 sm:mt-8 sm:text-lg sm:leading-8">
              Oracle Tattoo is built for people searching for a trusted tattoo studio in Ranchi, from first-tattoo guidance to custom tattoos, religious tattoos, cover-ups, and large-scale pieces. Every session is shaped around clean design, considered placement, and disciplined studio hygiene.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-28">
        <div className="section-shell">
          <ScrollReveal className="mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Services</p>
              <h2 className="section-display mt-3 sm:mt-4">Designed for permanence.</h2>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-bone">
              View all services <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </ScrollReveal>
          <motion.div
            className="custom-scrollbar -mx-1 flex gap-4 overflow-x-auto px-1 pb-5 sm:gap-5 sm:pb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                className="min-h-[220px] min-w-[82vw] border border-white/12 bg-coal p-5 sm:min-h-[260px] sm:min-w-[280px] sm:p-7 md:min-w-[340px]"
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.58 } } }}
              >
                <span className="text-xs font-semibold text-bone/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-serif text-2xl leading-tight sm:mt-12 sm:text-3xl">{service.name}</h3>
                <p className="mt-5 text-sm leading-6 text-bone/58">{service.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-28">
        <div className="section-shell">
          <ScrollReveal className="mb-8 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Featured Work</p>
            <h2 className="section-display-lg mt-3 max-w-4xl sm:mt-4">A sharper eye for black, skin, and silence.</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-4 md:grid-rows-[260px_210px] lg:grid-rows-[360px_270px]">
            {demoImages.featured.map((image, index) => (
              <ScrollReveal
                key={image}
                delay={index * 0.05}
                className={`overflow-hidden border border-white/10 bg-ink ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 3 ? "md:col-span-2" : ""}`}
              >
                <img src={image} alt="Oracle Tattoo featured studio work" className="h-full min-h-[220px] w-full object-cover transition duration-700 hover:scale-105 sm:min-h-[280px]" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-28">
        <div className="section-shell grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">The Oracle Method</p>
            <h2 className="section-display-lg mt-4 sm:mt-5">Measured before it becomes permanent.</h2>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.06} className="border border-white/12 bg-coal p-5 sm:p-7">
                <span className="text-xs font-bold tracking-[0.2em] text-bone/42">{step.label}</span>
                <h3 className="mt-6 font-serif text-3xl sm:mt-8 sm:text-4xl">{step.title}</h3>
                <p className="mt-5 text-sm leading-6 text-bone/58">{step.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-28">
        <div className="section-shell grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal className="overflow-hidden border border-white/10">
            <img
              src={demoImages.hygiene}
              alt="Sterile tattoo process and equipment"
              className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Hygiene Protocol</p>
            <h2 className="section-display mt-4 sm:mt-5">Clean work is the first luxury.</h2>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start justify-between gap-4 border-t border-white/12 py-4 sm:items-center sm:gap-6 sm:py-5">
                  <span className="text-sm text-bone/76 sm:text-base">{point}</span>
                  <span className="h-2 w-2 rounded-full bg-bone" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Client Notes</p>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-3">
            {testimonials.map((quote, index) => (
              <ScrollReveal key={quote} delay={index * 0.08} className="border-t border-white/18 pt-6 sm:pt-8">
                <p className="mb-5 text-sm font-bold tracking-[0.18em] text-bone sm:mb-8">★★★★★</p>
                <blockquote className="font-serif text-2xl leading-tight text-bone/86 sm:text-3xl">“{quote}”</blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-28">
        <div className="section-shell grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1fr]">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Questions</p>
            <h2 className="section-display mt-4 sm:mt-5">Before you book.</h2>
          </ScrollReveal>
          <div className="divide-y divide-white/12 border-y border-white/12">
            {faqs.map((item, index) => (
              <ScrollReveal key={item.question} delay={index * 0.04} className="py-5 sm:py-7">
                <h3 className="font-serif text-2xl sm:text-3xl">{item.question}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-bone/58">{item.answer}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:pb-20 md:px-9 md:pb-28">
        <ScrollReveal>
          <Link to="/booking" className="animated-border group block px-5 py-12 text-center sm:px-6 sm:py-16 md:px-14 md:py-24">
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-bone/54 sm:text-xs sm:tracking-[0.28em]">Consultation / Appointment / WhatsApp</span>
            <span className="serif-display mt-4 block text-[clamp(2.4rem,9vw,11rem)] leading-none sm:mt-6">Book Your Session</span>
          </Link>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
