import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { blogPosts } from "../data/blogPosts.js";

export default function Blog() {
  return (
    <PageTransition>
      <Helmet>
        <title>Tattoo Tips & Guides | Oracle Tattoo Blog</title>
        <meta name="description" content="Read expert tattoo guides, aftercare tips, style breakdowns and more from Oracle Tattoo — Ranchi's premier tattoo studio." />
      </Helmet>

      <section className="page-hero">
        <ScrollReveal>
          <p className="page-hero-eyebrow">Blog</p>
          <h1 className="page-hero-title page-hero-title--wide">Tattoo Tips & Guides</h1>
        </ScrollReveal>
      </section>

      <section className="page-section">
        <motion.div
          className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              className="group border border-white/12 bg-coal transition-colors hover:border-white/42"
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.64 } } }}
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-white/10">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-bone/46 sm:gap-3 sm:text-[0.65rem]">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-5 font-serif text-2xl leading-tight sm:mt-7 sm:text-3xl md:text-4xl">{post.title}</h2>
                <p className="mt-4 text-sm leading-6 text-bone/58 sm:mt-5">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}
