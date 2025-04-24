export const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
  },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  inView: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
  },
};
export const slideInLeft = {
  hidden: { opacity: 0, x: -200 },
  inView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 200 },
  inView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

export const myAnimation = {
  hover: { borderColor: "transparent", scale: 1.1 },
  tap: { borderColor: "transparent", scale: 0.95 },
  focus: { borderColor: "white", scale: 1.1, transition: { duration: 0.15 } },
  inView: { opacity: 1, x: 0, transition: { delay: 1 } },
};
