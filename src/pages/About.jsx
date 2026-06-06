import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Award, BadgeCheck, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import ImageHero from "../components/ImageHero.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import studioImage from "../images/alibaba-tattoos-studio-2-1024x685.webp";
import jennyImage from "../images/jenny.JPG";

const aboutHeroImage = "https://images.pexels.com/photos/35426258/pexels-photo-35426258.jpeg?auto=compress&cs=tinysrgb&w=1800";

const stats = [
  { value: "1,250+", label: "Satisfied Customers" },
  { value: "15th", label: "Years of Experience" },
  { value: "750+", label: "Tattoos & Artworks" },
  { value: "45+", label: "Creative Concepts" }
];

const skillStats = [
  { label: "Experience", value: "95%" },
  { label: "Tattoo", value: "97%" },
  { label: "Piercing", value: "93%" }
];

const qualityPoints = [
  {
    icon: Award,
    title: "Impeccable Tattoo Quality",
    text: "We focus on precision, creativity, and high-quality tattoo artistry."
  },
  {
    icon: ShieldCheck,
    title: "Best & Hygienic Equipment",
    text: "All tools are sterilized and we follow strict hygiene standards."
  },
  {
    icon: BadgeCheck,
    title: "Experienced Artists",
    text: "Our skilled artists bring years of experience and artistic expertise."
  }
];

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Oracle Tattoo | Tattoo Studio in Ranchi</title>
        <meta name="description" content="Learn about Oracle Tattoo, a professional tattoo studio in Ranchi focused on custom tattoos, hygiene, experienced artists, and personal tattoo guidance." />
        <meta name="keywords" content="about Oracle Tattoo, tattoo studio Ranchi, tattoo artist Ranchi, Jenny tattoo artist, custom tattoo Ranchi" />
        <link rel="canonical" href="https://www.oracletattoo.in/about" />
      </Helmet>

      <ImageHero
        image={aboutHeroImage}
        alt="Tattoo artist working in a professional studio"
        kicker="Home / About Us"
        eyebrow="About Oracle Tattoo"
        title="Professional tattoo work with a personal story."
        lead="A Ranchi tattoo studio built around custom design, calm consultation, safe hygiene, and artwork you can wear with pride."
      />

      <section className="border-b border-white/10 bg-ink py-10 sm:py-14 md:py-16">
        <div className="section-shell grid gap-px overflow-hidden border border-white/12 bg-white/10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label} className="bg-coal px-5 py-6 sm:px-6 sm:py-8">
              <p className="text-3xl font-black text-bone sm:text-4xl">{stat.value}</p>
              <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone/52">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Why Choose Us</p>
            <h2 className="section-display mt-4">Always provide satisfactory work.</h2>
            <div className="mt-8 grid gap-5">
              {skillStats.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.18em] text-bone/64">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="mt-3 h-1 bg-white/10">
                    <div className="h-full bg-bone" style={{ width: item.value }} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="grid gap-5 text-base leading-8 text-bone/66 sm:text-lg sm:leading-9">
            <p>
              At Oracle Tattoo, we believe every tattoo tells a story. Our skilled artists are passionate about turning your ideas into stunning body art with precision, creativity, and attention to detail.
            </p>
            <p>
              We follow strict hygiene standards and use high-quality equipment to ensure a safe and comfortable tattoo experience. Whether you want a small minimalist tattoo or a large custom design, our artists work closely with you to create something truly unique.
            </p>
            <p>
              At Oracle Tattoo, customer satisfaction is our priority. From consultation to aftercare guidance, we make sure every client leaves with a tattoo they are proud to wear for life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-coal py-12 sm:py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">About Oracle Tattoo</p>
            <h2 className="section-display mt-4">We are a professional tattoo studio.</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-bone/64 sm:text-lg sm:leading-9">
              At Oracle Tattoo, we believe every tattoo is a unique piece of art that represents your personality and story. Our talented tattoo artists specialize in creating custom designs, fine line tattoos, and detailed artwork tailored to your vision.
            </p>
            <div className="mt-8 grid gap-4">
              {qualityPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="grid gap-4 border border-white/12 bg-ink p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-white/16 text-bone">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bone">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-bone/60">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="overflow-hidden border border-white/12 bg-ink">
            <img src={studioImage} alt="Inside Oracle Tattoo studio" className="aspect-[4/3] w-full object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <ScrollReveal className="overflow-hidden border border-white/12 bg-coal">
            <img src={jennyImage} alt="Jenny, Oracle Tattoo artist" className="aspect-[4/5] w-full object-cover object-center" />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">The Artist</p>
            <h2 className="section-display mt-4">Jenny</h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-bone/64 sm:text-lg sm:leading-9">
              <p>
                Hi, my name is Jenny and my journey as a tattoo artist is not just about art. It is about passion, struggle, and believing in a dream.
              </p>
              <p>
                The road to becoming an artist was not easy. There were moments of doubt, challenges, and times when the future felt uncertain.
              </p>
              <p>
                Today, every tattoo I create carries that same belief: patience, care, and a personal connection with the person wearing it.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/artists" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-bone px-5 text-sm font-extrabold text-ink transition hover:bg-mist">
                More About Jenny <ArrowRight size={16} />
              </Link>
              <Link to="/booking" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/18 px-5 text-sm font-bold text-bone/82 transition hover:border-white/46 hover:text-bone">
                Book Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-coal py-12 sm:py-16 md:py-20">
        <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Studio Location</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-bone sm:text-4xl">
              First floor NH-75, Ratu Rd, beside Devi Mandap Tilta, Opp. Sharda Automobiles TVS
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <a href="https://maps.google.com/?q=Oracle%20Tattoo%20Tilta%20Ranchi" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-bone px-5 text-sm font-extrabold text-ink transition hover:bg-mist">
              <MapPin size={16} />
              Locate Studio
            </a>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
