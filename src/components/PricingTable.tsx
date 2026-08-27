import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const plans = [
  {
    name: "Plan Web",
    price: "50",
    tagline: "Tu web siempre online y al día.",
    features: [
      "Hosting rápido y seguro",
      "Mantenimiento y actualizaciones",
      "Cambios y ajustes de contenido",
      "Certificado SSL gestionado",
      "Soporte por WhatsApp",
    ],
    cta: "Quiero el Plan Web",
    featured: true,
  },
  {
    name: "Plan Seguridad",
    price: "70",
    tagline: "Tu infraestructura monitoreada y protegida.",
    features: [
      "Monitoreo y alertas 24/7",
      "Backups automáticos",
      "DNS seguro (NextDNS)",
      "Actualizaciones de seguridad",
      "Soporte prioritario",
    ],
    cta: "Quiero el Plan Seguridad",
    featured: false,
  },
  {
    name: "Plan IA",
    price: "100",
    tagline: "Automatizaciones que trabajan por vos.",
    features: [
      "Automatizaciones con IA",
      "Responder WhatsApp y emails",
      "Clasificar documentos",
      "Generar presupuestos",
      "Dashboards e integraciones",
    ],
    cta: "Quiero el Plan IA",
    featured: false,
  },
];

export default function PricingTable() {
  return (
    <motion.section
      id="planes"
      className="relative bg-armelix-background px-4 py-20 sm:px-6 lg:py-28"
      variants={staggerContainer(0.16)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div variants={fadeUp()} className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-armelix-primary/90">
          // Planes mensuales
        </p>
        <h2 className="text-3xl font-extrabold leading-tight text-armelix-text sm:text-4xl">
          Tranquilidad todos los meses, no un trabajo suelto
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-armelix-textSoft sm:text-lg">
          Elegí un plan y olvidate del problema. Nos ocupamos de que tu web, tu
          seguridad y tus procesos sigan funcionando mientras vos te dedicás a tu
          negocio.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-3"
        variants={staggerContainer(0.14, 0.1)}
      >
        {plans.map((plan) => (
          <motion.article
            key={plan.name}
            variants={fadeUp()}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className={`relative flex flex-col rounded-2xl border p-7 ${
              plan.featured
                ? "border-armelix-primary/60 bg-gradient-to-b from-armelix-surfaceAlt to-armelix-surface shadow-glow md:-my-2 md:py-9"
                : "border-armelix-border/70 bg-armelix-surface"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-armelix-primary to-armelix-secondary px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-armelix-background">
                Recomendado
              </span>
            )}

            <h3 className="text-lg font-bold text-armelix-text">{plan.name}</h3>
            <p className="mt-1 text-sm text-armelix-textSoft">{plan.tagline}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm font-medium text-armelix-textSoft">USD</span>
              <span className="text-5xl font-black tracking-tight text-armelix-text">
                {plan.price}
              </span>
              <span className="text-sm text-armelix-textSoft">/mes</span>
            </div>

            <div className="my-7 h-px bg-armelix-border/60" />

            <div className="mb-8 flex-grow space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                      plan.featured ? "bg-armelix-primary/20" : "bg-armelix-primary/10"
                    }`}
                  >
                    <Check className="h-3 w-3 text-armelix-primary" />
                  </span>
                  <span className="text-sm text-armelix-text/90">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className={`mt-auto inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition ${
                plan.featured
                  ? "bg-gradient-to-r from-armelix-primary to-armelix-secondary text-armelix-background hover:opacity-90"
                  : "border border-armelix-primary/50 bg-transparent text-armelix-text hover:bg-armelix-primary hover:text-armelix-background"
              }`}
            >
              {plan.cta}
            </a>
          </motion.article>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp(0.1)}
        className="mx-auto mt-10 max-w-2xl text-center text-sm text-armelix-textSoft"
      >
        ¿Necesitás varios servicios? Combinamos planes en un pack a medida.{" "}
        <a href="#contact" className="font-semibold text-armelix-primary hover:underline">
          Escribinos y lo armamos juntos.
        </a>
      </motion.p>
    </motion.section>
  );
}
