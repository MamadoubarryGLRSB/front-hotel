import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-yellow-500">
            ResaHotel
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/chambres" className="hover:text-yellow-500">
              Chambres
            </Link>
          </li>
          <li>
            <Link href="/reservation" className="hover:text-yellow-500">
              Réservation
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
