
const Header = () => {
  return (
    <header
      className="bg-transparent absolute inset-x-0 top-0 z-50 flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4 ">
        <div className="size-6 text-primary">
         {/* <img src="/src/assets/logo armelixpng.png" alt="" /> */}
        </div>
        <h2 className="text-white ttext-lg font-bold leading-tight tracking-[-0.015em]">
        ARMELIX
        </h2>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-white ttext-sm font-medium leading-normal"
            href="#home"
          >
            Inicio
          </a>
          <a
            className="text-white ttext-sm font-medium leading-normal"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            className="text-white ttext-sm font-medium leading-normal"
            href="#testimonials"
          >
            Testimonios
          </a>
          <a
            className="text-white ttext-sm font-medium leading-normal"
            href="#contact"
          >
            Contacto
          </a>
        </div>
       
       
      </div>

      <div className="md:hidden">
        <button className="p-2">
          <span className="material-symbols-outlined text-white">
            menu
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
