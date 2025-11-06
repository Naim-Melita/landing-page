export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative px-6 py-20 bg-white0"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-purpleText">
          ¿Por qué elegirnos?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-text-dark/80 max-w-3xl mx-auto leading-relaxed">
          Diseñamos páginas web modernas, rápidas y escalables que elevan tu marca.
          Combinamos estética minimalista con tecnología de vanguardia para que tu
          negocio destaque y convierta más.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Velocidad */}
          <div className="bg-purple text-white backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mx-auto mb-4 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-text-light mb-2">Velocidad</h3>
            <p className="text-text-dark/80">
              Sitios ultra rápidos optimizados para SEO y conversión.
            </p>
          </div>

          {/* Diseño Premium */}
          <div className="bg-purple text-white backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mx-auto mb-4 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3l2.25 6.75h7.5L15 13.5l2.25 6.75L12 16.5l-5.25 3.75L9 13.5 2.25 9.75h7.5L12 3z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-text-light mb-2">Diseño Premium</h3>
            <p className="text-text-dark/80">
              Interfaces limpias y minimalistas que transmiten confianza.
            </p>
          </div>

          {/* Escalabilidad */}
          <div className="bg-purple text-white backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mx-auto mb-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 17l6-6 4 4 8-8"
              />
            </svg>
            <h3 className="text-xl font-semibold text-text-light mb-2">Escalabilidad</h3>
            <p className="text-text-dark/80">
              Una base técnica modular lista para crecer con tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}