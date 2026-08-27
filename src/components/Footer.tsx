import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-armelix-background px-8 py-12 text-armelix-textSoft"
      variants={staggerContainer(0.14)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div variants={fadeUp()}>
          <h2 className="text-2xl font-bold text-armelix-text tracking-wide">
            ARMELIX
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Estudio técnico boutique. Desarrollamos webs, plataformas y
            aplicaciones que resuelven problemas de negocio, con automatización
            con IA y seguridad cuando hace falta.
          </p>
        </motion.div>

        <motion.div variants={fadeUp(0.06)} className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-armelix-text">Navegación</h3>
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-armelix-primary transition">
              Inicio
            </a>
            <a href="#services" className="hover:text-armelix-primary transition">
              Servicios
            </a>
            <a href="#planes" className="hover:text-armelix-primary transition">
              Planes
            </a>
            <a href="#faq" className="hover:text-armelix-primary transition">
              FAQ
            </a>
            <a href="#contact" className="hover:text-armelix-primary transition">
              Contacto
            </a>
          </nav>
        </motion.div>

        <motion.div variants={fadeUp(0.12)}>
          <h3 className="text-lg font-semibold text-armelix-text">Contacto</h3>
          <p className="mt-1 text-sm">hello@armelix.dev</p>
          <motion.a
            href="https://wa.me/5491141775402?text=Hola%20quiero%20mas%20informacion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-armelix-primary text-armelix-background px-4 py-2 rounded-full shadow-lg hover:bg-armelix-accent transition"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            WhatsApp
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp(0.18)}
        className="mt-12 border-t border-armelix-border pt-6 text-center text-sm text-armelix-textSoft"
      >
        © {new Date().getFullYear()} Armelix. Todos los derechos reservados.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
