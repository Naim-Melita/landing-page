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
          <div className="bg-purple text-white backdrop-blur-md  p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src="/src/assets/rooketrtttt.png"
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-text-light mb-2">Velocidad</h3>
            <p className="text-text-dark/80">
              Sitios ultra rápidos optimizados para SEO y conversión.
            </p>
          </div>

          {/* Diseño Premium */}
          <div className="bg-purple text-white backdrop-blur-md  p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src="/src/assets/premiun.png"
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-text-light mb-2">Diseño Premium</h3>
            <p className="text-text-dark/80">
              Interfaces limpias y minimalistas que transmiten confianza.
            </p>
          </div>

          {/* Escalabilidad */}
          <div className="bg-purple text-white backdrop-blur-md p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src="/src/assets/escalabilidad.png"
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
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