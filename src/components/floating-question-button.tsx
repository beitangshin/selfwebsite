"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const POSITIONS = [
  { top: "18vh", right: "4vw" },
  { top: "28vh", right: "7vw" },
  { top: "36vh", right: "5vw" },
  { top: "44vh", right: "8vw" },
  { top: "56vh", right: "4vw" },
  { top: "64vh", right: "6vw" },
];

export function FloatingQuestionButton() {
  const [position, setPosition] = useState(POSITIONS[0]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const nextPosition = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
      setPosition(nextPosition);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Link
      href="/what-more"
      aria-label="Open what more can I do page"
      className="floating-question-button"
      style={position}
      title="What more can I do?"
    >
      <span className="floating-question-mark">?</span>
    </Link>
  );
}
