import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const popularRooms = [
    {
      id: 1,
      image: '/images/room1.jpg',
      title: 'Chambre Double',
      price: 'À partir de 120€ par nuit',
      alt: 'Chambre Double',
      link: '/chambres'
    },
    {
      id: 2,
      image: '/images/room2.avif',
      title: 'Suite Luxueuse',
      price: 'À partir de 300€ par nuit',
      alt: 'Suite Luxueuse',
      link: '/chambres'
    },
    {
      id: 3,
      image: '/images/room3.jpg',
      title: 'Chambre Simple',
      price: 'À partir de 80€ par nuit',
      alt: 'Chambre Simple',
      link: '/chambres'
    },
    {
      id: 4,
      image: '/images/room4.jpeg',
      title: 'Chambre Familiale',
      price: 'À partir de 200€ par nuit',
      alt: 'Chambre Familiale',
      link: '/chambres'
    }
  ];

  return (
    <div>
      {/* Bannière de Bienvenue */}
      <header
        className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/testavif')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-md">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bienvenue à ResaHotel</h1>
          <p className="text-lg md:text-2xl text-gray-200">
            Réservez facilement votre séjour dans l une de nos chambres confortables et abordables.
          </p>
          <Link
            href="/chambres"
            className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
          >
            Voir nos chambres
          </Link>
        </div>
      </header>

      {/* Section de Recherche de Chambres */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Cherchez votre chambre</h2>
          <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input type="date" placeholder="Arrivée" className="px-4 py-2 border rounded-md focus:outline-none" />
            <input type="date" placeholder="Départ" className="px-4 py-2 border rounded-md focus:outline-none" />
            <input
              type="number"
              placeholder="Personnes"
              min="1"
              className="px-4 py-2 border rounded-md focus:outline-none"
            />
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Rechercher
            </button>
          </form>
        </div>
      </section>

      {/* Liste des Chambres Populaires */}
      <section className="py-12">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nos chambres populaires</h2>
          {/* Ajout de gap-x-8 et gap-y-12 pour espacer horizontalement et verticalement */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {popularRooms.map((room) => (
              <div key={room.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={room.image} alt={room.alt} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.price}</p>
                  <Link
                    href={room.link}
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avis Clients */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-md rounded-md">
              <p className="italic">
                'Un s&eacute;jour incroyable dans un h&ocirc;tel magnifique. Le service &eacute;tait impeccable&nbsp;!'
              </p>
              <p className="text-right mt-4 text-sm font-semibold">- Sophie L.</p>
            </div>
            {/* Répéter pour d'autres avis */}
          </div>
        </div>
      </section>
    </div>
  );
}
