import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ImageHero from "../components/ImageHero.jsx";
import PageTransition from "../components/PageTransition.jsx";
import { blogPosts } from "../data/blogPosts.js";
import { demoImages } from "../data/demoImages.js";

export default function Blog() {
  return (
    <PageTransition>
      <Helmet>
        <title>Tattoo Tips Ranchi | Oracle Tattoo Blog</title>
        <meta name="description" content="Read tattoo tips in Ranchi from Oracle Tattoo: first tattoo guidance, tattoo aftercare, style guides, religious tattoo ideas, piercing care, and band tattoo inspiration." />
        <meta name="keywords" content="tattoo tips Ranchi, first tattoo Ranchi, tattoo aftercare Ranchi, tattoo ideas Ranchi, religious tattoo ideas, piercing care guide, band tattoo inspiration, Oracle Tattoo blog" />
        <link rel="canonical" href="https://www.oracletattoo.in/blog" />
      </Helmet>

      <ImageHero
        image={demoImages.blogHero}
        alt="Tattoo tips and aftercare guide"
        eyebrow="Blog"
        title="Tattoo Tips & Guides"
        lead="Read studio guidance for first tattoos, aftercare, style choices, religious tattoo ideas, and piercing care."
        imageClassName="grayscale"
      />

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
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
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
