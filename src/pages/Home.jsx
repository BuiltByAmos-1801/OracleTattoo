import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
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

const storyHighlights = [
  "Personal design consultation",
  "Placement and sizing guidance",
  "Clean healing support",
  "Custom work for every story"
];

const galleryImageByCategory = (category) =>
  demoImages.gallery.find((item) => item.category === category)?.image || demoImages.gallery[0].image;

const tattooCategories = [
  { title: "Religious Tattoos", image: galleryImageByCategory("Religious Tattoos") },
  { title: "Realism Tattoos", image: galleryImageByCategory("Portrait") },
  { title: "Mandala Tattoos", image: demoImages.gallery.find((item) => item.title === "Sacred floral mandala")?.image || galleryImageByCategory("Religious Tattoos") },
  { title: "Cover-Up Tattoos", image: demoImages.hygiene },
  { title: "Lettering Tattoos", image: galleryImageByCategory("Small Tattoos") },
  { title: "Piercings", image: galleryImageByCategory("Piercings") }
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

const bookingWhatsAppLink = "https://wa.me/917667059851?text=Hi%20Oracle%20Tattoo%2C%20I%20want%20to%20book%20an%20appointment.";

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

      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink pt-24 sm:min-h-screen sm:pt-28">
        <motion.img
          src={demoImages.studio}
          alt="Professional tattoo artist working in a studio"
          className="absolute inset-0 h-full w-full object-cover object-[52%_center] sm:object-center"
          style={{ y: heroImageY }}
        />
        <div className="absolute inset-0 bg-black/70 sm:bg-black/62" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.74)_36%,rgba(0,0,0,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <motion.div className="section-shell relative z-10 max-w-[1480px]" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="max-w-[680px] pt-16 sm:pt-20 lg:max-w-[760px]">
            <h1 className="max-w-[12ch] text-[clamp(3rem,10vw,7.5rem)] font-black uppercase leading-[1.04] text-balance sm:leading-[0.98]">
              Welcome to Oracle Tattoo
            </h1>
            <p className="mt-7 max-w-[34rem] text-lg font-medium leading-8 text-white/80 sm:mt-8 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
              A bold custom tattoo studio in Ranchi for clean blackwork, realism, meaningful designs, and a safe personal tattoo experience from idea to healing.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 md:hidden">
              <a
                href={bookingWhatsAppLink}
                className="inline-flex min-h-16 w-fit items-center justify-center rounded-lg border border-white/18 bg-bone px-8 text-lg font-extrabold text-ink shadow-[0_18px_42px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone sm:px-10"
                target="_blank"
                rel="noreferrer"
              >
                Book Your Appointment
              </a>
            </div>
          </div>
        </motion.div>
        <div className="section-shell pointer-events-none absolute inset-x-0 top-[58%] z-20 hidden -translate-y-1/2 justify-end md:flex">
          <a
            href={bookingWhatsAppLink}
            className="pointer-events-auto inline-flex min-h-16 w-fit items-center justify-center rounded-lg border border-white/18 bg-bone px-10 text-lg font-extrabold text-ink shadow-[0_18px_42px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
            target="_blank"
            rel="noreferrer"
          >
            Book Your Appointment
          </a>
        </div>
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

      <section className="bg-ink py-12 sm:py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Your idea, our craft</p>
            <h2 className="mt-4 max-w-[11ch] text-[clamp(3rem,8vw,8.5rem)] font-black uppercase leading-[0.92]">
              Your Tattoo is About Your Story
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="lg:pb-3">
            <div className="mb-7 flex gap-3">
              {[1, 2, 3, 4].map((step) => (
                <span key={step} className="grid h-9 w-9 place-items-center rounded-full border border-white/16 text-xs font-bold text-bone/72">
                  {step}
                </span>
              ))}
            </div>
            <p className="max-w-3xl text-base leading-7 text-bone/66 sm:text-xl sm:leading-9">
              Share your memory, belief, symbol, portrait, or cover-up idea. Oracle Tattoo shapes it into a clean custom design with the right flow, detail, and placement for your skin.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2">
              {storyHighlights.map((point) => (
                <div key={point} className="bg-coal px-5 py-4 text-sm font-semibold text-bone/76">
                  {point}
                </div>
              ))}
            </div>
          </ScrollReveal>
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

      <section className="bg-ink py-12 sm:py-16 md:py-24">
        <div className="section-shell">
          <ScrollReveal className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Explore styles</p>
              <h2 className="section-display mt-3 sm:mt-4">Find the design that connects.</h2>
            </div>
            <Link to="/gallery" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-bone">
              View gallery <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </ScrollReveal>
          <div className="custom-scrollbar -mx-1 flex gap-4 overflow-x-auto px-1 pb-5 sm:gap-5">
            {tattooCategories.map((category) => (
              <ScrollReveal key={category.title} className="group relative min-w-[72vw] overflow-hidden border border-white/10 bg-coal sm:min-w-[280px] lg:min-w-[320px]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="aspect-[4/5] w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-black uppercase leading-tight text-bone sm:text-3xl">
                  {category.title}
                </h3>
              </ScrollReveal>
            ))}
          </div>
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
          <div className="grid gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[220px] lg:auto-rows-[300px]">
            {demoImages.featured.map((image, index) => (
              <ScrollReveal
                key={image}
                delay={index * 0.05}
                className={`overflow-hidden border border-white/10 bg-ink ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 3 || index === 4 || index === 6 ? "md:col-span-2" : ""}`}
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
                <blockquote className="font-serif text-2xl leading-tight text-bone/86 sm:text-3xl">"{quote}"</blockquote>
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
