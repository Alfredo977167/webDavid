export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Bufete Legal. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <a href="/aviso-legal" className="hover:text-gray-400">Aviso Legal</a>
            <a href="/privacidad" className="hover:text-gray-400">Política de Privacidad</a>
            <a href="/contacto" className="hover:text-gray-400">Contacto</a>
          </div>
        </div>
      </footer>
    );
  }
  