import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const faqs = [
  {
    question: "¿Solo hacen páginas web o también aplicaciones?",
    answer:
      "Hacemos las dos cosas. Desde una landing o un sitio institucional hasta plataformas y aplicaciones a medida: paneles de administración, sistemas de gestión, dashboards y productos digitales pensados para resolver un problema concreto de tu negocio, no solo para 'estar online'.",
  },
  {
    question: "¿También hacen automatizaciones y auditorías de seguridad?",
    answer:
      "Sí. Además del desarrollo, ofrecemos automatizaciones con IA (bots, integraciones, respuestas automáticas) y auditorías de seguridad (revisión de servidores, DNS, MFA, backups). Podés contratarlos por separado o sumarlos a tu proyecto para que todo quede protegido y funcionando solo.",
  },
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende del alcance. Una landing arranca desde USD 100 y una plataforma o aplicación a medida se cotiza según su complejidad. La infraestructura (hosting, dominio) se cobra aparte, y una auditoría de seguridad va desde USD 300. Te pasamos un presupuesto claro y cerrado antes de empezar, sin sorpresas.",
  },
  {
    question: "¿Qué diferencia hay entre un servicio y un plan mensual?",
    answer:
      "Los servicios (una web, una automatización, una auditoría) son trabajos puntuales con un precio cerrado. Los planes mensuales son continuidad: mantenemos, actualizamos y damos soporte todos los meses para que tu producto siga funcionando sin que tengas que ocuparte.",
  },
  {
    question: "¿Trabajan de forma remota?",
    answer:
      "Sí. Trabajamos de forma remota con clientes de toda Argentina y otros países. Todo el desarrollo, las automatizaciones y la seguridad se gestionan a distancia sin que la ubicación sea un impedimento.",
  },
];

export default function FAQ() {
  return (
    <motion.section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-armelix-background px-4 py-16 sm:px-6 lg:py-24"
      variants={staggerContainer(0.16)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
        <motion.div
          variants={fadeUp()}
          className="pl-2 sm:pl-4 lg:pl-8 lg:pr-10"
        >
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-armelix-primary">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="mt-6 max-w-[12ch] text-4xl font-bold leading-[1.1] text-armelix-text sm:text-5xl"
          >
            ¿Tienes dudas?
            <br />
            Aquí te lo
            <br />
            aclaramos
            <br />
            rápido
          </h2>
        </motion.div>

        <motion.div variants={fadeUp(0.08)} className="space-y-4">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={faq.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-xl border border-armelix-border bg-armelix-surface"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left transition hover:bg-armelix-surfaceAlt/60">
                    <span className="pr-4 text-base font-medium text-armelix-text">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-armelix-secondary text-armelix-text transition-colors duration-200 group-data-[state=open]:bg-armelix-primary group-data-[state=open]:text-armelix-background">
                      <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                      <Minus className="hidden h-5 w-5 group-data-[state=open]:block" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="faq-accordion-content overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.2s_ease-out]">
                  <div className="px-6 pb-6 text-sm leading-relaxed text-armelix-textSoft">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </motion.section>
  );
}
