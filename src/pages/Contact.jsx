import React from "react";
import { Helmet } from "react-helmet-async";
import { Instagram, MapPin, Phone } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";

export default function Contact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact Tattoo Studio in Ranchi | Oracle Tattoo Tilta</title>
        <meta name="description" content="Contact Oracle Tattoo, a tattoo studio in Ranchi near Ratu Road and Tilta. Call or WhatsApp +91 76670 59851 for tattoo appointments, piercings, and consultations." />
        <meta name="keywords" content="tattoo studio Ranchi contact, tattoo shop Ranchi, Oracle Tattoo Ranchi, tattoo in Tilta Ranchi, tattoo near Ratu Road, piercing Ranchi contact" />
        <link rel="canonical" href="https://www.oracletattoo.in/contact" />
      </Helmet>

      <section className="page-hero">
        <ScrollReveal>
          <p className="page-hero-eyebrow">Contact</p>
          <h1 className="page-hero-title page-hero-title--narrow">Oracle Tattoo</h1>
        </ScrollReveal>
      </section>

      <section className="page-section grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal className="space-y-8 sm:space-y-10">
          <div className="border-t border-white/14 pt-5 sm:pt-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-bone/48">Address</h2>
            <p className="mt-4 text-lg leading-8 text-bone sm:mt-5 sm:text-2xl sm:leading-9">First floor, NH 75, Ratu Rd, beside Devi Mandap, opp. Sharda Automobiles TVS, Tilta, Ranchi, Jharkhand 835222</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            <a href="tel:+917667059851" className="group border border-white/14 p-5 transition-colors hover:border-white/46 sm:p-6">
              <Phone size={22} />
              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-bone/50 sm:mt-8">Phone</span>
              <span className="mt-2 block text-lg sm:text-xl">+91 76670 59851</span>
            </a>
            <a href="https://wa.me/917667059851" className="group border border-white/14 p-5 transition-colors hover:border-white/46 sm:p-6">
              <MapPin size={22} />
              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-bone/50 sm:mt-8">WhatsApp</span>
              <span className="mt-2 block text-lg sm:text-xl">Direct Message</span>
            </a>
          </div>
          <div className="space-y-3 text-sm leading-7 text-bone/64 sm:space-y-4 sm:text-base">
            <p><span className="text-bone">Email:</span> info@oracletattoo.in</p>
            <p><span className="text-bone">Working Hours:</span> Mon–Sat: 11:00 AM – 8:00 PM | Sunday: By Appointment</p>
            <a href="https://maps.google.com/?q=Oracle%20Tattoo%20Tilta%20Ranchi%20Jharkhand" className="inline-block text-bone">View Location on Map</a>
          </div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/oracletattooindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-12 w-12 place-items-center border border-white/16 transition-colors hover:border-white"><Instagram size={18} /></a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="min-h-[320px] overflow-hidden border border-white/12 bg-coal sm:min-h-[420px] md:min-h-[520px]">
          <iframe
            title="Oracle Tattoo location map"
            src="https://maps.google.com/maps?q=Oracle%20Tattoo%2C%20Tilta%2C%20Ranchi%2C%20Jharkhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[320px] w-full grayscale transition duration-700 hover:grayscale-0 sm:min-h-[420px] md:min-h-[520px]"
            loading="lazy"
          />
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
