import { motion } from "framer-motion";
import { ArrowRight, Code2, Bot, ShieldCheck } from "lucide-react";

type TerminalLine = {
  text: string;
  prompt?: string;
  ok?: boolean;
  warn?: boolean;
  muted?: boolean;
};

const terminalLines: TerminalLine[] = [
  { prompt: "$", text: "armelix deploy --app plataforma-negocio", muted: false },
  { text: "› Compilando frontend + API...", muted: true },
  { ok: true, text: "Build listo en 11.4s" },
  { ok: true, text: "Base de datos migrada" },
  { ok: true, text: "Integraciones (pagos, WhatsApp) OK" },
  { ok: true, text: "SSL y dominio configurados" },
  { prompt: "$", text: "app en producción → online ✦", muted: false },
];

const pillars = [
  { icon: Code2, label: "Desarrollo web" },
  { icon: Bot, label: "Automatización" },
  { icon: ShieldCheck, label: "Seguridad" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-armelix-background px-4 pb-16 pt-32 sm:px-6 md:pt-28"
    >
      {/* Fondos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,139,255,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(32,227,255,0.14),_transparent_42%)]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(58,75,92,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(58,75,92,0.12)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Columna texto */}
        <div className="flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-armelix-text sm:text-5xl lg:text-6xl"
          >
            Desarrollamos webs y aplicaciones que{" "}
            <span className="bg-gradient-to-r from-armelix-primary to-armelix-secondary bg-clip-text text-transparent">
              resuelven
            </span>{" "}
            problemas de tu negocio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-armelix-textSoft sm:text-lg"
          >
            No solo landings: creamos plataformas y aplicaciones a medida. Y
            cuando lo necesitás, sumamos automatizaciones con IA y auditorías de
            seguridad para que todo funcione y esté protegido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-armelix-primary to-armelix-secondary px-7 py-3.5 text-base font-semibold text-armelix-background shadow-[0_12px_30px_-8px_rgba(31,139,255,0.55)] transition"
            >
              Empecemos tu proyecto
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ y: -2 }}
              className="inline-flex items-center justify-center rounded-xl border border-armelix-border bg-armelix-surface/60 px-7 py-3.5 text-base font-semibold text-armelix-text transition hover:border-armelix-primary/60"
            >
              Ver servicios
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-armelix-textSoft">
                <Icon className="h-4 w-4 text-armelix-primary" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Columna terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-armelix-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-armelix-border bg-[#050d17]/95 shadow-glow backdrop-blur">
            <div className="flex items-center gap-2 border-b border-armelix-border/70 bg-armelix-surface/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-armelix-textSoft/70">
                armelix — deploy
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.18, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  {line.prompt && (
                    <span className="text-armelix-primary">{line.prompt}</span>
                  )}
                  {line.ok && <span className="text-[#27c93f]">✓</span>}
                  {line.warn && <span className="text-[#ffbd2e]">!</span>}
                  <span
                    className={
                      line.ok
                        ? "text-armelix-text"
                        : line.warn
                        ? "text-[#ffce7a]"
                        : line.muted
                        ? "text-armelix-textSoft/70"
                        : "text-armelix-text"
                    }
                  >
                    {line.text}
                  </span>
                </motion.div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="inline-block h-4 w-2 translate-y-0.5 bg-armelix-primary"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
