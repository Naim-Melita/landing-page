import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#160f35] h-96 text-white">
      <div className="flex items-center ">
        <div>
          <p>Design better digital experiences with Mobbin.</p>
        </div>

        <div>
          <nav>
            <a href="">Inicio</a>
            <a href="">Portfolio</a>
            <a href="">Contacto</a>
          </nav>
        </div>
      </div>
      <a href="https://wa.me/5491123456789?text=Hola%20quiero%20más%20información"
   target="_blank"
   className="fixed bottom-4 right-4 bg-green-500 text-black px-4 py-2 rounded-full shadow-lg hover:bg-green transition">
  WhatsApp
</a>

    </footer>
  );
};

export default Footer;
