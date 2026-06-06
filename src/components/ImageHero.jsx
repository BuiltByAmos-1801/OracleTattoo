import React from "react";
import ScrollReveal from "./ScrollReveal.jsx";

export default function ImageHero({
  image,
  alt,
  eyebrow,
  kicker,
  title,
  lead,
  children,
  titleClassName = "",
  className = ""
}) {
  return (
    <section className={`relative flex min-h-[64svh] items-end overflow-hidden bg-ink pb-12 pt-32 sm:min-h-[70svh] sm:pb-16 sm:pt-40 md:pt-52 ${className}`}>
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover opacity-58" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.72)_48%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      <div className="section-shell relative z-10">
        <ScrollReveal>
          {kicker && <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-bone/46">{kicker}</p>}
          <p className="page-hero-eyebrow">{eyebrow}</p>
          <h1 className={`mt-5 max-w-5xl text-[clamp(3rem,10vw,10rem)] font-black uppercase leading-[0.9] ${titleClassName}`}>
            {title}
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-base leading-7 text-bone/72 sm:mt-8 sm:text-xl sm:leading-9">{lead}</p>}
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
