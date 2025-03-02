// src/components/Header.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importamos iconos de Lucide-React

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 flex justify-between items-center text-white w-full">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.jpg" alt="Logo" width={80} height={80} />
      </Link>

      {/* Menú para pantallas grandes */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="nav-link transition">Inicio</Link>
        <Link href="/sobre-nosotros" className="nav-link transition">Nosotros</Link>
        <Link href="/servicios" className="nav-link transition">Servicios</Link>
        <Link href="/contacto" className="nav-link transition">Contacto</Link>
      </nav>

      {/* Botón de menú hamburguesa para móviles */}
      <button onClick={toggleMenu} className="md:hidden p-2 z-50">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú colapsado para móviles con animación */}
      <nav className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 backdrop-blur-md flex flex-col items-center pt-20 overflow-y-auto justify-start space-y-6 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}>
        <Link href="/">
        <Image src="/logoSilueta.png" alt="Logo" className="mt-[-90px] logoSilueta" onClick={toggleMenu} width={100} height={100} />
      </Link>
      <br></br><br></br><br></br>
        <Link href="/" className="nav-link transition" onClick={toggleMenu}>Inicio</Link>
        <Link href="/sobre-nosotros" className="text-lg nav-link transition" onClick={toggleMenu}>Nosotros</Link>
        <Link href="/servicios" className="text-lg nav-link transition" onClick={toggleMenu}>Servicios</Link>
        <Link href="/contacto" className="text-lg nav-link transition" onClick={toggleMenu}>Contacto</Link>
      </nav>
    </header>
  );
}
