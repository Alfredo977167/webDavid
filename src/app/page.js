'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Servicios from '@/components/Servicios';
import Contacto from '@/components/Contacto';
import { Cinzel } from 'next/font/google';
import { useEffect, useState } from 'react';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [fondo, setFondo] = useState(null); // Estado para almacenar el fondo

  useEffect(() => {
    // Seleccionamos el contenedor del fondo solo cuando el componente esté montado
    const fondoElement = document.querySelector('#fondo');
    setFondo(fondoElement); // Actualizamos el estado con el elemento de fondo

    // Este es el efecto de parallax para mover el fondo
    const handleScroll = () => {
      if (fondo) {
        // Solo aplicamos la transformación si el fondo está disponible
        const scrollY = window.scrollY;
        // Aplicamos la transformación en Y para crear el efecto de parallax
        fondo.style.transform = `translateY(${scrollY * -0.3}px)`; // Ajusta el valor 0.3 para el movimiento
      }

      if (window.scrollY > 100) {
        setShowButton(true); // Mostrar el botón cuando el scroll pasa de 100px
      } else {
        setShowButton(false); // Ocultar el botón cuando se esté en la parte superior
      }
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fondo]); // Dependemos de 'fondo' para asegurarnos de que el efecto se aplica solo cuando esté disponible

  // Función para ir a la parte superior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Movimiento suave
    });
  };

  return (
    <main>
      {/* Contenedor de fondo */}
      {/*<div
        id="fondo"
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/fondo.jpg")',
          zIndex: -1, // Aseguramos que el fondo esté detrás del contenido
          height: '206%', // Aseguramos que ocupe el 100% de la altura de la ventana
        }}
      ></div>*/}
      {/* Sección de inicio */}
      <section
        id="inicio"
        className="relative z-[1] h-[600px] md:h-[500px] bg-center bg-cover flex items-center justify-center text-white"
      >
        {/*<motion.div
          className="bg-black bg-opacity-40 px-6 py-4 sm:px-8 sm:py-6 rounded-xl shadow-2xl text-center max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >*/}
        <motion.div
          className="relative z-[1] bg-black bg-opacity-70 px-6 py-4 sm:px-8 sm:py-6 rounded-xl shadow-2xl text-center max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/logo-abogados.png"
            alt="Crespo de la Rosa Abogados"
            className="w-full max-w-[600px] mx-auto mb-4 drop-shadow-[4px_4px_6px_rgba(0,0,0,0.7)]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <p className={`${cinzel.className} text-center`}>
            Más de 35 años de experiencia en los tribunales nos avalan. En{' '}
            <strong>CRESPO DE LA ROSA ABOGADOS</strong>, luchamos por tus derechos y te acompañamos
            paso a paso, ofreciéndote confianza, seguridad y compromiso en los momentos más
            importantes de tu vida.
            <br></br>
            Teniendo como objetivo principal luchar por el derecho y la libertad de cada persona, te
            acompañaremos de la mano en cada momento del procedimiento.
            <br></br>
            Contamos con un amplio equipo de especialistas en las ramas de Derecho Civil y de
            Familia, Derecho Laboral, Derecho Penal, Derecho de Extranjería y Derecho Tributario y
            Fiscal.
          </p>
          <br></br>
          <a
            href="#contacto"
            className="bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-200 transition"
          >
            Primera consulta gratuita
          </a>
        </motion.div>
      </section>

      {/* Sección de servicios */}
      <section id="servicios" className="relative z-10 py-16 px-4 text-white">
        {<Servicios />}
      </section>

      {/* Sección de contacto */}
      <section id="contacto">{<Contacto />}</section>
      {/* Botón para ir al inicio */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:opacity-80"
          aria-label="Ir al inicio"
        >
          ↑
        </button>
      )}
    </main>
  );
}
