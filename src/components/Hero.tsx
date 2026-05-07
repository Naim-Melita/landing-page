import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-armelix-background px-4 py-28 sm:min-h-[720px] sm:px-6 md:h-screen md:min-h-0 md:py-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,139,255,0.18),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(32,227,255,0.12),_transparent_38%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-armelix-secondary/10 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-[94vw] flex-col items-center gap-5 text-center sm:max-w-5xl md:gap-6 md:px-10 lg:max-w-6xl lg:gap-7">
        <motion.span
          className="inline-flex items-center rounded-full border border-armelix-border bg-armelix-surface px-4 py-2 text-sm font-medium tracking-[0.14em] text-armelix-textSoft uppercase shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Presencia online para negocios
        </motion.span>

        <motion.h1
          className="mt-2 max-w-6xl text-3xl font-black leading-[1.03] tracking-tight text-armelix-text sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Diseñamos páginas web y sistemas digitales para que tu negocio pueda
          crecer en internet.
        </motion.h1>

        <motion.p
          className="max-w-4xl text-base font-normal leading-relaxed text-armelix-textSoft sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Diseñamos páginas web rápidas, tiendas online fáciles de usar y
          campañas en redes sociales para que más personas te encuentren, te
          escriban y tu negocio pueda crecer con una presencia digital
          profesional.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-5 rounded-xl bg-armelix-secondary px-7 py-3.5 text-base font-semibold text-armelix-text shadow-[0_12px_30px_rgba(31,139,255,0.28)] transition"
        >
          Hablemos de tu negocio
        </motion.a>

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-armelix-background via-armelix-background/80 to-transparent" />

      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center md:hidden">
        <motion.a
          href="#services"
          className="flex items-center justify-center text-armelix-textSoft/80 transition hover:text-armelix-text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          aria-label="Deslizá hacia abajo"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-armelix-border bg-armelix-surface/80 backdrop-blur-sm"
          >
            <ChevronDownIcon className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 hidden justify-center md:bottom-10 md:flex">
        <motion.a
          href="#services"
          className="flex flex-col items-center gap-2 text-center text-armelix-textSoft/80 transition hover:text-armelix-text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
        
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-armelix-border bg-armelix-surface/80 backdrop-blur-sm"
          >
            <ChevronDownIcon className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
