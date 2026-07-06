import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { galleryCategories } from "../data/galleryCategories.js";

export default function GalleryCategoryDetail() {
  const { categoryId } = useParams();
  const category = galleryCategories.find((item) => item.id === categoryId);

  if (!category) {
    return <Navigate to="/gallery" replace />;
  }

  const bookingText = `Hi Oracle Tattoo, I want to know more about ${category.title}.`;
  const relatedCategories = galleryCategories.filter((item) => item.id !== category.id).slice(0, 3);

  return (
    <PageTransition>
      <Helmet>
        <title>{category.title} | Oracle Tattoo Gallery</title>
        <meta name="description" content={category.detailIntro} />
        <link rel="canonical" href={`https://www.oracletattoo.in/gallery/${category.id}`} />
      </Helmet>

      <section className="relative overflow-hidden bg-ink pt-28 sm:pt-36">
        <img src={category.images[0]} alt={category.title} className="absolute inset-0 h-full w-full object-cover opacity-34" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.76)_50%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />

        <div className="section-shell relative z-10 grid gap-10 pb-14 sm:pb-20 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
          <ScrollReveal>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone/64 transition hover:text-white">
              <ArrowLeft size={16} /> Back to Gallery
            </Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-bone/46">{category.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.92]">
              {category.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-bone/76 sm:text-xl sm:leading-9">
              {category.detailIntro}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="overflow-hidden rounded-lg border border-white/12 bg-coal shadow-[0_28px_90px_rgba(0,0,0,0.4)]">
            <img src={category.images[0]} alt={category.alt} className="aspect-[4/5] w-full object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1fr]">
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Category Details</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Designed with meaning, proportion, and long-term clarity.
              </h2>
              <a
                href={`https://wa.me/917667059851?text=${encodeURIComponent(bookingText)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-bone px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-ink transition hover:bg-white"
              >
                Ask About {category.title} <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid gap-5">
            {category.detailSections.map((section, index) => (
              <ScrollReveal key={section.title} delay={index * 0.04} className="border border-white/12 bg-coal p-6 sm:p-8">
                <span className="text-xs font-bold tracking-[0.18em] text-bone/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-bone/68 sm:text-base">{section.text}</p>
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
              {category.idealFor.map((item) => (
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
              {category.notes.map((note) => (
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
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Gallery</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Visual references from this category.</h2>
            </div>
            <Link to="/booking" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-bone transition hover:text-white">
              Book Consultation <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(14rem,1fr))]">
            {category.images.map((image, index) => (
              <ScrollReveal key={`${category.id}-${index}`} delay={(index % 6) * 0.03}>
                <div className={`group h-full overflow-hidden rounded-[32px] border border-white/10 bg-ink/20 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)] ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
                  <div className="relative h-full min-h-[18rem] overflow-hidden bg-slate-950/5">
                    <img
                      src={image}
                      alt={`${category.alt} ${index + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-24">
        <div className="section-shell">
          <ScrollReveal className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Explore More</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">More categories from Oracle Tattoo.</h2>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCategories.map((item) => (
              <ScrollReveal key={item.id}>
                <Link to={`/gallery/${item.id}`} className="group block overflow-hidden rounded-lg border border-white/12 bg-ink transition hover:-translate-y-1 hover:border-white/34">
                  <img src={item.images[0]} alt={item.alt} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="p-5">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone/42">{item.eyebrow}</p>
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
