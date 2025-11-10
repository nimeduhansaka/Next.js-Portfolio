"use client";
import React, { memo } from "react"

export const AuroraText = memo(({
  children,
  className = "",
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  speed = 1
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
      colors[0]
    })`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  }

  return (
    <span className={`relative tracking-tighter inline-block overflow-visible ${className}`}>
      <span className="sr-only">{children}</span>
      <span
        className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent overflow-visible"
        style={gradientStyle}
        aria-hidden="true">
        {children}
      </span>
    </span>
  );
})

AuroraText.displayName = "AuroraText"
