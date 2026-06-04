import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { demoImages } from "../data/demoImages.js";
import { services } from "../data/services.js";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);
  const fallbackImage = demoImages.services[0];
  const image = service?.image || fallbackImage;

  if (!service) {
    return (
      <PageTransition>
        <section className="page-section">
          <ScrollReveal>
            <h1 className="text-4xl font-semibold text-white">Service Not Found</h1>
            <p className="mt-4 text-bone/72">We could not find the requested service. Please return to the services page to explore available tattoo and piercing options.</p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
              <ArrowLeft size={16} /> Back to Services
            </Link>
          </ScrollReveal>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{service.name} | Oracle Tattoo Ranchi</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://www.oracletattoo.in/services/${service.id}`} />
      </Helmet>

      <section className="relative overflow-hidden bg-ink/90 pb-16">
        <div className="absolute inset-0 opacity-30">
          <img src={image} alt={service.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-white sm:px-8 lg:px-10">
          <ScrollReveal>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/40">Service Detail</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{service.name}</h1>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition hover:border-white/40 hover:bg-white/10">
                <ArrowLeft size={16} /> Back to Services
              </Link>
            </div>
            <p className="max-w-3xl text-base leading-8 text-bone/80 sm:text-lg">
              {service.detailText || service.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:px-10">
          <ScrollReveal>
            <div className="grid gap-6 rounded-[2rem] border border-white/12 bg-coal p-8 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr] sm:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Service Summary</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">What this service includes</h2>
                </div>
                <p className="text-sm leading-7 text-bone/70">
                  Every tattoo and piercing service at Oracle Tattoo is designed for comfort, safety, and precision. You’ll get one-on-one artwork consultation, tailored placement guidance, and a clear healing plan.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {(service.detailPoints || []).map((point) => (
                  <li key={point} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-bone/80">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <motion.div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/10" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <img src={image} alt={service.name} className="h-[360px] w-full object-cover sm:h-[420px]" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white">Book Your {service.name}</h3>
              <p className="mt-4 text-sm leading-6 text-bone/70">Ready to bring this tattoo or piercing concept to life? Book a consultation to discuss your design, size, and placement with our artists.</p>
              <Link to="/booking" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-bone transition hover:border-white/30 hover:bg-white/10">
                Book Now <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
