const faqs = [
  {
    question: "¿Qué hace Armelix?",
    answer:
      "Ayudamos a negocios a vender en internet con páginas web, campañas de marketing digital y automatización del contacto con potenciales clientes.",
  },
  {
    question: "¿Trabajan solo con empresas?",
    answer:
      "No. También trabajamos con fundaciones, startups, emprendimientos y proyectos que necesitan presencia online y una forma clara de generar consultas.",
  },
  {
    question: "¿Qué incluye el servicio?",
    answer:
      "Según el proyecto, podemos crear tu página web, preparar campañas de publicidad digital, conectar formularios o WhatsApp y ordenar el seguimiento de consultas.",
  },
  {
    question: "¿Pueden ayudarme si todavía no vendo en internet?",
    answer:
      "Sí. Justamente trabajamos para que negocios que hoy no tienen una presencia online clara puedan empezar a mostrar lo que venden, recibir consultas y convertirlas en oportunidades.",
  },
  {
    question: "¿Cómo me contacto con ustedes?",
    answer:
      "Podés escribirnos por WhatsApp, Instagram, Facebook o email desde la sección de contacto de la landing.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-armelix-background px-4 py-14 sm:px-6" id="faq" aria-labelledby="faq-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-armelix-primary">
            Preguntas frecuentes
          </p>
          <h2 id="faq-title" className="mt-3 text-2xl font-bold text-armelix-text sm:text-3xl">
            Todo lo que necesitás saber antes de empezar
          </h2>
          <p className="mt-4 text-armelix-textSoft">
            Respuestas claras sobre cómo trabajamos y cómo podemos ayudarte a conseguir
            más consultas y ventas en internet.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-armelix-border bg-armelix-surface px-5 py-4"
            >
              <summary className="cursor-pointer list-none text-left text-lg font-semibold text-armelix-text">
                {faq.question}
              </summary>
              <p className="mt-3 text-armelix-textSoft">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
