export function Navbar() {
  return (
    <nav className="flex justify-around p-4 bg-gray-800 shadow-lg">
      <a href="/" className="text-white transition hover:text-yellow-400">
        Inicio
      </a>
      <a
        href="/artists"
        className="text-white transition hover:text-yellow-400"
      >
        Artistas
      </a>
      <a
        href="/releases"
        className="text-white transition hover:text-yellow-400"
      >
        Lanzamientos
      </a>
      <a href="/events" className="text-white transition hover:text-yellow-400">
        Eventos
      </a>
      <a
        href="/contact"
        className="text-white transition hover:text-yellow-400"
      >
        Contacto
      </a>
    </nav>
  );
}
