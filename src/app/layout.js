import './globals.css'; // Para los estilos globales
import { Cormorant_Garamond } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'], // Puedes elegir los pesos que necesites
  subsets: ['latin'],
  variable: '--font-cormorant-garamond', // Definimos una variable CSS
});

export const metadata = {
  title: 'Bufete Legal',
  description: 'Asesoría legal profesional y confiable.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={cormorantGaramond.variable}>
      <body className="page-container">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
