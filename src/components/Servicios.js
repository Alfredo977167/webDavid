// src/components/Servicios.js
import { Cinzel } from 'next/font/google';
import { useState } from 'react';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
export default function Servicios() {
  const [volteado, setVolteado] = useState(false);

  const [mostrarEjemplos, setMostrarEjemplos] = useState(false);
  const [mostrarEjemplosCivil, setMostrarEjemplosCivil] = useState(false);
  const [mostrarEjemplosLaboral, setMostrarEjemplosLaboral] = useState(false);
  const [mostrarEjemplosFiscal, setMostrarEjemplosFiscal] = useState(false);
  const [mostrarEjemplosExtr, setMostrarEjemplosExtr] = useState(false);
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Introducción: MEDIAR CONTIGO */}
      <div className="bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow-md border-l-4 border-[#8C4D4D]">
        <h2 className={`titulo-servicio text-3xl mb-4 ${cinzel.className}`}>MEDIAR CONTIGO</h2>
        <p className={`${cinzel.className} text-base sm:text-lg`}>
          La mediación es una herramienta eficaz para resolver conflictos en ámbitos familiares,
          civiles, laborales y mercantiles. Evita litigios prolongados, reduce la carga judicial y
          ofrece soluciones adaptadas a cada situación. En{' '}
          <strong>CRESPO DE LA ROSA ABOGADOS</strong> contamos con profesionales colaboradores que
          te acompañarán en todo el proceso, ofreciéndote una solución adecuada y cercana.
        </p>
      </div>

      {/* Bloques de servicios */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Derecho Civil */}
        <div
          className="group bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow cursor-pointer transition-transform hover:shadow-xl hover:scale-[1.02]"
          onClick={() => setMostrarEjemplosCivil(!mostrarEjemplosCivil)}
        >
          {/* Tooltip */}
          {mostrarEjemplosCivil && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Volver
            </span>
          )}
          {!mostrarEjemplosCivil && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mas información
            </span>
          )}
          <h3
            className={`titulo-servicio text-2xl mb-3 transition-all duration-300 group-hover:scale-105 ${cinzel.className}`}
          >
            Derecho Civil
          </h3>
          {!mostrarEjemplosCivil && (
            <p className="transition-all duration-300 group-hover:scale-[1.03]">
              Te ayudamos en aspectos clave de tu vida civil: contratos, herencias, reclamaciones y
              trámites familiares. Siempre buscando tu bienestar y seguridad jurídica.
            </p>
          )}
          {mostrarEjemplosCivil && (
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
              <li>Separaciones, divorcios y modificaciones judiciales</li>
              <li>Testamentos y herencias</li>
              <li>Reclamaciones de cantidad y daños</li>
              <li>Contratos y gestiones notariales</li>
            </ul>
          )}
        </div>

        {/* Derecho Laboral simplificado con animación */}
        <div
          className="group bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow cursor-pointer transition-transform hover:shadow-xl hover:scale-[1.02]"
          onClick={() => setMostrarEjemplosLaboral(!mostrarEjemplosLaboral)}
        >
          {/* Tooltip */}
          {mostrarEjemplosLaboral && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Volver
            </span>
          )}
          {!mostrarEjemplosLaboral && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mas información
            </span>
          )}
          <h3
            className={`titulo-servicio text-2xl mb-3 transition-all duration-300 group-hover:scale-105 ${cinzel.className}`}
          >
            Derecho Laboral
          </h3>
          {!mostrarEjemplosLaboral && (
            <p className="transition-all duration-300 group-hover:scale-[1.03]">
              Defendemos tus derechos como trabajador o empleador. Asesoramiento completo en
              conflictos laborales, despidos, accidentes y Seguridad Social.
            </p>
          )}
          {mostrarEjemplosLaboral && (
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-200 transition-all duration-300 group-hover:scale-[1.03]">
              <li>Despidos e incumplimientos contractuales</li>
              <li>Reclamaciones salariales</li>
              <li>Asesoramiento a trabajadores y empresarios</li>
              <li>Accidentes laborales</li>
            </ul>
          )}
        </div>

        {/* Derecho Tributario y Fiscal */}
        <div
          className="group bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow cursor-pointer transition-transform hover:shadow-xl hover:scale-[1.02]"
          onClick={() => setMostrarEjemplosFiscal(!mostrarEjemplosFiscal)}
        >
          {/* Tooltip */}
          {mostrarEjemplosFiscal && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Volver
            </span>
          )}
          {!mostrarEjemplosFiscal && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mas información
            </span>
          )}
          <h3
            className={`titulo-servicio text-2xl mb-3 transition-all duration-300 group-hover:scale-105 ${cinzel.className}`}
          >
            Derecho Tributario y Fiscal
          </h3>
          {!mostrarEjemplosFiscal && (
            <p className="transition-all duration-300 group-hover:scale-[1.03]">
              Asesoramiento integral para particulares, autónomos y empresas. Nos encargamos de que
              cumplas tus obligaciones fiscales con eficiencia.
            </p>
          )}
          {mostrarEjemplosFiscal && (
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-200 transition-all duration-300 group-hover:scale-[1.03]">
              <li>Contabilidad y presentación de impuestos</li>
              <li>Inspecciones y sanciones tributarias</li>
              <li>Altas de empresa y autónomos</li>
              <li>Constitución de asociaciones y fundaciones</li>
            </ul>
          )}
        </div>

        {/* Derecho de Extranjería */}
        <div
          className="group bg-black bg-opacity-65 backdrop-blur-md p-6 rounded-lg shadow cursor-pointer transition-transform hover:shadow-xl hover:scale-[1.02]"
          onClick={() => setMostrarEjemplosExtr(!mostrarEjemplosExtr)}
        >
          {/* Tooltip */}
          {mostrarEjemplosExtr && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Volver
            </span>
          )}
          {!mostrarEjemplosExtr && (
            <span className="titulo-servicio fixed bottom-0 right-0 z-20 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Mas información
            </span>
          )}
          <h3
            className={`titulo-servicio text-2xl mb-3 transition-all duration-300 group-hover:scale-105 ${cinzel.className}`}
          >
            Derecho de Extranjería
          </h3>
          {!mostrarEjemplosExtr && (
            <p className="transition-all duration-300 group-hover:scale-[1.03]">
              Facilitamos tu proceso de integración. Te asesoramos en todos los trámites legales
              como residencia, arraigo o nacionalidad.
            </p>
          )}
          {mostrarEjemplosExtr && (
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Permisos de residencia y reagrupación</li>
              <li>Obtención de nacionalidad</li>
              <li>Arraigo social y laboral</li>
              <li>Asesoramiento integral a ciudadanos extranjeros</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
