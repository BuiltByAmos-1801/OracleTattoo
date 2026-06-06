import React from "react";
import { Helmet } from "react-helmet-async";
import { MessageCircle } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import jennyOracleTattoo from "../images/Jenny_OracleTattoo.png.JPG";

const bookingWhatsAppLink = "https://wa.me/917667059851?text=Hi%20Oracle%20Tattoo%2C%20I%20want%20to%20book%20an%20appointment%20with%20Jenny.";

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

      <section className="page-section pt-8 sm:pt-10 md:pt-12">
        <ScrollReveal className="mx-auto grid max-w-5xl overflow-hidden border border-white/12 bg-coal md:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[380px] overflow-hidden sm:min-h-[520px]">
            <img
              src={jennyOracleTattoo}
              alt="Jenny at Oracle Tattoo"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent md:bg-gradient-to-r md:from-transparent md:to-coal/70" />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-bone/48">Oracle Tattoo Artist</p>
            <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-7xl">Jenny</h2>
            <p className="mt-5 text-lg font-semibold text-bone">Custom Tattoo Artist</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-bone/64 sm:text-lg sm:leading-8">
              Jenny creates personal tattoo concepts with clean detailing, thoughtful placement, and a calm studio experience for first-timers and custom pieces.
            </p>
            <a
              href={bookingWhatsAppLink}
              className="mt-8 inline-flex min-h-14 w-fit items-center justify-center gap-3 rounded-lg border border-white/18 bg-bone px-7 text-base font-extrabold text-ink shadow-[0_18px_42px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} strokeWidth={2.4} />
              Book With Jenny
            </a>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
