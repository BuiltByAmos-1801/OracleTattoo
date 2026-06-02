export const revealViewport = {
  once: true,
  amount: 0.24,
  margin: "0px 0px -80px 0px"
};

export const revealVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] }
  }
};
