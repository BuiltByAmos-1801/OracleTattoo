import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { services } from "../data/services.js";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{service.name} | Oracle Tattoo</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.category}, Oracle Tattoo, tattoo services`} />
        <link rel="canonical" href={`https://www.oracletattoo.in/services/${service.id}`} />
      </Helmet>

      <section className="relative overflow-hidden bg-ink pb-24 pt-28 sm:pt-32">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_46%)]" />
        <div className="section-shell relative z-10">
          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="page-hero-eyebrow">Service Details</p>
                <h1 className="page-hero-title">{service.name}</h1>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-bone transition hover:text-white">
                <ArrowLeft size={16} /> Back to services
              </Link>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-8 text-bone/70 sm:text-lg">
              {service.detailText}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-shell grid gap-10 md:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-coal">
            <img src={service.image} alt={service.name} className="h-full min-h-[420px] w-full object-cover object-center" />
          </div>
        </ScrollReveal>

        <div className="grid gap-8">
          <ScrollReveal>
            <div className="grid gap-6 rounded-[32px] border border-white/10 bg-black/40 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-bone/50">
                <span>{service.category}</span>
              </div>
              <div className="space-y-4">
                {service.detailPoints.map((point) => (
                  <div key={point} className="rounded-3xl border border-white/10 bg-coal p-5 text-base leading-7 text-bone/70">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="rounded-[32px] border border-white/10 bg-coal p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white">Why choose this category?</h2>
              <p className="mt-5 text-base leading-8 text-bone/70">
                {service.description}
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-black/30 p-5 text-sm leading-7 text-bone/70">
                  Custom design consultations for every placement and body type.
                </div>
                <div className="rounded-3xl bg-black/30 p-5 text-sm leading-7 text-bone/70">
                  Strong hygiene standards, sterile needles, and safe tattoo sessions.
                </div>
                <div className="rounded-3xl bg-black/30 p-5 text-sm leading-7 text-bone/70">
                  Clear aftercare guidance to keep your tattoo sharp during healing.
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <Link
              to="/booking"
              className="inline-flex w-full items-center justify-center rounded-full bg-bone px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-mist"
            >
              Book a consultation for {service.name}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {service.images?.length > 1 && (
        <section className="page-section">
          <div className="section-shell">
            <ScrollReveal className="mb-8 sm:mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Category Photos</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{service.name} gallery</h2>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.images.map((image, index) => (
                <ScrollReveal key={`${service.id}-${index}`} delay={(index % 6) * 0.03}>
                  <img
                    src={image}
                    alt={`${service.name} ${index + 1}`}
                    className="aspect-[4/5] w-full rounded-lg border border-white/10 object-cover"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
