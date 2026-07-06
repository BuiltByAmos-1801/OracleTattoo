import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { demoImages } from "../data/demoImages.js";
import { services } from "../data/services.js";
import landingPageImage from "../images/landingpageimage.jpeg";

const schema = {
  "@context": "https://schema.org",
  "@type": "TattooShop",
  name: "Oracle Tattoo",
  description: "Oracle Tattoo is a tattoo studio in Patna, Jharkhand for portrait tattoos, religious tattoos, band tattoos, small tattoos, piercings, and animal tattoos.",
  image: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "217b, 2nd floor Patliputra Kurji Rd, New Patliputra Colony, Opposite-Punjab National Bank, Golamber",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800013",
    addressCountry: "IN"
  },
  telephone: "+917667059851",
  openingHours: ["Mo-Sa 11:00-20:00"],
  url: "https://www.oracletattoo.in",
  priceRange: "$$",
  areaServed: ["Patna", "Jharkhand"],
  keywords: "best tattoo in Patna, tattoo in Patna, portrait tattoo Patna, religious tattoo Patna, band tattoo Patna, small tattoo Patna, animal tattoo Patna",
  sameAs: ["https://www.instagram.com/oracletattooindia"]
};

const testimonials = [
  "The consultation felt personal, the studio was spotless, and the final tattoo healed beautifully.",
  "Clean linework, patient artists, and no rushed energy. Oracle is exactly what Patna needed.",
  "I came in with an old tattoo I hated. They rebuilt it into something I am proud to wear."
];

const storyHighlights = [
  "Personal design consultation",
  "Placement and sizing guidance",
  "Clean healing support",
  "Custom work for every story"
];

const categoryOrder = ["Religious Tattoos", "Band Tattoos", "Small Tattoos", "Portrait", "Piercings", "Animal Tattoos"];
const animalPortfolioImages = services.find((service) => service.category === "Animal Tattoos")?.images ?? [];
const portfolioItems = [
  { id: "religious-1", category: "Religious Tattoos", src: demoImages.featured[0], alt: "Religious tattoo portfolio piece", spanClass: "md:col-span-2 md:row-span-2" },
  { id: "religious-2", category: "Religious Tattoos", src: demoImages.featured[1], alt: "Religious tattoo portfolio detail", spanClass: "" },
  { id: "religious-3", category: "Religious Tattoos", src: demoImages.services[0], alt: "Religious tattoo portfolio work", spanClass: "" },
  { id: "band-1", category: "Band Tattoos", src: demoImages.featured[2], alt: "Band tattoo portfolio piece", spanClass: "md:col-span-2" },
  { id: "band-2", category: "Band Tattoos", src: demoImages.featured[3], alt: "Band tattoo portfolio detail", spanClass: "" },
  { id: "band-3", category: "Band Tattoos", src: demoImages.services[1], alt: "Band tattoo portfolio work", spanClass: "" },
  { id: "small-1", category: "Small Tattoos", src: demoImages.featured[4], alt: "Small tattoo portfolio piece", spanClass: "" },
  { id: "small-2", category: "Small Tattoos", src: demoImages.featured[5], alt: "Small tattoo portfolio detail", spanClass: "md:col-span-2" },
  { id: "small-3", category: "Small Tattoos", src: demoImages.services[2], alt: "Small tattoo portfolio work", spanClass: "" },
  { id: "portrait-1", category: "Portrait", src: demoImages.featured[6], alt: "Portrait tattoo portfolio piece", spanClass: "md:col-span-2 md:row-span-2" },
  { id: "portrait-2", category: "Portrait", src: demoImages.services[3], alt: "Portrait tattoo portfolio detail", spanClass: "" },
  { id: "portrait-3", category: "Portrait", src: demoImages.artists[0], alt: "Portrait tattoo reference work", spanClass: "" },
  { id: "piercing-1", category: "Piercings", src: demoImages.consultation, alt: "Piercing consultation and studio setup", spanClass: "" },
  { id: "piercing-2", category: "Piercings", src: demoImages.services[5], alt: "Piercing service portfolio detail", spanClass: "md:col-span-2" },
  { id: "animal-1", category: "Animal Tattoos", src: animalPortfolioImages[0] ?? demoImages.services[4], alt: "Animal tattoo portfolio piece", spanClass: "md:col-span-2" },
  { id: "animal-2", category: "Animal Tattoos", src: animalPortfolioImages[1] ?? demoImages.services[5], alt: "Animal tattoo portfolio detail", spanClass: "" },
  { id: "animal-3", category: "Animal Tattoos", src: animalPortfolioImages[2] ?? demoImages.blog[0], alt: "Animal tattoo studio work", spanClass: "" }
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
  const navigate = useNavigate();
  const orderedServices = categoryOrder
    .map((category) => services.find((service) => service.category === category))
    .filter(Boolean);
  const heroImages = orderedServices
    .filter((service) => service.image && service.category !== "Band Tattoos")
    .slice(0, 4);
  const heroCollageImages = [
    heroImages[0],
    { id: "landing-page-feature", name: "Custom Tattoo", image: landingPageImage },
    ...heroImages.slice(1, 3)
  ].filter(Boolean);

  return (
    <PageTransition>
      <Helmet>
        <title>Best Tattoo in Patna | Oracle Tattoo Studio Jharkhand</title>
        <meta name="description" content="Looking for the best tattoo in Patna? Oracle Tattoo is a custom tattoo studio in Patna for portrait tattoos, religious tattoos, band tattoos, small tattoos, piercings, and animal tattoos." />
        <meta name="keywords" content="best tattoo in Patna, tattoo in Patna, tattoo studio Patna, tattoo shop Patna, tattoo artist Patna, portrait tattoo Patna, religious tattoo Patna, band tattoo Patna, small tattoo Patna, animal tattoo Patna" />
        <link rel="canonical" href="https://www.oracletattoo.in/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative overflow-hidden bg-white pt-20 text-[#111a15] sm:pt-24 lg:pt-24">
        <div className="section-shell grid min-h-[calc(100svh-5rem)] gap-6 py-5 sm:py-7 lg:grid-cols-[0.98fr_1fr] lg:items-center lg:gap-12 lg:py-8">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="grid h-[320px] grid-cols-4 overflow-hidden border border-black/10 bg-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:h-[420px] lg:h-[500px]">
              {heroCollageImages.slice(0, 4).map((service, index) => (
                <motion.img
                  key={service.id}
                  src={service.image}
                  alt={`${service.name} at Oracle Tattoo`}
                  className={`h-full w-full object-cover grayscale-[12%] saturate-[1.08] ${
                    index % 2 === 0 ? "object-center" : "object-[52%_center]"
                  }`}
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="order-1 lg:order-2">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-black/62">We are here for you</p>
            <h1 className="mt-2 text-[clamp(3rem,7.2vw,6.5rem)] font-black leading-[0.86] tracking-[-0.02em] text-[#111a15]">
              Oracle Tattoo
            </h1>
            <p className="mt-5 max-w-3xl text-sm font-bold uppercase leading-7 tracking-[0.03em] text-black/76 sm:text-base sm:leading-8">
              Oracle Tattoo Patna is a custom tattoo studio for clean portraits, religious tattoos, band designs, minimal pieces, piercings, and animal-inspired artwork.
            </p>
            <div className="my-5 h-px w-full max-w-2xl bg-black/14 sm:my-6" />
            <div className="grid max-w-3xl gap-3 text-sm font-semibold leading-7 text-black/70 sm:text-base sm:leading-8">
              <p>
                We plan every tattoo around your story, placement, skin tone, and long-term clarity. From the first idea to the final aftercare note, the process stays personal and calm.
              </p>
              <p>
                Our studio follows strong hygiene standards, single-use needles, professional equipment, and clear consultation before tattooing, so your design feels safe, sharp, and built to last.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={bookingWhatsAppLink}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-black px-7 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#202820]"
                target="_blank"
                rel="noreferrer"
              >
                Book Appointment
              </a>
              <Link
                to="/gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-black/14 px-7 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:border-black/38"
              >
                View Gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink">
        <div className="section-shell grid gap-px overflow-hidden bg-white/10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {["Custom Tattoo Studio", "Hygienic Setup", "Patna", "Mon-Sat, 11 AM-8 PM"].map((item) => (
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
              Share your memory, belief, symbol, portrait, or animal-inspired idea. Oracle Tattoo shapes it into a clean custom design with the right flow, detail, and placement for your skin.
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
            <div className="grid grid-cols-2 gap-1">
              <img
                src={landingPageImage}
                alt="Oracle Tattoo studio landing page"
                className="aspect-[4/5] w-full object-cover object-center opacity-88 transition duration-700 hover:scale-105 hover:opacity-100 sm:aspect-[16/13] lg:aspect-[4/5]"
              />
              <img
                src={jennyImage}
                alt="Jenny at Oracle Tattoo"
                className="aspect-[4/5] w-full object-cover object-center opacity-88 transition duration-700 hover:scale-105 hover:opacity-100 sm:aspect-[16/13] lg:aspect-[4/5]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,#050505_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-coal lg:block" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Studio Introduction</p>
            <h2 className="serif-display text-[clamp(2rem,6.5vw,7.6rem)] leading-[0.94] sm:leading-[0.92]">
              Best Tattoo Studio in Patna
            </h2>
            <div className="mt-6 grid max-w-3xl gap-4 text-base leading-7 text-bone/64 sm:mt-8 sm:text-lg sm:leading-8">
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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/artists/jenny"
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-bone px-7 text-base font-extrabold text-ink transition hover:bg-mist"
              >
                More About Jenny
              </Link>
              <Link
                to="/booking"
                className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/18 px-7 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Book Consultation
              </Link>
            </div>
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
            {orderedServices.map((service, index) => (
              <motion.article
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="min-h-[260px] min-w-[82vw] cursor-pointer border border-white/12 bg-coal p-5 transition duration-200 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:min-h-[320px] sm:min-w-[280px] sm:p-7 md:min-w-[340px]"
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.58 } } }}
              >
                {service.image && (
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#050505]">
                    <img
                      src={service.image}
                      alt={`${service.name} tattoo example`}
                      className="h-44 w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                )}
                <span className="mt-5 block text-xs font-semibold text-bone/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl leading-tight sm:mt-4 sm:text-3xl">{service.name}</h3>
                <p className="mt-4 text-sm leading-6 text-bone/58">{service.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-28">
        <div className="section-shell">
          <ScrollReveal className="mb-8 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Gallery / Portfolio</p>
            <h2 className="section-display-lg mt-3 max-w-4xl sm:mt-4">A sharper eye for black, skin, and silence.</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[220px] lg:auto-rows-[300px]">
            {portfolioItems.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={index * 0.04}
                className={`overflow-hidden border border-white/10 bg-ink ${item.spanClass ?? ""}`}
              >
                <img src={item.src} alt={item.alt} className="h-full min-h-[220px] w-full object-cover transition duration-700 hover:scale-105 sm:min-h-[280px]" />
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
