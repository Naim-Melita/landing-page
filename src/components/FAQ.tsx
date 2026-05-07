import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motion";

const faqs = [
  {
    question:
      "¿Armelix es para mí si soy un negocio pequeño o estoy empezando?",
    answer:
      "Absolutamente. Nuestro foco no está en el tamaño actual de tu empresa, sino en tu ambición por crecer. Diseñamos infraestructuras digitales escalables, como nuestro servicio de Presencia Digital, para que empieces con una base profesional y sólida. Construimos el ecosistema exacto que necesitás hoy para sentar las bases del crecimiento de mañana.",
  },
  {
    question: "¿Qué necesito tener listo antes de contactar con  ustedes?",
    answer:
      "Solo necesitás tener claridad sobre tus objetivos de negocio. Nosotros nos encargamos del resto: análisis, estrategia, diseño y desarrollo.",
  },
  {
    question:
      "¿Trabajan sólo en Argentina o puedo contratarlos desde otra ciudad?",
    answer:
      "Trabajamos de forma remota con clientes de toda Argentina y otros países. La ubicación no es un impedimento para colaborar con vos.",
  },
  {
    question:
      "¿Cuánto tiempo tardan en ver mi web publicada o mis redes activas?",
    answer:
      "Huimos de las ‘webs hechas en 48 horas’ porque no generan resultados. Desarrollar una infraestructura digital estratégica y personalizada suele tomarnos entre 3 y 5 semanas, dependiendo de la rapidez con la que validemos los materiales. Preferimos invertir el tiempo necesario en la estrategia inicial para garantizar que tu web sea una máquina de captar clientes desde el primer día.",
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
