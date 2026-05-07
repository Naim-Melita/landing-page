import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const cards = [
  {
    badge: "Presencia Digital",
    badgeStyle: "bg-armelix-text text-armelix-background",
    title: "Presencia Digital",
    subtitle:
      "Ideal para negocios que quieren lanzar servicios, captar consultas y acompañar campañas publicitarias.",
    features: [
      "Dominio y hosting de alto rendimiento",
      "Hosting rápido y seguro",
      "Diseño UX/UI pensado para convertir",
      "Formulario de contacto y botones de WhatsApp",
      "Optimización mobile y carga rápida",
      "Integración directa con WhatsApp y CRM",
    ],
    description:
      "Una solución pensada para negocios que necesitan una página clara, rápida y enfocada en generar consultas. No se trata solo de verse bien online, sino de tener una presencia digital que acompañe tu comunicación y facilite el contacto.",
    buttonText: "Quiero mi presencia digital",
    buttonStyle:
      "border-2 border-armelix-primary/70 bg-transparent text-armelix-text hover:bg-armelix-primary hover:text-armelix-background",
  },
  {
    badge: "Ecosistema Corporativo",
    badgeStyle: "bg-armelix-text text-armelix-background",
    title: "Ecosistema Corporativo",
    subtitle:
      "Ideal para marcas consolidadas, PYMES y consultoras que necesitan digitalizar mejor su presencia y su autoridad.",
    features: [
      "Registro y configuración de dominio",
      "Hosting rápido y seguro",
      "Arquitectura web completa de hasta 7 páginas y blog",
      "Formularios de contacto y chat bot",
      "Páginas personalizadas y estructura de blog",
      "Integraciones con herramientas externas",
      "Auditoría y SEO on-page inicial",
      "Textos legales automatizados",
      "Formularios avanzados y captación de base de datos",
    ],
    description:
      "Una solución pensada para negocios que necesitan una presencia digital más sólida, con mejor estructura, más contenido y una base preparada para comunicar autoridad, posicionarse mejor y generar oportunidades más consistentes.",
    buttonText: "Quiero mi ecosistema web",
    buttonStyle:
      "border-2 border-armelix-primary/70 bg-transparent text-armelix-text hover:bg-armelix-primary hover:text-armelix-background",
  },
  {
    badge: "E-commerce Avanzado",
    badgeStyle: "bg-gradient-to-r from-armelix-secondary to-armelix-primary text-armelix-text",
    title: "E-commerce Avanzado",
    subtitle:
      "Ideal para negocios físicos que dan el salto al digital y marcas que necesitan escalar sus ventas online.",
    features: [
      "Registro y configuración de dominio",
      "Hosting dedicado rápido y seguro",
      "Maquetación y diseño premium",
      "Revisiones y reuniones estratégicas",
      "Formularios de contacto y chat bot",
      "Configuración integral de pasarelas de pago y logística",
      "Integraciones con herramientas de pago y envío",
      "Fichas de producto optimizadas para conversión",
      "Creación y configuración de productos en tienda",
      "SEO inicial e integración con herramientas de búsqueda",
      "Formación 1 a 1 para autogestión de la tienda",
    ],
    description:
      "Una tienda online pensada para vender desde el primer día, con una estructura sólida, experiencia cuidada y todo lo necesario para escalar con más orden. Dejamos tu ecommerce listo para operar, crecer y darte más control sobre el canal digital.",
    buttonText: "Quiero mi tienda online",
    buttonStyle:
      "border border-transparent bg-gradient-to-r from-armelix-secondary to-armelix-primary text-armelix-text hover:from-[#1878df] hover:to-[#17cfe7]",
  },
];

export default function PlanesDisenoWeb() {
  return (
    <motion.section
      id="services"
      className="bg-armelix-background px-4 pb-28 pt-16 font-[Work_Sans] sm:px-6"
      variants={staggerContainer(0.16)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div
        variants={fadeUp()}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-armelix-primary/80">
          Nuestros servicios
        </p>
        <h2 className="text-3xl font-extrabold leading-tight text-armelix-text sm:text-4xl">
          Soluciones digitales para vender mejor en internet
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-armelix-textSoft sm:text-lg">
          Diseñamos páginas web, tiendas online y estructuras digitales para
          que tu negocio tenga una presencia más profesional, comunique mejor
          lo que ofrece y convierta más visitas en consultas.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3"
        variants={staggerContainer(0.14, 0.1)}
      >
        {cards.map((card, index) => (
          <motion.article
            key={index}
            variants={fadeUp()}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="flex min-h-[760px] flex-col rounded-2xl border border-armelix-border/70 bg-armelix-surface p-6 shadow-[0_20px_45px_rgba(3,7,12,0.34)]"
          >
            <div
              className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1.5 text-xs font-medium ${card.badgeStyle}`}
            >
              {card.badge}
            </div>

            <h3 className="mb-2 text-[20px] font-semibold text-armelix-text">
              {card.title}
            </h3>

            <p className="mb-6 text-sm text-armelix-textSoft">{card.subtitle}</p>

            <div className="mb-6 flex-grow space-y-3">
              {card.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-armelix-primary" />
                  <span className="text-sm text-armelix-text">{feature}</span>
                </div>
              ))}
            </div>

            <p className="mb-6 text-xs leading-relaxed text-armelix-textSoft/75">
              {card.description}
            </p>

            <button
              type="button"
              className={`w-full rounded-lg px-4 py-3 text-sm font-medium transition-all ${card.buttonStyle}`}
            >
              {card.buttonText}
            </button>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
