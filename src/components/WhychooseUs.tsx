import bg from "../assets/banner-bg.jpg";
import rocket from "../assets/rocket.png";
import premium from "../assets/premiun.png";
import scalability from "../assets/escalabilidad.png";

export default function WhyChooseUs() {
  return (
    <section
        style={{ backgroundImage: `url(${bg})` }}
      id="why-choose-us"
      className="relative px-6 py-20 bg-armelix-surface bg-cover bg-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-armelix-primary">
          Todo lo que necesitás para empezar a vender online
        </h2>
        <p className="mt-6 text-lg md:text-xl text-armelix-textSoft max-w-3xl mx-auto leading-relaxed">
          No hacemos solo una página linda. Armamos una base completa para que
          tu negocio tenga presencia en internet, atraiga personas interesadas y
          convierta consultas en oportunidades reales.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Velocidad */}
          <div className="bg-armelix-surfaceAlt text-armelix-text border border-armelix-border backdrop-blur-md p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src={rocket}
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-armelix-text mb-2">Más visibilidad</h3>
            <p className="text-armelix-textSoft">
              Hacemos que tu negocio sea más fácil de encontrar y entender para
              las personas que pueden comprarte.
            </p>
          </div>

          {/* Diseño Premium */}
          <div className="bg-armelix-surfaceAlt text-armelix-text border border-armelix-border backdrop-blur-md p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src={premium}
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-armelix-text mb-2">Más consultas</h3>
            <p className="text-armelix-textSoft">
              Preparamos tu web y tus campañas para que más personas te escriban
              por WhatsApp o te contacten con intención real.
            </p>
          </div>

          {/* Escalabilidad */}
          <div className="bg-armelix-surfaceAlt text-armelix-text border border-armelix-border backdrop-blur-md p-8 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src={scalability}
              className="w-3/4 mx-auto text-pink-500"
              alt=""
            />
            <h3 className="text-xl font-semibold text-armelix-text mb-2">Menos trabajo manual</h3>
            <p className="text-armelix-textSoft">
              Ordenamos el proceso de contacto y seguimiento para que puedas
              responder más rápido y enfocarte en vender.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
