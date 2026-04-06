import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 1.75.46 3.46 1.33 4.96L2 22l5.19-1.36A9.92 9.92 0 0 0 12 21.96c5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96Zm0 18.14c-1.5 0-2.98-.4-4.27-1.15l-.31-.18-3.08.81.82-3-.2-.31A8.11 8.11 0 0 1 3.84 12c0-4.5 3.66-8.16 8.16-8.16S20.16 7.5 20.16 12 16.5 20.18 12 20.18Zm4.48-6.1c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.2-.73-.65-1.22-1.44-1.37-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.12.17 1.76 2.69 4.27 3.77.6.26 1.07.41 1.44.53.61.19 1.17.16 1.61.1.49-.07 1.48-.6 1.69-1.17.21-.58.21-1.08.15-1.17-.06-.1-.23-.15-.48-.27Z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.15 5.15 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66Z" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.5h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.98h-1.51c-1.49 0-1.95.93-1.95 1.88v2.25h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 7.5 8.25 6 8.25-6" />
    </svg>
  );
}

const contactOptions = [
  {
    name: "WhatsApp",
    description: "La forma mas rapida de hablar con nosotros y pedir info.",
    href: "https://wa.me/5491123456789?text=Hola%20quiero%20mas%20informacion",
    cta: "Escribir por WhatsApp",
    accent: "from-[#25D366] to-[#128C7E]",
    icon: WhatsAppIcon,
  },
  {
    name: "Instagram",
    description: "Mira contenido, casos y escribinos directo por mensaje.",
    href: "https://www.instagram.com/armelix.dev/",
    cta: "Ir a Instagram",
    accent: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    description: "Contactanos desde nuestra pagina y conoce mas del servicio.",
    href: "https://www.facebook.com/profile.php?id=61573234855836",
    cta: "Ir a Facebook",
    accent: "from-[#1877F2] to-[#0A58CA]",
    icon: FacebookIcon,
  },
  {
    name: "Email",
    description: "Ideal si queres enviarnos detalles de tu negocio o proyecto.",
    href: "mailto:armelixempresa@gmail.com",
    cta: "Enviar email",
    accent: "from-[#00C2FF] to-[#3A7BFF]",
    icon: MailIcon,
  },
];

export default function Contact() {
  return (
    <section className="px-4 py-12 md:py-24 bg-[#160f35]" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl text-white md:text-5xl font-bold leading-tight tracking-[-0.015em] pb-4">
            Hablemos por donde te quede mas comodo
          </h2>
          <p className="text-white/80 text-lg mb-12">
            Elegi el canal que prefieras para escribirnos. Respondemos consultas
            sobre paginas web, publicidad digital y automatizacion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.name}
                href={option.href}
                target={option.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={option.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#160f35]/95" />

                <div className="relative z-10 flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                      Contacto
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{option.name}</h3>
                    <p className="mt-3 text-white/75 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center text-sm font-semibold text-secondary">
                    {option.cta}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
