// pages/restaurant.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Restaurant.module.css';

const Restaurant: React.FC = () => {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>Notre Restaurant</title>
        <meta
          name="description"
          content="Découvrez notre restaurant, nos plats délicieux et notre ambiance chaleureuse."
        />
      </Head>

      <div className={styles.restaurantContainer}>
        {/* Hero Image and Header */}
        <header className={styles.heroSection}>
          <Image
            src="/images/res_back5.jpg"
            alt="Restaurant Interior"
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <h1>Bienvenue dans Notre Restaurant</h1>
            <p>Où chaque plat est une expérience gastronomique unique.</p>
          </div>
        </header>

        {/* Main Content Section */}
        <div className={styles.mainContent}>
          {/* About Section */}
          <section className={styles.aboutSection}>
            <h2>À Propos de Nous</h2>
            <p>
              Bienvenue dans notre restaurant, où chaque repas est un
              chef-d'œuvre culinaire — élaboré avec amour et une pincée d'humour
              ! Nos chefs sont des magiciens de la cuisine, conjurant des plats
              qui non seulement ont un goût divin, mais qui éveillent aussi la
              joie à chaque bouchée. Des entrées délicieuses qui titillent vos
              papilles aux plats principaux savoureux qui pourraient bien voler
              votre cœur (et votre appétit), nous avons quelque chose pour tout
              le monde. Alors venez affamé et repartez avec le ventre plein et
              un sourire — nous promettons que notre nourriture est la seule
              chose qui pourrait disparaître plus vite que vos projets de régime
              !
            </p>
          </section>
          {/* New Image Box Section */}
          <section className={styles.imageBoxSection}>
            <h3>Découvrez Nos Ambiances</h3>
            <div className={styles.imageBox}>
              <Image
                src="/images/restMain.jpg"
                alt="Dish 1"
                layout="responsive"
                width={250}
                height={200}
              />
              {/* <Image
                src="/images/table.jpg"
                alt="Dish 2"
                width={250}
                height={200}
              /> */}
            </div>
          </section>
        </div>

        {/* Image Gallery Section */}
        <section className={styles.bottomImages}>
          <h3>Nos Plats</h3>
          <div className={styles.imageGallery}>
            <Image
              src="/images/plat.jpg"
              alt="Dish 1"
              width={250}
              height={200}
            />
            <Image
              src="/images/table.jpg"
              alt="Dish 2"
              width={250}
              height={200}
            />
            <Image
              src="/images/poulet.jpg"
              alt="Dish 3"
              width={250}
              height={200}
            />
            <Image src="/images/chef.jpg" alt="Chef" width={250} height={200} />
          </div>
        </section>

        {/* Contact Us Button */}
        <Link href="/contact">
          <button className={styles.contactButton}>Contactez-Nous</button>
        </Link>
      </div>
    </>
  );
};

export default Restaurant;
