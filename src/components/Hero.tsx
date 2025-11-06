import { motion } from "framer-motion";
import Typing from "./Typing";
import bg from "../assets/bg.webp";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#160f35]"
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
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl flex flex-col items-center gap-6">
        <Typing
          hold={3000}
          words={[
            "Aumentamos tus ventas",
            "Mejoramos tu experiencia",
            "Hacemos crecer tu negocio",
          ]}
          className="text-[#d8ff00] text-4xl "
        />

        <motion.h1
          className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Diseñamos tu web con tecnología, no con plantillas
        </motion.h1>

        <motion.p
          className="text-white/90 text-lg md:text-xl font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Sin WordPress, sin Tiendanube. Creamos sitios{" "}
          <strong className="font-bold">personalizados</strong> con diseños de
          alto rendimiento.
        </motion.p>

        <motion.button
         initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative px-6 py-3 mt-4 font-semibold text-black bg-secondary  rounded-xl shadow-md overflow-hidden group"
        >
          <span className="relative z-10">Contactanos</span>
          <span className="absolute inset-0 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
            Contactanos
          </span>
        </motion.button>
      </div>

      {/* Sombra inferior suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#160f35] via-[#160f35]/80 to-transparent pointer-events-none"></div>
    </section>
  );
}
