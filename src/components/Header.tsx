import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer, viewport } from "./motion";

const navItems = [
  { label: "Servicios", href: "#services" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50 px-4 py-3 sm:px-10"
      variants={fadeIn()}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#020f2e]/45 px-4 py-3 backdrop-blur-md">
        <motion.a href="#home" className="flex items-center" whileHover={{ y: -1 }}>
          <span className="text-xl font-bold leading-tight tracking-[-0.015em] text-white">
            ARMELIX
          </span>
        </motion.a>

        <motion.nav
          className="hidden items-center gap-8 md:flex"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              variants={fadeUp()}
              className="text-sm font-medium leading-normal text-armelix-textSoft transition hover:text-armelix-primary"
              href={item.href}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            variants={fadeUp()}
            href="#contact"
            whileHover={{ y: -2 }}
            className="rounded-lg border border-armelix-primary/50 bg-armelix-primary/10 px-4 py-2 text-sm font-semibold text-armelix-primary transition hover:bg-armelix-primary hover:text-armelix-background"
          >
            Empecemos tu proyecto
          </motion.a>
        </motion.nav>

        <div className="md:hidden">
          <motion.button
            type="button"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
            whileTap={{ scale: 0.96 }}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeUp(0, 16)}
            viewport={viewport}
          >
            <motion.div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1538]/95 p-3 shadow-2xl backdrop-blur-md">
              <motion.nav
                className="flex flex-col"
                variants={staggerContainer(0.08)}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  variants={fadeUp()}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-secondary"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
