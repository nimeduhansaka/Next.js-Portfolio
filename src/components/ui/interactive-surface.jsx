"use client";

import { useEffect, useRef } from "react";

// Update CSS variables once per frame without rendering React on pointer moves.
export function usePointerSurface(ref, tilt = false) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.setProperty("--surface-active", "0");
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--magnet-x", "0px");
      element.style.setProperty("--magnet-y", "0px");
    };
    const move = (event) => {
      if (!query.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        element.style.setProperty("--pointer-x", `${x}px`);
        element.style.setProperty("--pointer-y", `${y}px`);
        element.style.setProperty("--surface-active", "1");
        element.style.setProperty("--magnet-x", `${(x / bounds.width - 0.5) * 8}px`);
        element.style.setProperty("--magnet-y", `${(y / bounds.height - 0.5) * 8}px`);
        if (tilt) {
          element.style.setProperty("--tilt-x", `${(0.5 - y / bounds.height) * 4}deg`);
          element.style.setProperty("--tilt-y", `${(x / bounds.width - 0.5) * 4}deg`);
        }
      });
    };
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", reset, { passive: true });
    query.addEventListener("change", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", reset);
      query.removeEventListener("change", reset);
    };
  }, [ref, tilt]);
}

export function InteractiveSurface({ children, className = "", tilt = false, ...props }) {
  const ref = useRef(null);
  usePointerSurface(ref, tilt);
  return (
    <div ref={ref} className={`interactive-surface ${tilt ? "surface-tilt" : ""} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function MagneticLink({ children, className = "", ...props }) {
  const ref = useRef(null);
  usePointerSurface(ref);
  return (
    <a ref={ref} className={`magnetic-link ${className}`} {...props}>
      <span className="magnetic-label">{children}</span>
    </a>
  );
}
