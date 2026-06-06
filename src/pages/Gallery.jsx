import React from "react";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { demoImages } from "../data/demoImages.js";

const filters = ["All", "Religious Tattoos", "Band Tattoos", "Small Tattoos", "Portrait", "Piercings", "Couples Tattoos"];

const galleryStats = [
  { value: "20", label: "Portfolio frames" },
  { value: "6", label: "Specialty styles" },
  { value: "Ranchi", label: "Custom studio" }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return demoImages.gallery;
    return demoImages.gallery.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <PageTransition>
      <Helmet>
        <title>Tattoo Gallery Ranchi | Oracle Tattoo Portfolio</title>
        <meta name="description" content="Browse Oracle Tattoo's Ranchi tattoo portfolio: realism tattoos, mandala tattoos, religious tattoos, tribal designs, sleeve work, lettering, cover-ups, and piercings." />
        <meta name="keywords" content="tattoo gallery Ranchi, tattoo designs Ranchi, best tattoo artist in Ranchi, religious tattoo Ranchi, mandala tattoo Ranchi, realism tattoo Ranchi, Oracle Tattoo gallery" />
        <link rel="canonical" href="https://www.oracletattoo.in/gallery" />
      </Helmet>

      <section className="relative min-h-[72svh] overflow-hidden bg-ink pt-32 sm:min-h-[78svh] sm:pt-40 md:pt-52">
        <img
          src={demoImages.hero}
          alt="Professional tattoo studio portfolio"
          className="absolute inset-0 h-full w-full object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.66)_48%,rgba(0,0,0,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="section-shell relative z-10">
          <ScrollReveal>
            <p className="page-hero-eyebrow">Oracle Tattoo Portfolio</p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,10vw,10rem)] font-black uppercase leading-[0.9]">
              Ink that looks intentional.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-bone/72 sm:mt-8 sm:text-xl sm:leading-9">
              A curated studio gallery for religious tattoos, realistic portraits, couples marks, fine-line mini pieces, bold bands, and clean piercings.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="mt-10 grid max-w-3xl gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-3">
            {galleryStats.map((stat) => (
              <div key={stat.label} className="bg-black/54 px-5 py-5 backdrop-blur-md sm:px-6 sm:py-6">
                <p className="text-2xl font-black text-bone sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone/52">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14 md:py-20">
        <ScrollReveal className="mb-8 grid gap-5 border-y border-white/12 py-6 sm:mb-10 sm:gap-6 sm:py-8 md:grid-cols-[1fr_0.7fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">About Oracle Tattoo</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Professional tattoo work, framed like a serious studio portfolio.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-bone/66 sm:text-xl sm:leading-8">
              Our artists turn your ideas into meaningful body art with precision, creativity, and care. Explore religious tattoos, band tattoos, small pieces, portraits, couples work, and piercing details from Oracle Tattoo's portfolio.
            </p>
          </div>
          <p className="text-sm leading-6 text-bone/48 md:text-right">
            Images are selected to match each title and style direction. Use the filters to browse by tattoo style, and click any piece for a closer studio-style view.
          </p>
        </ScrollReveal>

        <ScrollReveal className="custom-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-4 sm:gap-3 sm:pb-5">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] transition-colors sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.16em] ${
                activeFilter === filter ? "border-bone bg-bone text-ink" : "border-white/14 bg-white/[0.03] text-bone/64 hover:border-white/50 hover:text-bone"
              }`}
            >
              {filter}
            </button>
          ))}
        </ScrollReveal>

        <motion.div layout className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button
                type="button"
                key={`${item.image}-${activeFilter}`}
                layout
                className="group relative min-h-[420px] w-full overflow-hidden border border-white/10 bg-coal text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.42, delay: index * 0.025 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/34 to-black/4" />
                <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-black/42 px-3 py-2 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-bone/72 backdrop-blur-md sm:left-5 sm:top-5">
                  {item.category}
                </div>
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/18 bg-black/42 text-bone/72 backdrop-blur-md transition group-hover:bg-bone group-hover:text-ink sm:right-5 sm:top-5">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="font-serif text-2xl leading-tight sm:text-3xl">{item.title}</span>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-bone/62">{item.description}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/94 p-4 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button type="button" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/40 sm:right-5 sm:top-5 sm:h-12 sm:w-12" aria-label="Close lightbox" onClick={() => setSelected(null)}>
              <X size={22} />
            </button>
            <motion.img
              src={selected.image}
              alt={selected.title}
              className="max-h-[60vh] w-auto max-w-full border border-white/12 object-contain sm:max-h-[64vh]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
            />
            <div className="mt-6 w-full max-w-3xl text-left text-bone/80 sm:mt-8">
              <h3 className="font-serif text-2xl sm:text-3xl">{selected.title}</h3>
              <p className="mt-3 text-sm leading-7 sm:text-base">{selected.description}</p>
              <span className="mt-4 inline-block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-bone/50">
                {selected.category}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
