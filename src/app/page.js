"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <div className="bg-full" style={{backgroundImage: "url('/3.jpg')"}}>
      
    <section
      className="h-[70vh] flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
    >
      <motion.div
        className="bg-black bg-opacity-40 p-6 sm:p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Tu Defensa, Nuestra Prioridad
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Asesoramiento legal con experiencia y compromiso.
        </p>
        <motion.a
          href="/contacto"
          className="button px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-white text-base sm:text-lg font-semibold transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contáctanos
        </motion.a>
      </motion.div>
    </section>
    </div>

  );
}
