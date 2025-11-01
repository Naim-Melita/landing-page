// Typing.tsx
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type TypingProps = {
  words: string[];
  speed?: number;       // segundos entre letras
  hold?: number;        // ms que queda la palabra completa antes de cambiar
  className?: string;
  cursorClassName?: string;
};

export default function Typing({
  words,
  speed = 0.04,
  hold = 1200,
  className = "text-3xl md:text-5xl font-black",
  cursorClassName = "w-[2px] bg-white"
}: TypingProps) {
  const [index, setIndex] = useState(0);

  // Avanza a la siguiente palabra cada 'hold' ms después de montarse la palabra
  useEffect(() => {
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % words.length),
      // sumamos un poco el tiempo total de tipeo aprox (nLetras * speed * 1000)
      hold + Math.max(0, words[index]?.length ?? 0) * speed * 1000
    );
    return () => clearTimeout(t);
  }, [index, words, hold, speed]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: speed,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25 },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: "0.25em" },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } },
  };

  const word = words[index] ?? "";

  return (
    <div className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={`inline-flex ${className}`}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {word.split("").map((ch, i) => (
            <motion.span key={i} variants={letter} className="inline-block">
              {ch === " " ? <span>&nbsp;</span> : ch}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>

     
    </div>
  );
}