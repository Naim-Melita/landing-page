import idealLogo from "../assets/company/ideal-logo.png";
import m4rsLogo from "../assets/company/m4rs-logo.png";
import openvinoLogo from "../assets/company/openvino-logo.png";

const organizations = [
  { name: "Ideal", logo: idealLogo },
  { name: "M4RS", logo: m4rsLogo },
  { name: "Openvino", logo: openvinoLogo, invertOnDark: true, sizeClass: "max-w-[140px]" },
];

export default function TrustedBy() {
  return (
    <section className="bg-armelix-background px-4 py-14 sm:px-6" aria-labelledby="trusted-by-title">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-armelix-primary">
            Confianza
          </p>
          <h2
            id="trusted-by-title"
            className="mt-3 text-2xl font-bold text-armelix-text sm:text-3xl"
          >
            Organizaciones que confiaron en nosotros
          </h2>
          <p className="mt-4 text-armelix-textSoft">
            Trabajamos con proyectos y equipos que necesitaban llevar su idea a
            un producto digital real: webs, plataformas y automatizaciones.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:grid-cols-3">
          {organizations.map((organization) => (
            <div key={organization.name} className="flex items-center justify-center px-4 py-2">
              <img
                src={organization.logo}
                alt={organization.name}
                className={`max-h-16 w-auto object-contain opacity-80 transition duration-300 hover:opacity-100 ${
                  organization.invertOnDark ? "invert" : ""
                } ${organization.sizeClass ?? ""}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
