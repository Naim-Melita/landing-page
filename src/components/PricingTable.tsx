
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const services = [
  {
    title: "Presencia online",
    headline: "Una web clara para mostrar lo que vendés",
    description:
      "Creamos una página para que tu negocio se vea profesional, explique tu oferta y lleve a las personas a contactarte.",
    highlight: "Tu negocio listo para internet",
    detail: "Página web, mensaje claro y contacto directo",
  },
  {
    title: "Campañas de marketing",
    headline: "Más personas conociendo tu negocio",
    description:
      "Creamos campañas para atraer personas interesadas en lo que ofrecés y llevarlas a tu web o WhatsApp.",
    highlight: "Más visitas, más consultas",
    detail: "Publicidad enfocada en conseguir potenciales clientes",
  },
  {
    title: "Contacto y seguimiento",
    headline: "Que no se pierda ninguna consulta",
    description:
      "Conectamos formularios, WhatsApp y respuestas para que puedas atender mejor a quienes preguntan por tu servicio.",
    highlight: "Más orden, más oportunidades",
    detail: "Un proceso simple para recibir y responder consultas",
  },
];

export default function PlanesDisenoWeb() {
  return (
    <motion.section
      id="services"
      className="bg-armelix-background font-[Work_Sans] flex flex-col items-center px-4 pt-12 pb-32 sm:px-6"
      variants={staggerContainer(0.16)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h1
        variants={fadeUp()}
        className="mx-auto mb-10 max-w-xl text-center text-3xl font-extrabold leading-tight text-armelix-primary sm:text-4xl"
      >
        Qué hacemos para que tu negocio venda online
      </motion.h1>

      <motion.div
        className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
        variants={staggerContainer(0.14, 0.1)}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp()}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="overflow-hidden rounded-3xl border border-armelix-border bg-armelix-surface shadow-md"
          >
            <div className="relative bg-armelix-surfaceAlt py-4 text-center text-lg font-bold text-armelix-text">
              {service.title}
            </div>
            <div className="flex flex-col items-center px-5 py-7 text-center">
              <div className="mb-3 text-2xl font-semibold text-armelix-text">
                {service.headline}
              </div>
              <p className="mb-5 text-armelix-textSoft">{service.description}</p>
              <div className="mb-2 text-lg font-semibold text-armelix-primary">
                {service.highlight}
              </div>
              <div className="text-armelix-textSoft">{service.detail}</div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
