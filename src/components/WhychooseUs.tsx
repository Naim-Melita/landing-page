import { motion } from "framer-motion";
import bg from "../assets/banner-bg.jpg";
import rocket from "../assets/rocket.png";
import premium from "../assets/premiun.png";
import scalability from "../assets/escalabilidad.png";
import { fadeIn, fadeUp, staggerContainer, viewport } from "./motion";
import SectionCTA from "./SectionCTA";

const benefits = [
  {
    image: rocket,
    title: "Más visibilidad",
    description:
      "Hacemos que tu negocio sea más fácil de encontrar y entender para las personas que pueden comprarte.",
  },
  {
    image: premium,
    title: "Más consultas",
    description:
      "Preparamos tu web y tus campañas para que más personas te escriban por WhatsApp o te contacten con intención real.",
  },
  {
    image: scalability,
    title: "Menos trabajo manual",
    description:
      "Ordenamos el proceso de contacto y seguimiento para que puedas responder más rápido y enfocarte en vender.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      style={{ backgroundImage: `url(${bg})` }}
      id="why-choose-us"
      className="relative px-6 py-20 bg-armelix-surface bg-cover bg-center"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          variants={fadeUp()}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-armelix-primary"
        >
          Todo lo que necesitás para empezar a vender online
        </motion.h2>
        <motion.p
          variants={fadeUp(0.08)}
          className="mt-6 text-lg md:text-xl text-armelix-textSoft max-w-3xl mx-auto leading-relaxed"
        >
          No hacemos solo una página linda. Armamos una base completa para que
          tu negocio tenga presencia en internet, atraiga personas interesadas y
          convierta consultas en oportunidades reales.
        </motion.p>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3"
          variants={staggerContainer(0.14, 0.1)}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp(index * 0.04)}
              className="border border-armelix-border bg-armelix-surfaceAlt p-8 text-armelix-text shadow-lg backdrop-blur-md"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <motion.img
                src={benefit.image}
                className="mx-auto mb-5 w-[88%] md:w-full"
                alt=""
                variants={fadeIn(0.1)}
                whileHover={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="mb-2 text-xl font-semibold text-armelix-text">
                {benefit.title}
              </h3>
              <p className="text-armelix-textSoft">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp(0.14)}>
          <SectionCTA />
        </motion.div>
      </div>
    </motion.section>
  );
}
