import { heroEase } from "../home/hero-motion";

export const experienceEase = heroEase;

export const experienceViewport = { once: true, margin: "-80px" };

export const experienceHeaderStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const experienceFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: experienceEase },
  },
};

export const experienceSeparator = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.45, ease: experienceEase },
  },
};

export const experienceCardContainer = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: experienceEase,
      when: "beforeChildren",
    },
  },
};

export const experienceListStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const experienceItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: experienceEase },
  },
};

export const experienceItemInnerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

export const experienceLogoReveal = {
  hidden: { opacity: 0, scale: 0.82, x: -14 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.45, ease: experienceEase },
  },
};

export const experienceContentReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: experienceEase },
  },
};

export const experienceReducedFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};
