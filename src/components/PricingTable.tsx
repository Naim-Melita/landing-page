
export default function PlanesDisenoWeb() {
  return (
    <div id="services" className="bg-white font-[Work_Sans] flex flex-col items-center mt-10 pt-10 pb-32">
      <h1 className="text-3xl text-purpleText font-extrabold mb-10">Como hacemos crecer tu negocio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-6">
        <div className="border border-purple bg-[#1b1340]  shadow-md overflow-hidden">
          <div className="bg-purple text-white text-center py-3 font-bold text-lg relative">
            Paginas web
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold text-white mb-2">Presencia que transmite confianza</div>
            <p className="text-[#d1d5db] mb-4">Landing pages y sitios pensados para mostrar lo que haces y convertir visitas en consultas.</p>
            <div className="text-secondary text-lg font-semibold mb-2">Ideal para empezar fuerte</div>
            <div className="text-[#d1d5db] mb-2">Web clara, profesional y enfocada en resultados</div>
          </div>
        </div>

        <div className="border border-purple bg-[#1b1340]  shadow-md overflow-hidden">

          <div className="bg-purple text-white text-center py-3 font-bold text-lg relative">
            Publicidad digital
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold text-white mb-2">Campanas para atraer clientes</div>
            <p className="text-[#d1d5db] mb-4">
              Creamos anuncios y estrategias para que mas personas conozcan tu negocio y te escriban.
            </p>
            <div className="text-secondary text-lg font-semibold mb-2">Mas trafico, mas oportunidades</div>
            <div className="text-[#d1d5db] mb-2">Publicidad enfocada en consultas y ventas</div>
          </div>
        </div>

        <div className="border border-purple bg-[#1b1340]  shadow-md overflow-hidden">

          <div className="bg-purple text-white text-center py-3 font-bold text-lg relative">
            Automatizacion
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold text-white mb-2">Procesos mas simples y rapidos</div>
            <p className="text-[#d1d5db] mb-4">
              Organizamos formularios, respuestas y seguimientos para que no se te escape ningun cliente potencial.
            </p>
            <div className="text-secondary text-lg font-semibold mb-2">Menos caos, mas conversion</div>
            <div className="text-[#d1d5db] mb-2">Automatizaciones adaptadas a tu negocio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
