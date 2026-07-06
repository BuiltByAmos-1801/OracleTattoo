import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ChevronRight, Sparkles, Layers3, ShieldCheck, Feather, CircleDot } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { serviceCategories, services } from "../data/services.js";

const iconMap = {
  "Religious Tattoos": Sparkles,
  "Band Tattoos": CircleDot,
  "Small Tattoos": Feather,
  Portrait: Layers3,
  Piercings: BadgeCheck,
  "Animal Tattoos": ShieldCheck
};

const serviceMap = serviceCategories
  .map((category) => services.find((serviceItem) => serviceItem.category === category))
  .filter(Boolean);

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceMap[0]?.category ?? "Religious Tattoos");
  const activeService = serviceMap.find((service) => service.category === activeCategory) ?? serviceMap[0];

  return (
    <PageTransition>
      <Helmet>
        <title>Services | Oracle Tattoo Studio Ranchi</title>
        <meta name="description" content="Explore Oracle Tattoo services in Ranchi: Religious Tattoos, Band Tattoos, Small Tattoos, Portrait, Piercings, and Animal Tattoos." />
        <meta name="keywords" content="Religious Tattoos, Band Tattoos, Small Tattoos, Portrait Tattoos, Piercings, Animal Tattoos, tattoo services Ranchi" />
        <link rel="canonical" href="https://www.oracletattoo.in/services" />
      </Helmet>

      <section className="relative overflow-hidden bg-ink pb-24 pt-32 sm:pb-28 sm:pt-36">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_42%)]" />
        <div className="section-shell relative z-10">
          <ScrollReveal>
            <p className="page-hero-eyebrow">Services</p>
            <h1 className="page-hero-title">Advanced Tattoo Categories</h1>
            <p className="page-hero-lead max-w-3xl">
              Choose your style direction from six premium categories crafted for devotion, rhythm, minimalism, portraits, piercings, and animal-inspired artwork.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.06} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceMap.map((service) => {
              const Icon = iconMap[service.category] ?? Sparkles;
              return (
                <motion.article
                  key={service.id}
                  whileHover={{ y: -6 }}
                  className={`group overflow-hidden rounded-[28px] border border-white/10 bg-coal p-5 transition-shadow duration-400 hover:shadow-[0_26px_58px_rgba(0,0,0,0.25)] sm:p-6`}
                >
                  {service.image && (
                    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950">
                      <img
                        src={service.image}
                        alt={`${service.category} tattoo example`}
                        className="h-44 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="mt-5 flex items-center gap-3 text-bone/70">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 text-bone transition group-hover:bg-bone group-hover:text-ink">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.26em] text-bone/50">Category</p>
                      <h2 className="mt-3 text-xl font-semibold text-white">{service.category}</h2>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-bone/65">{service.description}</p>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveCategory(service.category)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                        activeCategory === service.category
                          ? "border-bone bg-bone text-ink"
                          : "border-white/12 text-bone/64 hover:border-white/20 hover:text-bone"
                      }`}
                    >
                      {activeCategory === service.category ? "Selected" : "Select"}
                    </button>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-bone transition hover:text-white"
                    >
                      View details <ChevronRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </ScrollReveal>

          <section className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <ScrollReveal>
              <div className="rounded-[38px] border border-white/10 bg-gradient-to-b from-white/5 via-white/3 to-white/2 p-6 shadow-[0_30px_80px_rgba(255,255,255,0.03)] sm:p-8">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-3xl bg-bone text-ink">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/54">Featured Category</p>
                      <h2 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">{activeService.category}</h2>
                    </div>
                  </div>
                  <p className="max-w-2xl text-base leading-8 text-bone/70 sm:text-lg">
                    {activeService.detailText}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {activeService.detailPoints.map((point) => (
                      <div key={point} className="rounded-3xl bg-black/30 p-5 text-sm leading-6 text-bone/70">
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={`/services/${activeService.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition hover:border-white/30 hover:bg-white/10"
                    >
                      See full details
                    </Link>
                    <Link
                      to={`/booking?service=${encodeURIComponent(activeService.name)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-mist"
                    >
                      Book this service
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="grid gap-5">
              {serviceMap.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group overflow-hidden rounded-[32px] border border-white/10 bg-coal transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="relative overflow-hidden bg-slate-950/40">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-bone/60">{service.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{service.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-sm leading-6 text-bone/65">{service.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-bone/60">Explore</span>
                      <ArrowRight size={18} className="text-bone/60 transition group-hover:text-bone" />
                    </div>
                  </div>
                </Link>
              ))}
            </ScrollReveal>
          </section>
        </div>
      </section>
    </PageTransition>
  );
}
