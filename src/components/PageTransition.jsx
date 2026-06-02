import React from "react";
import { motion } from "framer-motion";

// Route animation config kept centralized so every page moves with the same quiet rhythm.
const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.28, ease: [0.76, 0, 0.24, 1] }
  }
};

export default function PageTransition({ children }) {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.main>
  );
}
