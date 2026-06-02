import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { artists } from "../data/artists.js";

export default function Artists() {
  return (
    <PageTransition>
      <Helmet>
        <title>Best Tattoo Artists in Ranchi | Oracle Tattoo</title>
        <meta name="description" content="Meet tattoo artists in Ranchi at Oracle Tattoo, specialists in realism tattoos, mandala tattoos, tribal work, fine line tattoos, cover-ups, and custom designs." />
        <meta name="keywords" content="best tattoo artist in Ranchi, tattoo artists Ranchi, female tattoo artist Ranchi, realism tattoo artist Ranchi, custom tattoo artist Ranchi, Oracle Tattoo artists" />
        <link rel="canonical" href="https://www.oracletattoo.in/artists" />
      </Helmet>

      <section className="page-hero">
        <ScrollReveal>
          <p className="page-hero-eyebrow">Artists</p>
          <h1 className="page-hero-title page-hero-title--wide">Hands behind the work.</h1>
        </ScrollReveal>
      </section>

      <section className="page-section">
        <motion.div
          className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {artists.map((artist) => (
            <motion.article
              key={artist.name}
              className="group relative min-h-[420px] overflow-hidden border border-white/12 bg-coal sm:min-h-[520px] md:min-h-[620px]"
              variants={{ hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } } }}
            >
              {/* Replace with real artist names and photos */}
              <img src={artist.image} alt={`${artist.name} at Oracle Tattoo`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-42" />
              <div className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/78" />
              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-5 sm:min-h-[520px] sm:p-7 md:min-h-[620px]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-bone/56">{artist.experience}</p>
                <h2 className="mt-3 font-serif text-4xl leading-none sm:mt-4 sm:text-5xl">{artist.name}</h2>
                <p className="mt-3 text-sm font-semibold text-bone sm:mt-4 sm:text-base">{artist.specialization}</p>
                <motion.div className="overflow-hidden" initial={false}>
                  <div className="mt-4 max-h-none opacity-100 sm:max-h-0 sm:opacity-0 sm:transition-all sm:duration-500 group-hover:sm:mt-8 group-hover:sm:max-h-56 group-hover:sm:opacity-100">
                    <p className="text-sm leading-6 text-bone/64">{artist.detail}</p>
                    <a href="https://instagram.com/" className="mt-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-bone sm:mt-6">
                      <Instagram size={16} /> {artist.handle}
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}
