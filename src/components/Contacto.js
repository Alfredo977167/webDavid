'use client';
import { Cinzel } from 'next/font/google';
import { useState } from 'react';
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert('Mensaje enviado correctamente');
        setForm({ nombre: '', email: '', mensaje: '' });
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error en el envío:', error);
      alert('Error en el envío');
    }
  };

  return (
    <div className="bg-full">
      <div className="min-h-screen flex items-center justify-center text-white">
        <section className="max-w-lg mx-auto p-8">
          <h1 className={`text-[#0b3d2e] text-4xl mb-6 text-center ${cinzel.className}`}>
            Contacto
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={form.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje..."
              rows="5"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={form.mensaje}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="button w-full text-white py-3 rounded transition">
              Enviar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
