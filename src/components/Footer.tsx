const Footer = () => {
  return (
    <footer className="bg-armelix-background text-armelix-textSoft py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-armelix-text tracking-wide">
            Armelix Web Solutions
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Ayudamos a negocios a empezar a vender en internet con presencia
            online, campañas de marketing y seguimiento de consultas.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-armelix-text">Navegacion</h3>
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-armelix-primary transition">
              Inicio
            </a>
            <a href="#services" className="hover:text-armelix-primary transition">
              Servicios
            </a>
            <a href="#contact" className="hover:text-armelix-primary transition">
              Contacto
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-armelix-text">Contacto</h3>
          <p className="mt-1 text-sm">armelixempresa@gmail.com</p>
      <a
        href="https://wa.me/5491141775402?text=Hola%20quiero%20mas%20informacion"
        target="_blank"
        rel="noopener noreferrer"
            className="inline-block mt-4 bg-armelix-primary text-armelix-background px-4 py-2 rounded-full shadow-lg hover:bg-armelix-accent transition"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-armelix-border pt-6 text-center text-sm text-armelix-textSoft">
        © {new Date().getFullYear()} Armelix. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
