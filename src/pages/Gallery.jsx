import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition.jsx";
import { galleryCategories } from "../data/galleryCategories.js";

export default function Gallery() {
  return (
    <PageTransition>
      <Helmet>
        <title>Gallery | Oracle Tattoo Studio</title>
        <meta name="description" content="Browse Oracle Tattoo gallery categories in Ranchi, including religious tattoos, band tattoos, small tattoos, portraits, piercings, and animal tattoos." />
      </Helmet>

      <section className="min-h-screen bg-ink pt-28 pb-20 sm:pt-32 lg:pt-36">
        <div className="page-hero">
          <p className="page-hero-eyebrow">Studio gallery</p>
          <h1 className="page-hero-title page-hero-title--wide">Gallery categories</h1>
          <p className="page-hero-lead max-w-4xl">
            Pick one of the six tattoo categories below, then explore the matching tattoo images. Each category opens a clean gallery of work from Oracle Tattoo.
          </p>
        </div>

        <div className="page-section">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((category) => (
              <Link
                key={category.id}
                to={`/gallery/${category.id}`}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative overflow-hidden bg-slate-950">
                  <img
                    src={category.images[0]}
                    alt={category.alt}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="space-y-3 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/60">{category.eyebrow}</p>
                  <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                  <p className="text-sm leading-6 text-bone/70">{category.description}</p>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-bone/60">
                    <span>{category.images.length} images</span>
                    <span className="font-semibold text-white">View</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
