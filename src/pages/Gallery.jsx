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
          <h1 className="page-hero-title page-hero-title--wide">Art that stays close.</h1>
          <p className="page-hero-lead">
            Explore our most requested categories, from devotional tattoos and crisp bands to small symbols, portraits, piercings, and animal tattoo pieces crafted at Oracle Tattoo in Ranchi.
          </p>
        </div>

        <div className="page-section">
          <div className="grid gap-5 md:grid-cols-12">
            {galleryCategories.map((category, index) => {
              const cardLayoutClass = [
                "md:col-span-7 md:row-span-2",
                "md:col-span-5",
                "md:col-span-5 md:row-span-2",
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-12",
              ][index % 6];

              return (
                <Link
                  key={category.title}
                  to={`/gallery/${category.id}`}
                  className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0c0c] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_32px_110px_rgba(0,0,0,0.34)] ${cardLayoutClass}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="grid grid-cols-3 gap-1.5 p-2.5 sm:p-3">
                    {category.images.slice(0, 4).map((image, imageIndex) => (
                      <img
                        key={`${category.title}-${imageIndex}`}
                        src={image}
                        alt={`${category.alt} ${imageIndex + 1}`}
                        className={`w-full rounded-[20px] object-cover transition duration-700 group-hover:scale-105 ${
                          imageIndex === 0 ? "col-span-2 row-span-2 aspect-[4/5]" : "aspect-[3/4]"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white/70">
                          {category.eyebrow}
                        </p>
                        <h2 className="mt-2 text-xl font-semibold text-bone sm:text-2xl">{category.title}</h2>
                        <p className="mt-3 max-w-md text-sm leading-6 text-bone/70">
                          {category.description}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bone/80 backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-bone/80">
                      <span>{category.images.length} images</span>
                      <span className="transition group-hover:text-white">View details</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
