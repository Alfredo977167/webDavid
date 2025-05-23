// src/components/Servicios.js
export default function Servicios() {
  const servicios = [
    { titulo: 'Defensa Penal', descripcion: 'Representación en juicios penales.', icono: '⚖️' },
    { titulo: 'Derecho Civil', descripcion: 'Asesoramiento en conflictos civiles.', icono: '📜' },
    { titulo: 'Derecho Laboral', descripcion: 'Protección de derechos laborales.', icono: '🏢' },
  ];

  return (
    <div className="bg-full">
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <section className="max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold mb-6 text-white text-shadow">Nuestros Servicios</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="tarjeta grid grid-cols-1 p-6 rounded-lg shadow transition"
              >
                <span className="text-4xl">{servicio.icono}</span>
                <h3 className="text-2xl font-semibold mt-4">{servicio.titulo}</h3>
                <p className="mt-2">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
