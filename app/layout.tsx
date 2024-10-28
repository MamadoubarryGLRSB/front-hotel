import './globals.css';
import Footer from '@/components/layout/footer';
import Nav from '@/components/layout/nav';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar en haut */}
        <Nav />

        {/* Contenu principal, prend l'espace disponible */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer collé en bas */}
        <Footer />
      </body>
    </html>
  );
}
