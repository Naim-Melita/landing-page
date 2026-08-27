import { motion } from "framer-motion";
import { Code2, Bot, ShieldCheck, Check, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "./motion";

const services = [
  {
    icon: Code2,
    tag: "Desarrollo",
    title: "Webs, plataformas y aplicaciones",
    description:
      "Desde una landing hasta una plataforma completa a medida. Diseñamos y construimos el producto digital que tu negocio necesita para funcionar mejor.",
    features: [
      "Landings y sitios institucionales",
      "Plataformas y aplicaciones a medida",
      "Paneles de administración y dashboards",
      "Integración con pagos, WhatsApp y APIs",
      "Deploy y SSL configurados",
      "Mantenimiento y soporte",
    ],
    price: "Desde USD 100",
    priceNote: "landing · infraestructura aparte",
    featured: true,
  },
  {
    icon: Bot,
    tag: "Automatización",
    title: "Automatización con IA",
    description:
      "Eliminamos el trabajo manual con bots, integraciones y flujos de IA que trabajan por vos las 24 horas.",
    features: [
      "Bots de WhatsApp y email",
      "Integraciones y APIs a medida",
      "Respuestas y clasificación con IA",
      "Scraping y recolección de datos",
      "Dashboards y reportes",
      "Generación de presupuestos",
    ],
    price: "A medida",
    priceNote: "según el flujo",
  },
  {
    icon: ShieldCheck,
    tag: "Seguridad",
    title: "Auditorías y protección",
    description:
      "Revisamos tu infraestructura de punta a punta y te entregamos un informe con riesgos concretos y sus soluciones.",
    features: [
      "Auditoría de seguridad completa",
      "Hardening de servidores",
      "DNS seguro con NextDNS",
      "MFA y gestión de contraseñas",
      "Estrategia de backups",
      "Informe con riesgos y prioridades",
    ],
    price: "Desde USD 300",
    priceNote: "por auditoría",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="relative bg-armelix-background px-4 py-20 sm:px-6 lg:py-28"
      variants={staggerContainer(0.16)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div variants={fadeUp()} className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-armelix-primary/90">
          // Nuestros servicios
        </p>
        <h2 className="text-3xl font-extrabold leading-tight text-armelix-text sm:text-4xl">
          Desarrollo a la cabeza, con todo lo que tu producto necesita
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-armelix-textSoft sm:text-lg">
          Construimos tu web, plataforma o aplicación. Y cuando hace falta,
          sumamos automatizaciones con IA y auditorías de seguridad para que tu
          producto no solo funcione, sino que escale y esté protegido.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3"
        variants={staggerContainer(0.14, 0.1)}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.tag}
              variants={fadeUp()}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                service.featured
                  ? "border-armelix-primary/50 bg-gradient-to-b from-armelix-surfaceAlt to-armelix-surface shadow-glow"
                  : "border-armelix-border/70 bg-armelix-surface"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-armelix-primary to-armelix-secondary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-armelix-background">
                  Más solicitado
                </span>
              )}

              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                    service.featured
                      ? "border-armelix-primary/50 bg-armelix-primary/15"
                      : "border-armelix-border bg-armelix-background"
                  }`}
                >
                  <Icon className="h-6 w-6 text-armelix-primary" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-armelix-textSoft">
                  {service.tag}
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-armelix-text">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-armelix-textSoft">
                {service.description}
              </p>

              <div className="mb-6 flex-grow space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-armelix-primary" />
                    <span className="text-sm text-armelix-text/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-armelix-border/60 pt-5">
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-armelix-text">
                    {service.price}
                  </span>
                  <span className="text-sm text-armelix-textSoft">
                    {service.priceNote}
                  </span>
                </div>
                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    service.featured
                      ? "bg-gradient-to-r from-armelix-primary to-armelix-secondary text-armelix-background hover:opacity-90"
                      : "border border-armelix-primary/50 bg-transparent text-armelix-text hover:bg-armelix-primary hover:text-armelix-background"
                  }`}
                >
                  Solicitar {service.tag.toLowerCase()}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
