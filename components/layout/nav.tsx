import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="" className="hover:text-yellow-500">
            ResaHotel
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="" className="hover:text-yellow-500">
              Accueil
            </a>
          </li>
          <Link href={'/chambres'}>
            <li>
              
                Chambres
            
            </li>
          </Link>

          <li>
            <a href="/reservation" className="hover:text-yellow-500">
              Réservation
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
