import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Soluciones", href: "#portfolio" },
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 py-3 sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#020f2e]/45 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-white">
            ARMELIX
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-sm font-medium leading-normal text-white transition hover:text-armelix-primary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl md:hidden">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1538]/95 p-3 shadow-2xl backdrop-blur-md">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-secondary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
