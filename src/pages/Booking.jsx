import React from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { artists } from "../data/artists.js";
import { demoImages } from "../data/demoImages.js";
import { services } from "../data/services.js";

const sizes = ["Small", "Medium", "Large", "Full Sleeve", "Full Body"];

const initialForm = {
  name: "",
  phone: "+91 ",
  email: "",
  artist: "No Preference",
  service: services[0].name,
  placement: "",
  size: "Medium",
  date: "",
  reference: "",
  notes: ""
};

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service");
  const [form, setForm] = useState(() => ({
    ...initialForm,
    service: preselectedService && services.some((service) => service.name === preselectedService) ? preselectedService : initialForm.service
  }));
  const [submitted, setSubmitted] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    const notesBlock = [form.reference && `Reference: ${form.reference}`, form.notes && `Additional: ${form.notes}`].filter(Boolean).join("\n");

    // WhatsApp encoding logic: build a readable booking note, then encode it once for wa.me.
    const message = `🖊️ *New Booking Request — Oracle Tattoo*
👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
🎨 Service: ${form.service}
👨‍🎨 Preferred Artist: ${form.artist}
📍 Placement: ${form.placement}
📐 Size: ${form.size}
📅 Date: ${form.date}
📝 Notes: ${notesBlock || "No additional notes"}`;

    const url = `https://wa.me/917667059851?text=${encodeURIComponent(message)}`;

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setSubmitted(false);
    }, 950);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Book Tattoo Appointment in Ranchi | Oracle Tattoo</title>
        <meta name="description" content="Book a tattoo appointment in Ranchi at Oracle Tattoo for custom tattoos, religious tattoos, cover-ups, small tattoos, couple tattoos, piercings, and first tattoo consultation." />
        <meta name="keywords" content="book tattoo Ranchi, tattoo appointment Ranchi, tattoo in Ranchi, tattoo studio Ranchi, piercing appointment Ranchi, Oracle Tattoo booking" />
        <link rel="canonical" href="https://www.oracletattoo.in/booking" />
      </Helmet>

      <section className="relative flex min-h-[64svh] items-end overflow-hidden bg-ink pb-12 pt-32 sm:min-h-[70svh] sm:pb-16 sm:pt-40 md:pt-52">
        <img src={demoImages.consultation} alt="Tattoo appointment consultation at Oracle Tattoo" className="absolute inset-0 h-full w-full object-cover opacity-58" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.72)_48%,rgba(0,0,0,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <ScrollReveal className="section-shell relative z-10">
          <p className="page-hero-eyebrow">Booking</p>
          <h1 className="page-hero-title page-hero-title--narrow">Reserve Your Spot</h1>
          <p className="page-hero-lead">Fill the form below — we'll confirm within 24 hours</p>
        </ScrollReveal>
      </section>

      <section className="page-section">
        <ScrollReveal className="mb-8 grid gap-3 sm:mb-12 sm:gap-5 md:grid-cols-3">
          {["Share references clearly", "Come rested and hydrated", "Avoid alcohol before session"].map((item) => (
            <div key={item} className="border border-white/12 bg-coal p-4 text-sm font-semibold text-bone/70 sm:p-6">
              {item}
            </div>
          ))}
        </ScrollReveal>
        <ScrollReveal>
          <form onSubmit={handleSubmit} className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
            <label className="min-w-0">
              <span className="form-label">Full Name</span>
              <input className="form-field" type="text" value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
            </label>
            <label className="min-w-0">
              <span className="form-label">Phone Number</span>
              <input className="form-field" type="tel" inputMode="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} pattern="^\+91\s?[6-9]\d{9}$" title="Use Indian format: +91 9876543210" required />
            </label>
            <label className="min-w-0">
              <span className="form-label">Email Address</span>
              <input className="form-field" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} required />
            </label>
            <label className="min-w-0">
              <span className="form-label">Preferred Artist</span>
              <select className="form-field" value={form.artist} onChange={(event) => updateField("artist", event.target.value)}>
                {artists.map((artist) => (
                  <option key={artist.name}>{artist.name}</option>
                ))}
                <option>No Preference</option>
              </select>
            </label>
            <label className="min-w-0">
              <span className="form-label">Service Required</span>
              <select className="form-field" value={form.service} onChange={(event) => updateField("service", event.target.value)}>
                {services.map((service) => (
                  <option key={service.id}>{service.name}</option>
                ))}
              </select>
            </label>
            <label className="min-w-0">
              <span className="form-label">Placement on Body</span>
              <input className="form-field" type="text" value={form.placement} onChange={(event) => updateField("placement", event.target.value)} placeholder="Forearm, shoulder, back, ribs..." required />
            </label>
            <fieldset className="min-w-0 lg:col-span-2">
              <legend className="form-label">Approximate Size</legend>
              <div className="grid grid-cols-2 gap-2 xs:grid-cols-3 sm:gap-3 lg:grid-cols-5">
                {sizes.map((size) => (
                  <label key={size} className={`border p-3 text-center text-xs font-semibold leading-snug transition-colors sm:p-4 sm:text-sm ${form.size === size ? "border-bone bg-bone text-ink" : "border-white/14 text-bone/64"}`}>
                    <input className="sr-only" type="radio" name="size" value={size} checked={form.size === size} onChange={(event) => updateField("size", event.target.value)} />
                    {size}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="min-w-0">
              <span className="form-label">Preferred Date</span>
              <input className="form-field" type="date" min={minDate} value={form.date} onChange={(event) => updateField("date", event.target.value)} required />
            </label>
            <label className="min-w-0">
              <span className="form-label">Reference Description</span>
              <textarea className="form-field min-h-28 resize-y sm:min-h-36" value={form.reference} onChange={(event) => updateField("reference", event.target.value)} placeholder="Describe the reference, mood, style, or symbols you want." />
            </label>
            <label className="min-w-0 lg:col-span-2">
              <span className="form-label">Additional Notes</span>
              <textarea className="form-field min-h-32 resize-y sm:min-h-40" value={form.notes} onChange={(event) => updateField("notes", event.target.value)} placeholder="Tell us about skin sensitivity, old tattoos, deadlines, or anything important." />
            </label>
            <div className="min-w-0 lg:col-span-2">
              <button type="submit" className="magnetic-btn flex w-full items-center justify-center border border-white/32 px-5 py-5 text-xs font-bold uppercase tracking-[0.14em] text-bone sm:px-8 sm:py-6 sm:text-sm sm:tracking-[0.2em]">
                Send Booking Request
              </button>
              <p className="mt-4 text-xs leading-6 text-bone/54 sm:mt-5 sm:text-sm sm:leading-normal">* Booking is confirmed only after our team's response on WhatsApp</p>
            </div>
          </form>
        </ScrollReveal>
      </section>

      <AnimatePresence>
        {submitted && (
          <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 px-6 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="grid h-24 w-24 place-items-center rounded-full border border-white/30 sm:h-28 sm:w-28" initial={{ scale: 0.72, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}>
              <Check size={42} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
