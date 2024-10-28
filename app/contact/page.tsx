'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import Image from 'next/image';
import contactPageImage from '../../public/images/contact-hotel.png';
// import headerImage from '../../public/images/recept.jpg';

const Contact: React.FC = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handling input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(''); // Clear error message on input change
  };

  // Handling form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted:', data);
        alert('Your message has been sent!');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Header Image*/}
      <header className={styles.heroSection}>
        <Image
          src="/images/recept.jpg"
          alt="Restaurant Interior"
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
      </header>

      {/* Hotel Description Section */}
      <div className={styles.contactSection}>
        <div className={styles.hotelDescription}>
          <h2>Resa Hôtels en quelques mots!</h2>
          <p>
            Chez Resa Hôtels, nous sommes une communauté de
            <strong> plus de 100 hôteliers</strong> indépendants, fiers de notre
            métier, de nos régions et de vous offrir une expérience
            personnalisée. Chacun de<strong> nos hôtels est unique. </strong>
            Nous nous engageons à vous accueillir chaleureusement et à vous
            offrir le meilleur service possible.
          </p>
          <p>
            Avec <strong>plus de 5 hôtels</strong> distinctifs à travers la
            France, nous vous invitons à réserver votre prochain séjour sur
            notre site sécurisé. Que vous planifiiez un voyage d'affaires, une
            escapade romantique ou des vacances en famille ou entre amis, vous
            trouverez de nombreuses offres exclusives et promotions spéciales.
          </p>
          <p>
            Vous voyagez souvent?
            <strong> Rejoignez notre programme de fidélité:</strong> l'un des
            plus généreux en France avec plus de 1 000 membres !
          </p>
          <p>
            Nous sommes passionnés par l'hospitalité et à votre écoute. Si vous
            avez des questions ou besoin d'assistance, n'hésitez pas à nous
            contacter. Nous avons hâte de vous accueillir bientôt !
          </p>
          <p>
            <strong>
              Resa Hôtel- Là où l'hospitalité se conjugue avec une touche
              personnelle.
            </strong>
          </p>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.imageBlock}>
            <Image
              src={contactPageImage}
              alt="Hotel Contact"
              layout="responsive"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2>
            <b>Besoin de nous!</b>
          </h2>
          <p>
            On est à un clic-
            <strong>plus rapide que le room service, </strong>
            mais avec tout le charme !
            <strong>Des questions ou besoin d'aide ?</strong> Envoyez-nous un
            message, et on s'en occupe comme un concierge avec des
            super-pouvoirs !
          </p>

          <div className={styles.infoBlock}>
            <h3>
              <b>Téléphone</b>
            </h3>
            <p>+33 01 23 45 67 89</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>
              <b>Email</b>
            </h3>
            <p>
              <a href="mailto:info@resahotel.com" className={styles.emailLink}>
                info@resahotel.com
              </a>
            </p>
          </div>
          <div className={styles.infoBlock}>
            <h3>
              <b>Adresse</b>
            </h3>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=360+Rue+Real,+69000+Lyon,+France"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.addressLink}
              >
                360 Rue Real, 69000 Lyon, France
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2>
            <b>N'hésitez pas à nous contacter si vous avez des questions!</b>
          </h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Envoyer la demande'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
