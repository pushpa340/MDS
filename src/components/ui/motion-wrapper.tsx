
"use client";

import { motion, type Variants } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function MotionWrapper({
  children,
  delay = 0,
  className,
  variants = defaultVariants,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ delay, duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
