import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, MessageCircle, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import jennyOracleTattoo from "../images/Jenny_OracleTattoo.png.JPG";
import jennyPortrait from "../images/jenny.JPG";

const bookingWhatsAppLink = "https://wa.me/917667059851?text=Hi%20Oracle%20Tattoo%2C%20I%20want%20to%20book%20a%20consultation%20with%20Jenny.";

const focusAreas = [
  "Custom concept tattoos",
  "Fine line and small tattoos",
  "Meaningful symbolic work",
  "Placement and sizing guidance",
  "First-time tattoo support",
  "Clean detailing and aftercare"
];

const values = [
  {
    icon: Sparkles,
    title: "Personal Design",
    text: "Jenny listens to the story behind your idea first, then shapes the tattoo so it feels personal instead of copied."
  },
  {
    icon: Wand2,
    title: "Calm Process",
    text: "Every consultation covers size, placement, pain expectations, and references before the final tattoo session begins."
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Setup",
    text: "The session is handled with sterile equipment, clean preparation, and clear aftercare guidance for healthy healing."
  }
];

const journeyNotes = [
  {
    label: "Beginning",
    text: "Jenny started with a strong belief that tattooing is more than drawing on skin. It is a way to carry memory, faith, identity, and emotion."
  },
  {
    label: "Practice",
    text: "Her growth came through patience, repeated practice, and learning how each design changes when it meets a real body and real skin."
  },
  {
    label: "Today",
    text: "At Oracle Tattoo, Jenny focuses on thoughtful custom work where the client feels heard, comfortable, and proud of the final result."
  }
];

export default function JennyDetail() {
  return (
    <PageTransition>
      <Helmet>
        <title>Jenny Tattoo Artist in Ranchi | Oracle Tattoo</title>
        <meta name="description" content="Know more about Jenny, tattoo artist at Oracle Tattoo Ranchi. Explore her journey, tattoo style, consultation process, hygiene approach, and custom tattoo work." />
        <meta name="keywords" content="Jenny tattoo artist Ranchi, female tattoo artist Ranchi, Oracle Tattoo Jenny, custom tattoo artist Ranchi, best tattoo artist Ranchi" />
        <link rel="canonical" href="https://www.oracletattoo.in/artists/jenny" />
      </Helmet>

      <section className="relative overflow-hidden bg-ink pt-28 sm:pt-36 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/[0.06] to-transparent" />
        <div className="section-shell relative grid gap-8 pb-12 sm:gap-10 sm:pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal className="overflow-hidden border border-white/12 bg-coal">
            <img
              src={jennyOracleTattoo}
              alt="Jenny tattooing at Oracle Tattoo Ranchi"
              className="aspect-[4/5] w-full object-cover object-center opacity-92 sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="pb-2 lg:pb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bone/54 transition hover:text-bone">
              <ArrowLeft size={16} />
              Back Home
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.26em] text-bone/46">The Artist</p>
            <h1 className="serif-display mt-4 text-[clamp(4rem,12vw,11rem)] leading-[0.82]">Jenny</h1>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-bone sm:text-2xl sm:leading-10">
              A custom tattoo artist at Oracle Tattoo, Ranchi, known for patient consultation, clean detailing, and meaningful tattoos built around each client's story.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={bookingWhatsAppLink}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-bone px-7 text-base font-extrabold text-ink transition hover:bg-mist"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} strokeWidth={2.4} />
                Book With Jenny
              </a>
              <Link
                to="/booking"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/18 px-7 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Consultation Form
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-coal py-12 sm:py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Her Story</p>
            <h2 className="section-display mt-4 max-w-3xl">Passion, patience, and belief.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="grid gap-5 text-base leading-7 text-bone/66 sm:text-lg sm:leading-8">
            <p>
              Jenny's journey as a tattoo artist is built on passion, struggle, and the decision to keep believing in her dream even when the path was uncertain.
            </p>
            <p>
              She treats tattooing as a personal exchange. Before the machine starts, she studies the idea, the placement, the client's comfort, and the emotion behind the design.
            </p>
            <p>
              Today, every tattoo she creates carries the same intention: careful work, honest guidance, and a connection with the person who will wear it for life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 0.06} className="border border-white/12 bg-coal p-6 sm:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-white/16 text-bone">
                  <Icon size={20} />
                </div>
                <h3 className="mt-8 font-serif text-3xl leading-tight">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-bone/60 sm:text-base sm:leading-8">{item.text}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-coal py-12 sm:py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Tattoo Focus</p>
            <h2 className="section-display mt-4">What Jenny can help you with.</h2>
            <div className="mt-8 grid gap-px overflow-hidden border border-white/12 bg-white/10 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div key={area} className="bg-ink px-5 py-4 text-sm font-bold text-bone/74 sm:px-6 sm:py-5">
                  {area}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="overflow-hidden border border-white/12">
            <img
              src={jennyPortrait}
              alt="Jenny from Oracle Tattoo"
              className="aspect-[4/5] w-full object-cover object-center opacity-90"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <ScrollReveal className="mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-bone/46">Journey Notes</p>
          <h2 className="section-display mt-4">How the work became her voice.</h2>
        </ScrollReveal>
        <div className="divide-y divide-white/12 border-y border-white/12">
          {journeyNotes.map((note, index) => (
            <ScrollReveal key={note.label} delay={index * 0.05} className="grid gap-4 py-6 sm:py-8 md:grid-cols-[0.32fr_1fr] md:gap-8">
              <h3 className="text-xs font-black uppercase tracking-[0.24em] text-bone/48">{note.label}</h3>
              <p className="max-w-4xl text-base leading-7 text-bone/66 sm:text-lg sm:leading-8">{note.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12 sm:pb-20 md:px-9 md:pb-28">
        <ScrollReveal>
          <Link to="/booking" className="animated-border group block px-5 py-12 text-center sm:px-6 sm:py-16 md:px-14 md:py-24">
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-bone/54 sm:text-xs sm:tracking-[0.28em]">Jenny / Consultation / Oracle Tattoo</span>
            <span className="serif-display mt-4 block text-[clamp(2.4rem,9vw,11rem)] leading-none sm:mt-6">Start Your Tattoo Story</span>
          </Link>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
