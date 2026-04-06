const Footer = () => {
  return (
    <footer className="bg-[#0f0c29] text-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Armelix Web Solutions
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Ayudamos a tu negocio a conseguir más clientes con paginas web,
            publicidad y automatizacion.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-white">Navegacion</h3>
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-white transition">
              Inicio
            </a>
            <a href="#services" className="hover:text-white transition">
              Servicios
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contacto
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contacto</h3>
          <p className="mt-1 text-sm">armelixempresa@gmail.com</p>
          <a
            href="https://wa.me/5491123456789?text=Hola%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Armelix. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
