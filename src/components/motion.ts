import type { Variants } from "framer-motion";

export const viewport = {
  once: true,
  amount: 0.2,
};

export const staggerContainer = (staggerChildren = 0.14, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeUp = (delay = 0, distance = 28): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeSide = (
  direction: "left" | "right" = "left",
  delay = 0,
  distance = 32
): Variants => ({
  hidden: { opacity: 0, x: direction === "left" ? -distance : distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});
