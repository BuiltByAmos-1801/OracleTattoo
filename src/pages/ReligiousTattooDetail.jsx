import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { religiousTattoos } from "../data/religiousTattoos.js";

export default function ReligiousTattooDetail() {
  const { tattooId } = useParams();
  const tattoo = religiousTattoos.find((item) => item.id === tattooId);
  const relatedTattoos = religiousTattoos.filter((item) => item.id !== tattooId).slice(0, 3);

  if (!tattoo) {
    return (
      <PageTransition>
        <section className="page-section">
          <ScrollReveal>
            <h1 className="text-4xl font-semibold text-white">Religious Tattoo Not Found</h1>
            <p className="mt-4 max-w-2xl text-bone/72">
              This tattoo detail page could not be found. Please return to services and choose another religious tattoo design.
            </p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition hover:border-white/30 hover:bg-white/10">
              <ArrowLeft size={16} /> Back to Services
            </Link>
          </ScrollReveal>
        </section>
      </PageTransition>
    );
  }

  const bookingText = `Hi Oracle Tattoo, I want to know more about ${tattoo.title}.`;

  return (
    <PageTransition>
      <Helmet>
        <title>{tattoo.title} | Religious Tattoo Oracle Tattoo Ranchi</title>
        <meta name="description" content={tattoo.description} />
        <link rel="canonical" href={`https://www.oracletattoo.in/religious-tattoos/${tattoo.id}`} />
      </Helmet>

      <section className="relative overflow-hidden bg-ink pt-28 sm:pt-36">
        <img src={tattoo.image} alt={tattoo.title} className="absolute inset-0 h-full w-full object-cover opacity-36" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.76)_50%,rgba(0,0,0,0.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />

        <div className="section-shell relative z-10 grid gap-10 pb-14 sm:pb-20 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone/64 transition hover:text-white">
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Religious Tattoo Detail</p>
            <h1 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.92]">
              {tattoo.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-bone/76 sm:text-xl sm:leading-9">
              {tattoo.description}
            </p>
          </ScrollReveal>

          <motion.div
            className="overflow-hidden rounded-lg border border-white/12 bg-coal shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72 }}
          >
            <img src={tattoo.image} alt={tattoo.title} className="aspect-[4/5] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1fr]">
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Tattoo Meaning</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                A spiritual tattoo should feel personal, balanced, and respectful.
              </h2>
              <a
                href={`https://wa.me/917667059851?text=${encodeURIComponent(bookingText)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-bone px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-ink transition hover:bg-white"
              >
                Ask About This Tattoo <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid gap-5">
            {[
              ["Meaning", tattoo.detailSections.meaning],
              ["Design Planning", tattoo.detailSections.design],
              ["Best Placement", tattoo.detailSections.placement],
              ["Studio Process", tattoo.detailSections.process]
            ].map(([title, text], index) => (
              <ScrollReveal key={title} delay={index * 0.04} className="border border-white/12 bg-coal p-6 sm:p-8">
                <span className="text-xs font-bold tracking-[0.18em] text-bone/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-bone/68 sm:text-base">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Good For</p>
            <div className="mt-6 grid gap-3">
              {tattoo.idealFor.map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/10 bg-ink px-5 py-4 text-sm text-bone/76">
                  <CheckCircle2 size={18} className="shrink-0 text-bone/82" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Before You Book</p>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {tattoo.notes.map((note) => (
                <p key={note} className="py-4 text-sm leading-6 text-bone/68 sm:text-base">
                  {note}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <ScrollReveal className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">More Religious Tattoos</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Explore similar devotional designs.</h2>
            </div>
            <Link to="/services/religious-tattoos" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone transition hover:text-white">
              View Service <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTattoos.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.04}>
                <Link to={item.detailPath} className="group block overflow-hidden rounded-lg border border-white/12 bg-coal transition hover:-translate-y-1 hover:border-white/34">
                  <img src={item.image} alt={item.title} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="p-5">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone/42">{item.category}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
