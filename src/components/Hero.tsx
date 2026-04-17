import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import Typing from "./Typing";
import bg from "../assets/hero3.png";
import smoke from "../assets/smoke.png";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lockedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const nextSection = document.getElementById("services");

    if (!section || !nextSection) return;

    const handleWheel = (event: WheelEvent) => {
      if (lockedRef.current || event.deltaY <= 8) return;

      const rect = section.getBoundingClientRect();
      const heroMostlyVisible =
        rect.top <= 0 && rect.bottom > window.innerHeight * 0.55;

      if (!heroMostlyVisible) return;

      event.preventDefault();
      lockedRef.current = true;
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });

      window.setTimeout(() => {
        lockedRef.current = false;
      }, 900);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#020F2E] px-4 py-28 sm:px-6 md:h-screen md:py-0"
    >
      {/* Fondo dinámico */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0077B6] via-[#00A6C7] to-[#0096C7]">
       */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex w-full max-w-[92vw] flex-col items-center gap-4 text-center sm:max-w-3xl md:gap-6 md:px-12">
        <Typing
          hold={3000}
          words={[
            "Vendé en internet",
            "Más consultas",
            "Marketing digital",
          ]}
          className="text-armelix-primary text-2xl sm:text-3xl md:text-4xl leading-tight justify-center"
        />

        <motion.h1
          className="max-w-full text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Te ayudamos a empezar a vender en internet
        </motion.h1>

        <motion.p
          className="max-w-full text-base font-light leading-relaxed text-white/90 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Armamos tu presencia online, creamos campañas de marketing y
          conectamos todo para que más personas conozcan tu negocio, te escriban
          y se conviertan en clientes.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative px-6 py-3 mt-4 font-semibold text-armelix-text bg-armelix-secondary  rounded-xl shadow-md overflow-hidden group"
        >
          <span className="relative z-10">Contactanos</span>
        </motion.a>
      </div>

      {/* Sombra inferior suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#160f35] via-[#160f35]/80 to-transparent pointer-events-none"></div>

      <div className="absolute bottom-16 left-0 right-0 z-10 flex justify-center">
        <motion.a
          href="#services"
          className="flex flex-col items-center gap-2 text-center text-armelix-text/65 transition hover:text-armelix-text/90"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.28em]">
            Deslizá hacia abajo
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <ChevronDownIcon className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>

      <div className="absolute -bottom-2 left-0 right-0 ">
        <img src={smoke} alt="" />
      </div>
    </section>
  );
}
