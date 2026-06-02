import React from "react";
import { motion } from "framer-motion";
import { revealVariants, revealViewport } from "../hooks/useScrollAnimation.js";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        ...revealVariants,
        visible: {
          ...revealVariants.visible,
          transition: {
            ...revealVariants.visible.transition,
            delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </motion.div>
  );
}
