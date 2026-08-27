import { motion } from "framer-motion";
import { Layers, FileText, RefreshCw, MessageSquare } from "lucide-react";
import { fadeUp, fadeSide, staggerContainer, viewport } from "./motion";

const benefits = [
  {
    icon: Layers,
    title: "Producto, no solo una página",
    description:
      "Pensamos en el problema de negocio, no en 'entregar una web'. Construimos la plataforma o app que de verdad te resuelve algo.",
  },
  {
    icon: FileText,
    title: "Comunicación clara, sin tecnicismos",
    description:
      "Traducimos lo técnico a decisiones de negocio. Vas a entender qué estamos haciendo, por qué, y qué resultado esperar.",
  },
  {
    icon: RefreshCw,
    title: "Continuidad, no un trabajo suelto",
    description:
      "Con nuestros planes mensuales tu web, tus automatizaciones y tu seguridad quedan mantenidas y con soporte todo el tiempo.",
  },
  {
    icon: MessageSquare,
    title: "Respuesta directa",
    description:
      "Hablás con quien resuelve, no con un formulario. Soporte por WhatsApp y tiempos de respuesta que se sienten.",
  },
];

const stats = [
  { value: "3", label: "servicios que se potencian entre sí" },
  { value: "24/7", label: "monitoreo en planes recurrentes" },
  { value: "USD 50", label: "punto de entrada por mes" },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      id="why-choose-us"
      className="relative overflow-hidden bg-armelix-surface px-4 py-20 sm:px-6 lg:py-28"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(31,139,255,0.14),_transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div variants={fadeSide("left")}>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-armelix-primary/90">
              // Por qué Armelix
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-armelix-text sm:text-4xl lg:text-[2.75rem]">
              Desarrollamos, y además{" "}
              <span className="text-armelix-primary">resolvemos el resto</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-armelix-textSoft sm:text-lg">
              Construimos tu web o aplicación con criterio de negocio. Y como
              también manejamos automatización y seguridad, tu producto queda
              completo sin sumar más proveedores.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-armelix-border bg-armelix-background/60 p-4"
                >
                  <div className="font-mono text-2xl font-bold text-armelix-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-armelix-textSoft">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            variants={staggerContainer(0.12, 0.1)}
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp()}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="rounded-2xl border border-armelix-border bg-armelix-background/50 p-6"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-armelix-primary/40 bg-armelix-primary/10">
                    <Icon className="h-5 w-5 text-armelix-primary" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-armelix-text">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-armelix-textSoft">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
