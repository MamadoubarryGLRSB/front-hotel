'use client';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Affiche le bouton de retour en haut après un défilement de 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 transition-colors duration-200">
              Découvrez le luxe dans notre hôtel, où le confort rencontre
              l'élégance. Réservez votre séjour dès aujourd'hui et profitez du
              meilleur service de l'industrie.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/chambres"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  Chambre
                </a>
              </li>
              <li>
                <a
                  href="/restaurant"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  Restaurant
                </a>
              </li>
              <li>
                <a
                  href="/reservation"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  Réservation
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.google.com/maps/search/360+Rue+Real,+69000+Lyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  360 Rue Real, 69000 Lyon
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/30+Rue+Marceau,+38000+Grenoble"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  30 Rue Marceau, 38000 Grenoble
                </a>
              </li>
              <li>
                <a
                  href="tel:+33 01 23 45 67 89"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  +33 01 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@resahotel.com"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                >
                  info@resahotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Suivre Nous</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
        </div>
        <div className="mt-10 text-center text-xs border-t border-gray-700 pt-4">
          &copy; 2024 Resa Hotel | All Rights Reserved
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 bg-yellow-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          &#9650;
        </button>
      )}
    </footer>
  );
}
