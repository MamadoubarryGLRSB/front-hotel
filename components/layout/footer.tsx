export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Découvrez le luxe dans notre hôtel, où le confort rencontre l
              élégance. Réservez votre séjour dès aujourd hui et profitez du
              meilleur service de l industrie.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="/chambres" className="hover:text-yellow-500">
                  Chambre
                </a>
              </li>
              <li>
                <a href="/restaurant" className="hover:text-yellow-500">
                  Restaurant
                </a>
              </li>
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

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-2 text-sm">
              <li>360 Rue Real, 69000 Lyon</li>
              <li>30 Rue Marceau, 38000 Grenoble</li>
              <li>+33 012456789</li>
              <li>info@resahotel.com</li>
            </ul>
          </div>

          {/* Footer Bottom */}
        </div>
        <div className="mt-10 text-center text-xs border-t border-gray-700 pt-4">
          &copy; 2024 Resa Hotel | All Rights Reserved
        </div>
      </div>
      {/* Scroll to Top Button */}
      <button className="fixed bottom-10 right-10 bg-yellow-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
        &#9650;
      </button>
    </footer>
  );
}
