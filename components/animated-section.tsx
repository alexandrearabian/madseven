"use client";

import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";

type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "scaleUp"
  | "staggered";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  once?: boolean;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
  fadeInUp: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  fadeInLeft: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
  fadeInRight: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
  zoomIn: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
  scaleUp: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  staggered: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const getInitialState = (variant: AnimationVariant) => {
  switch (variant) {
    case "fadeIn":
      return { opacity: 0 };
    case "fadeInUp":
      return { opacity: 0, y: 40 };
    case "fadeInLeft":
      return { opacity: 0, x: -40 };
    case "fadeInRight":
      return { opacity: 0, x: 40 };
    case "zoomIn":
      return { opacity: 0, scale: 0.9 };
    case "scaleUp":
      return { opacity: 0, scale: 0.8 };
    case "staggered":
      return { opacity: 0, y: 20 };
    default:
      return { opacity: 0 };
  }
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fadeInUp",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={getInitialState(variant)}
      animate={isInView ? variants[variant] : "hidden"}
      transition={{
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className = "",
  delay = 0,
  variant = "fadeInUp",
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={getInitialState(variant)}
      animate={variants[variant]}
      transition={{
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
