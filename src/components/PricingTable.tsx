
export default function PlanesDisenoWeb() {
  return (
    <div id="services" className="bg-armelix-background font-[Work_Sans] flex flex-col items-center px-4 pt-12 pb-32 sm:px-6">
      <h1 className="mx-auto mb-10 max-w-xl text-center text-3xl font-extrabold leading-tight text-armelix-primary sm:text-4xl">
        Qué hacemos para que tu negocio venda online
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <div className="border border-armelix-border bg-armelix-surface shadow-md overflow-hidden">
          <div className="bg-armelix-surfaceAlt text-armelix-text text-center py-3 font-bold text-lg relative">
            Presencia online
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold text-armelix-text mb-2">Una web clara para mostrar lo que vendés</div>
            <p className="text-armelix-textSoft mb-4">Creamos una página para que tu negocio se vea profesional, explique tu oferta y lleve a las personas a contactarte.</p>
            <div className="text-armelix-primary text-lg font-semibold mb-2">Tu negocio listo para internet</div>
            <div className="text-armelix-textSoft mb-2">Página web, mensaje claro y contacto directo</div>
          </div>
        </div>

        <div className="border border-armelix-border bg-armelix-surface shadow-md overflow-hidden">

          <div className="bg-armelix-surfaceAlt text-armelix-text text-center py-3 font-bold text-lg relative">
            Campañas de marketing
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold text-armelix-text mb-2">Más personas conociendo tu negocio</div>
            <p className="text-armelix-textSoft mb-4">
              Creamos campañas para atraer personas interesadas en lo que ofrecés y llevarlas a tu web o WhatsApp.
            </p>
            <div className="text-armelix-primary text-lg font-semibold mb-2">Más visitas, más consultas</div>
            <div className="text-armelix-textSoft mb-2">Publicidad enfocada en conseguir potenciales clientes</div>
          </div>
        </div>

        <div className="border border-armelix-border bg-armelix-surface shadow-md overflow-hidden">

          <div className="bg-armelix-surfaceAlt text-armelix-text text-center py-3 font-bold text-lg relative">
            Contacto y seguimiento
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold text-armelix-text mb-2">Que no se pierda ninguna consulta</div>
            <p className="text-armelix-textSoft mb-4">
              Conectamos formularios, WhatsApp y respuestas para que puedas atender mejor a quienes preguntan por tu servicio.
            </p>
            <div className="text-armelix-primary text-lg font-semibold mb-2">Más orden, más oportunidades</div>
            <div className="text-armelix-textSoft mb-2">Un proceso simple para recibir y responder consultas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
