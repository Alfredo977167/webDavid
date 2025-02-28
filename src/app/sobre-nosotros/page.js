export default function SobreNosotros() {
  return (
    <div className="bg-full" style={{ backgroundImage: "url('/3.jpg')" }}>
      <div className="min-h-screen flex items-center justify-center text-white">
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-shadow text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tarjeta para Juan Pérez */}
        <div className="flex flex-col items-center">
          <img
            src="/juan.jpg"
            alt="Juan Pérez"
            className="rounded-full w-48 h-48 object-cover mb-4"
          />
          <h2 className="text-shadow text-2xl font-semibold">Juan Pérez</h2>
          <p className="text-shadow text-600 text-center font-semibold">
            Abogado penal con amplia experiencia en casos complejos.
          </p>
        </div>
        {/* Tarjeta para María Gómez */}
        <div className="flex flex-col items-center">
          <img
            src="/maria.jpg"
            alt="María Gómez"
            className="rounded-full w-48 h-48 object-cover mb-4"
          />
          <h2 className="text-shadow text-2xl font-semibold">María Gómez</h2>
          <p className="text-shadow text-600 text-center font-semibold">
            Abogada especialista en derecho civil y mercantil, con años de experiencia.
          </p>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
}
