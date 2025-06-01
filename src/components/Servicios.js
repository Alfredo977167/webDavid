// src/components/Servicios.js
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
export default function Servicios() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Introducción: MEDIAR CONTIGO */}
      <div className="bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow-md border-l-4 border-[#8C4D4D]">
        <h2
          className={`titulo-servicio text-3xl font-bold text-[#0B3D2E] mb-4 ${cinzel.className}`}
        >
          MEDIAR CONTIGO
        </h2>
        <p className="text-base sm:text-lg text-white">
          La mediación es una herramienta eficaz para resolver conflictos en ámbitos familiares,
          civiles, laborales y mercantiles. Evita litigios prolongados, reduce la carga judicial y
          ofrece soluciones adaptadas a cada situación. En <strong>RUICRES Abogados</strong>{' '}
          contamos con profesionales colaboradores que te acompañarán en todo el proceso,
          ofreciéndote una solución adecuada y cercana.
        </p>
      </div>

      {/* Bloques de servicios */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Derecho Civil */}
        <div className="bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow">
          <h3
            className={`titulo-servicio text-2xl font-semibold text-[#7B3F3F] mb-3 ${cinzel.className}`}
          >
            Derecho Civil
          </h3>
          <p className="mb-2 text-white">
            Te ayudamos en aspectos clave de tu vida civil: contratos, herencias, reclamaciones y
            trámites familiares. Siempre buscando tu bienestar y seguridad jurídica.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
            <li>Separaciones, divorcios y modificaciones judiciales</li>
            <li>Testamentos y herencias</li>
            <li>Reclamaciones de cantidad y daños</li>
            <li>Contratos y gestiones notariales</li>
          </ul>
        </div>

        {/* Derecho Laboral */}
        <div className="bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow">
          <h3
            className={`titulo-servicio text-2xl font-semibold text-[#7B3F3F] mb-3 ${cinzel.className}`}
          >
            Derecho Laboral
          </h3>
          <p className="mb-2 text-white">
            Defendemos tus derechos como trabajador o empleador. Asesoramiento completo en
            conflictos laborales, despidos, accidentes y Seguridad Social.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
            <li>Despidos e incumplimientos contractuales</li>
            <li>Reclamaciones salariales</li>
            <li>Asesoramiento a trabajadores y empresarios</li>
            <li>Accidentes laborales</li>
          </ul>
        </div>

        {/* Derecho Tributario y Fiscal */}
        <div className="bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow">
          <h3
            className={`titulo-servicio text-2xl font-semibold text-[#7B3F3F] mb-3 ${cinzel.className}`}
          >
            Derecho Tributario y Fiscal
          </h3>
          <p className="mb-2 text-white">
            Asesoramiento integral para particulares, autónomos y empresas. Nos encargamos de que
            cumplas tus obligaciones fiscales con eficiencia.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
            <li>Contabilidad y presentación de impuestos</li>
            <li>Inspecciones y sanciones tributarias</li>
            <li>Altas de empresa y autónomos</li>
            <li>Constitución de asociaciones y fundaciones</li>
          </ul>
        </div>

        {/* Derecho de Extranjería */}
        <div className="bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow">
          <h3
            className={`titulo-servicio text-2xl font-semibold text-[#7B3F3F] mb-3 ${cinzel.className}`}
          >
            Derecho de Extranjería
          </h3>
          <p className="mb-2 text-white">
            Facilitamos tu proceso de integración. Te asesoramos en todos los trámites legales como
            residencia, arraigo o nacionalidad.
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
            <li>Permisos de residencia y reagrupación</li>
            <li>Obtención de nacionalidad</li>
            <li>Arraigo social y laboral</li>
            <li>Asesoramiento integral a ciudadanos extranjeros</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
