
export default function PlanesDisenoWeb() {
  return (
    <div className="bg-white font-[Work_Sans] flex flex-col items-center py-10">
      <h1 className="text-3xl font-extrabold mb-10">Planes de Diseño Web</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-6">
        {/* Plan Básico */}
        <div className="border rounded-2xl shadow-md overflow-hidden">
          <div className="bg-sky-600 text-white text-center py-3 font-bold text-lg relative">
            Paquete Básico
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold mb-2">Landing Simple</div>
            <p className="text-gray-500 mb-4">Plantilla, sin muchas integraciones</p>
            <div className="text-yellow-400 text-lg font-semibold mb-2">AHORRÁ UN 20%</div>
            <div className="text-gray-600 mb-2">1 landing</div>
            <div className="text-2xl font-bold">Desde USD 200 – 400</div>
          </div>
        </div>

        {/* Plan Intermedio */}
        <div className="border rounded-2xl shadow-md overflow-hidden">
          <div className="bg-purple-600 text-white text-center py-3 font-bold text-lg relative">
            Paquete Intermedio
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold mb-2">Diseño Custom Moderado</div>
            <p className="text-gray-500 mb-4">
              Formulario, integración básica, optimización móvil
            </p>
            <div className="text-yellow-400 text-lg font-semibold mb-2">AHORRÁ UN 25%</div>
            <div className="text-gray-600 mb-2">1 sitio optimizado</div>
            <div className="text-2xl font-bold">Desde USD 500 – 1000</div>
          </div>
        </div>

        {/* Plan Premium */}
        <div className="border rounded-2xl shadow-md overflow-hidden">
          <div className="bg-indigo-800 text-white text-center py-3 font-bold text-lg relative">
            Paquete Premium
          </div>
          <div className="flex flex-col items-center py-6 px-4 text-center">
            <div className="text-2xl font-semibold mb-2">Diseño Full Custom</div>
            <p className="text-gray-500 mb-4">
              Animaciones, backend/CRM, versión móvil optimizada, entrega rápida
            </p>
            <div className="text-yellow-400 text-lg font-semibold mb-2">AHORRÁ UN 30%</div>
            <div className="text-gray-600 mb-2">1 proyecto completo</div>
            <div className="text-2xl font-bold">Desde USD 1000 – 2000+</div>
          </div>
        </div>
      </div>
    </div>
  );
}