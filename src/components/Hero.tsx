import { motion } from "framer-motion";
import Typing from "./Typing";
import bg from "../assets/hero2.png";
import smoke from "../assets/smoke.png";

export default function Hero() {
  return (
    <section
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
          <span className="relative z-10">Quiero vender online</span>
          <span className="absolute inset-0 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
            Hablemos
          </span>
        </motion.a>
      </div>

      {/* Sombra inferior suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#160f35] via-[#160f35]/80 to-transparent pointer-events-none"></div>

      <div className="absolute -bottom-2 left-0 right-0 ">
        <img src={smoke} alt="" />
      </div>
    </section>
  );
}
