import bg from "../assets/banner-bg.jpg";
import rocket from "../assets/rocket.png";
import premium from "../assets/premiun.png";
import scalability from "../assets/escalabilidad.png";

export default function WhyChooseUs() {
  return (
    <section
        style={{ backgroundImage: `url(${bg})` }}
      id="why-choose-us"
      className="relative px-6 py-20 bg-white0"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-secondary">
          Un sistema pensado para vender más
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
          No hacemos solo una pagina linda. Armamos una presencia digital clara,
          campañas para atraer personas interesadas y automatizaciones para que
          no pierdas oportunidades.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Velocidad */}
          <div className="bg-purple text-white backdrop-blur-md  p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src={rocket}
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-text-light mb-2">Mas visibilidad</h3>
            <p className="text-text-dark/80">
              Llevamos tu negocio a internet con una web clara y campañas que
              te ayudan a llegar a mas personas.
            </p>
          </div>

          {/* Diseño Premium */}
          <div className="bg-purple text-white backdrop-blur-md  p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src={premium}
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-text-light mb-2">Mas consultas</h3>
            <p className="text-text-dark/80">
              Convertimos visitas en mensajes, formularios y contactos reales
              para que tengas mas oportunidades de venta.
            </p>
          </div>

          {/* Escalabilidad */}
          <div className="bg-purple text-white backdrop-blur-md p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src={scalability}
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-text-light mb-2">Menos trabajo manual</h3>
            <p className="text-text-dark/80">
              Automatizamos respuestas, seguimiento y procesos para que puedas
              enfocarte en vender y hacer crecer tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
