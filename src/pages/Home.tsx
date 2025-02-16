export function Home() {
  return (
    <div className="p-4 text-center text-xl">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a BTK Records</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src="/images/artists.jpg"
            alt="Artistas"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="text-xl font-semibold">Nuestros Artistas</h2>
          <p>Descubre el talento detrás del sello.</p>
          <a href="/artists" className="text-yellow-400 hover:underline">
            Ver más
          </a>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src="/images/releases.jpg"
            alt="Lanzamientos"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="text-xl font-semibold">Lanzamientos</h2>
          <p>Escucha nuestras últimas producciones.</p>
          <a href="/releases" className="text-yellow-400 hover:underline">
            Ver más
          </a>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src="/images/events.jpg"
            alt="Eventos"
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="text-xl font-semibold">Próximos Eventos</h2>
          <p>Únete a nuestras presentaciones en vivo.</p>
          <a href="/events" className="text-yellow-400 hover:underline">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}
