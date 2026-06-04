import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import realisticImg from "../images/tattooproject21.webp";
import religiousImg from "../images/tattooproject17.webp";
import coupleImg from "../images/tattooproject18.webp";
import smallImg from "../images/tattooproject14.webp";
import piercingImg from "../images/tattooproject16.webp";
import { demoImages } from "../data/demoImages.js";
import { serviceCategories, services } from "../data/services.js";

export default function Services() {
  const planningNotes = [
    "Custom tattoo concepts begin with references, placement, size, and style discussion.",
    "Fine detail work is planned carefully so shading, depth, and healing stay clean.",
    "Piercing services include placement checks, hygienic setup, and aftercare guidance.",
    "First-time clients get patient consultation before the final design is inked."
  ];

  const whyChooseUs = [
    {
      icon: Sparkles,
      title: "Creative Custom Work",
      text: "Every tattoo tells a story. Our artists turn your ideas into body art with precision, creativity, and attention to detail."
    },
    {
      icon: ShieldCheck,
      title: "Safe Studio Hygiene",
      text: "We follow strict hygiene standards and use high-quality equipment for a safe, comfortable tattoo or piercing experience."
    },
    {
      icon: BadgeCheck,
      title: "Complete Guidance",
      text: "From consultation to aftercare, we work closely with every client so the final tattoo feels personal and lasts beautifully."
    }
  ];

  const skillStats = [
    { label: "Experience", value: "95%" },
    { label: "Tattoo", value: "97%" },
    { label: "Piercing", value: "93%" }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Tattoo Services in Ranchi | Custom Tattoos & Piercing</title>
        <meta name="description" content="Explore tattoo services in Ranchi at Oracle Tattoo: custom tattoos, realism, religious tattoos, mandala, sleeves, cover-ups, small tattoos, couple tattoos, and safe piercings." />
        <meta name="keywords" content="tattoo services Ranchi, tattoo in Ranchi, custom tattoo Ranchi, religious tattoo Ranchi, realism tattoo Ranchi, mandala tattoo Ranchi, piercing in Ranchi, cover up tattoo Ranchi" />
        <link rel="canonical" href="https://www.oracletattoo.in/services" />
      </Helmet>

      <section className="page-hero">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Home / Services</p>
          <p className="page-hero-eyebrow">Services</p>
          <h1 className="page-hero-title">Our Service</h1>
          <p className="page-hero-lead">
            Explore realistic tattoos, religious designs, couple tattoos, small tattoo designs, and safe professional piercing services at Oracle Tattoo, Ranchi.
          </p>
          <motion.div className="mt-5 h-px max-w-2xl bg-bone sm:mt-7" initial={{ scaleX: 0, transformOrigin: "left" }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
        </ScrollReveal>
      </section>

      <section className="page-section border-b border-white/10 pb-10 sm:pb-14 md:pb-16">
        <ScrollReveal className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">What We Do</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">We create meaningful tattoos and safe piercings you can wear with confidence.</h2>
          <p className="mt-5 text-base leading-7 text-bone/66 sm:text-lg">
            From realistic portrait work to shared couple designs, subtle small tattoos, spiritual ink, and hygienic body piercings, Oracle Tattoo delivers trusted body art services with care and precision.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[
            {
              id: "realistic-tattoos",
              title: "Realistic Tattoos",
              description: "Realistic tattoos focus on fine details and natural shading to create artwork that feels alive. Every design is carefully crafted to capture depth, expression, and beauty, making it a unique and eye-catching tattoo style.",
              image: realisticImg
            },
            {
              id: "religious-tattoos",
              title: "Religious Tattoos",
              description: "Sacred tattoo designs inspired by spiritual symbols, deities, and scriptures, crafted with precision to express faith, devotion, and timeless meaning.",
              image: religiousImg
            },
            {
              id: "couple-tattoo",
              title: "Couple Tattoo",
              description: "A couple tattoo is a meaningful and permanent symbol of love, trust, and deep connection between two people. It represents shared memories and the unique bond of a relationship.",
              image: coupleImg
            },
            {
              id: "small-tattoo-designs",
              title: "Small Tattoo Designs",
              description: "Small tattoos are subtle, stylish, and meaningful. Perfect for wrists, fingers, ankles, and collarbones, we create tiny designs like symbols, words, or minimal patterns that reflect your personality.",
              image: smallImg
            },
            {
              id: "piercing",
              title: "Piercing",
              description: "Get stylish and safe body piercings at our Ranchi studio. We offer ear, nose, eyebrow, lip, and cartilage piercings with professional care and high-quality jewelry for a trendy, comfortable, and hygienic experience.",
              image: piercingImg
            }
          ].map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/12 transition hover:border-white/40">
              <div className="absolute inset-0 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/65 transition duration-300 group-hover:bg-black/55" />
              </div>
              <div className="relative flex min-h-[280px] flex-col justify-between gap-6 p-7 sm:p-9">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-bone/80">{item.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link to={`/services/${item.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone transition hover:text-white">
                    READ MORE <ArrowRight size={16} />
                  </Link>
                  <a
                    href={(() => {
                      try {
                        const img = item.image || "";
                        const imgUrl = typeof window !== 'undefined' && img
                          ? (img.startsWith('http') ? img : `${window.location.origin}${img}`)
                          : img;
                        const msg = `Hi Oracle Tattoo, I want to book an appointment for ${item.title}. Image: ${imgUrl}`;
                        return `https://wa.me/917667059851?text=${encodeURIComponent(msg)}`;
                      } catch (e) {
                        return `https://wa.me/917667059851?text=${encodeURIComponent(`Hi Oracle Tattoo, I want to book an appointment for ${item.title}.`)}`;
                      }
                    })()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone transition hover:text-white"
                  >
                    BOOK
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <ScrollReveal className="mb-10 grid gap-6 border border-white/14 bg-coal p-6 sm:mb-14 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8 md:mb-20 md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">First Tattoo Offer</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">Get 15% discount for your first tattoo</h2>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-bone/62 sm:text-base sm:leading-7">
              Start your tattoo journey with an exclusive first-tattoo discount. Our experienced artists create unique custom designs in a safe and hygienic studio.
            </p>
          </div>
          <Link to="/booking" className="magnetic-btn inline-flex w-fit items-center gap-3 border border-white/22 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-bone sm:px-6">
            Make an Appointment <ArrowRight size={16} />
          </Link>
        </ScrollReveal>

        <ScrollReveal className="mb-12 grid gap-6 border-y border-white/12 py-8 sm:mb-16 sm:gap-8 sm:py-10 md:mb-20 md:grid-cols-2 lg:grid-cols-4">
          {planningNotes.map((note, index) => (
            <div key={note}>
              <span className="text-xs font-bold tracking-[0.18em] text-bone/38">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-sm leading-6 text-bone/64 sm:mt-5">{note}</p>
            </div>
          ))}
        </ScrollReveal>
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {serviceCategories.map((category) => {
            const categoryServices = services.filter((service) => service.category === category);
            return (
              <div key={category} className="grid gap-6 lg:grid-cols-[0.38fr_1fr] lg:gap-10">
                <ScrollReveal>
                  <h2 className="border-t border-white/18 pt-5 text-sm font-bold uppercase tracking-[0.24em] text-bone/74 lg:sticky lg:top-32 lg:pt-6">{category}</h2>
                </ScrollReveal>
                <motion.div
                  className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.16 }}
                  variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
                >
                  {categoryServices.map((service, index) => {
                    const image = service.image || demoImages.services[index % demoImages.services.length];
                    return (
                      <motion.article
                        key={service.id}
                        className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-coal transition hover:border-white/42"
                        variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.64 } } }}
                      >
                        <div className="absolute inset-0 overflow-hidden">
                          <img src={image} alt={service.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>
                        <div className="relative flex min-h-[280px] flex-col justify-end p-7 sm:p-8">
                          <span className="text-xs font-bold uppercase tracking-[0.28em] text-bone/50">{service.name}</span>
                          <p className="mt-4 text-sm leading-6 text-bone/80 sm:text-base">{service.description}</p>
                          {service.id ? (
                            <Link
                              to={`/services/${service.id}`}
                              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone transition hover:text-white"
                            >
                              READ MORE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                          ) : (
                            <a
                              href={`/booking?service=${encodeURIComponent(service.name)}`}
                              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone transition hover:text-white"
                            >
                              READ MORE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </a>
                          )}
                          <a
                            href={(() => {
                              try {
                                const img = image || "";
                                const imgUrl = typeof window !== 'undefined' && img
                                  ? (img.startsWith('http') ? img : `${window.location.origin}${img}`)
                                  : img;
                                const msg = `Hi Oracle Tattoo, I want to book an appointment for ${service.name}. Image: ${imgUrl}`;
                                return `https://wa.me/917667059851?text=${encodeURIComponent(msg)}`;
                              } catch (e) {
                                return `https://wa.me/917667059851?text=${encodeURIComponent(`Hi Oracle Tattoo, I want to book an appointment for ${service.name}.`)}`;
                              }
                            })()}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone transition hover:text-white"
                          >
                            BOOK
                          </a>
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Why Choose Us</p>
            <h2 className="section-display mt-4">Always provide satisfactory work.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-bone/62 sm:text-base">
              At Oracle Tattoo, we believe every tattoo tells a story. Our skilled artists are passionate about turning your ideas into stunning body art with precision, creativity, and attention to detail.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-bone/62 sm:text-base">
              We follow strict hygiene standards and use high-quality equipment to ensure a safe and comfortable tattoo experience. Whether you want a small minimalist tattoo or a large custom design, our artists work closely with you to create something truly unique.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-bone/62 sm:text-base">
              At Oracle Tattoo, customer satisfaction is our priority. From consultation to aftercare guidance, we make sure every client leaves with a tattoo they are proud to wear for life.
            </p>
            <div className="mt-8 grid gap-4 border-y border-white/12 py-6 sm:mt-10 sm:grid-cols-3">
              <div>
                <p className="font-serif text-5xl leading-none sm:text-6xl">1,250+</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-bone/48">Satisfied Customers</p>
              </div>
              {skillStats.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-5xl leading-none sm:text-6xl">{item.value}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-bone/48">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.06} className="border border-white/12 bg-ink p-6 sm:p-7">
                  <Icon size={26} className="text-bone/82" strokeWidth={1.4} />
                  <h3 className="mt-7 font-serif text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-bone/58">{item.text}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section border-t border-white/10 py-12 sm:py-16 md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 rounded-3xl border border-white/12 bg-coal p-6 sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Quick Links</p>
              <ul className="mt-5 space-y-3 text-sm text-bone/70">
                {[
                  { label: "About Us", href: "https://oracleinktattoo.com/about-us/" },
                  { label: "Services", href: "https://oracleinktattoo.com/services/" },
                  { label: "Portfolio", href: "https://oracleinktattoo.com/portfolio/" },
                  { label: "Gallery", href: "https://oracleinktattoo.com/gallery/" },
                  { label: "Contact Us", href: "https://oracleinktattoo.com/contact-us/" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Services</p>
              <ul className="mt-5 space-y-3 text-sm text-bone/70">
                {[
                  { label: "Realistic Tattoo", href: "https://oracleinktattoo.com/realistic-tattoo/" },
                  { label: "Piercing", href: "https://oracleinktattoo.com/piercing/" },
                  { label: "Couple Tattoo", href: "https://oracleinktattoo.com/couple-tattoo/" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-coal p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Contact detail</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-bone/70">
              <p>First floor NH-75, Ratu Rd, beside Devi Mandap Tilta, Opp. Sharda Automobiles TVS</p>
              <p>
                <a href="tel:+917667059851" className="transition hover:text-white">+917667059851</a>
              </p>
              <p>
                <a href="mailto:oracletattoo23@gmail.com" className="transition hover:text-white">oracletattoo23@gmail.com</a>
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="https://www.instagram.com/oracletattooindia?igsh=MWZ2NzZyY2U1ejZ1MA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="transition hover:text-white">
                  Instagram
                </a>
                <a href="https://www.instagram.com/oracletattooindia?igsh=MWZ2NzZyY2U1ejZ1MA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="transition hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-12 sm:pb-20 md:pb-28">
        <ScrollReveal>
          <Link to="/booking" className="magnetic-btn flex min-h-[160px] flex-col items-start justify-between gap-6 border border-white/22 p-6 sm:min-h-[220px] sm:flex-row sm:items-center sm:gap-8 sm:p-8 md:p-12">
            <span className="section-display-lg">Ready to begin?</span>
            <ArrowRight className="shrink-0" size={32} />
          </Link>
        </ScrollReveal>
      </section>

    </PageTransition>
  );
}
