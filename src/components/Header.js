// src/components/Header.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Importamos iconos de Lucide-React
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${cinzel.className} p-4 flex justify-between items-center text-white w-full`}
    >
      {/* Logo */}
      <a href="#inicio">
        <Image src="/logoSilueta2.png" alt="Logo" width={80} height={80} />
      </a>

      {/* Menú para pantallas grandes */}
      <nav className="hidden md:flex space-x-6">
        <a href="#inicio" className="nav-a transition">
          Inicio
        </a>
        <a href="#sobre-nosotros" className="nav-a transition">
          Nosotros
        </a>
        <a href="#servicios" className="nav-a transition">
          Servicios
        </a>
        <a href="#contacto" className="nav-a transition">
          Contacto
        </a>
      </nav>

      {/* Botón de menú hamburguesa para móviles */}
      <button onClick={toggleMenu} className="md:hidden p-2 z-50">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú colapsado para móviles con animación */}
      {/* Overlay + menú colapsado para móviles */}
      {isOpen && (
        <div className="fixed inset-0 z-[9] bg-black bg-opacity-50 backdrop-blur-sm md:hidden">
          <nav
            className={`absolute z-[10] top-0 left-0 w-full h-screen bg-[#0B3D2E] bg-opacity-95 flex flex-col items-center pt-20 overflow-y-auto justify-start space-y-6 transition-transform transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <a href="#inicio">
              <Image
                src="/logoSilueta2.png"
                alt="Logo"
                className="mt-[-90px] logoSilueta"
                onClick={toggleMenu}
                width={100}
                height={100}
              />
            </a>
            <br></br>
            <br></br>
            <br></br>
            <a href="#inicio" className="nav-a text-lg transition" onClick={toggleMenu}>
              Inicio
            </a>
            <a href="#sobre-nosotros" className="nav-a text-lg transition" onClick={toggleMenu}>
              Nosotros
            </a>
            <a href="#servicios" className="nav-a text-lg transition" onClick={toggleMenu}>
              Servicios
            </a>
            <a href="#contacto" className="nav-a text-lg transition" onClick={toggleMenu}>
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
