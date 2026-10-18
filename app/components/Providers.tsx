"use client";
import { MotionConfig } from "motion/react";

// Respects the user's OS "reduce motion" setting for every animation.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
