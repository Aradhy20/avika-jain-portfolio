"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isProject, setIsProject] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or if reduced motion is requested
    if (reduceMotion || window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest(".project-card");
      if (projectCard) {
        setIsProject(true);
        setCursorText("VIEW");
        setIsPointer(false);
        return;
      }

      setIsProject(false);
      setCursorText("");

      const interactive = target.closest("a, button, input, textarea, select, .filter, [role='button']");
      if (interactive) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [mouseX, mouseY, visible, reduceMotion]);

  if (reduceMotion || !visible) return null;

  return (
    <motion.div
      className={`custom-cursor ${isProject ? "cursor-project" : isPointer ? "cursor-pointer" : ""}`}
      style={{
        x: cursorX,
        y: cursorY,
      }}
      aria-hidden="true"
    >
      {cursorText && <span className="cursor-label">{cursorText}</span>}
    </motion.div>
  );
}

