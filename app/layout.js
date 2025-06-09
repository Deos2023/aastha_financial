import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ScrollToTopButton from "./component/ScrollToTopButton";
import "./globals.css";
import { Ephesis, Protest_Guerrilla, Oswald } from 'next/font/google';

const ephesis = Ephesis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ephesis',
});

const protestGuerrilla = Protest_Guerrilla({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-protest-guerrilla',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ephesis.variable} ${protestGuerrilla.variable} ${oswald.variable}`}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
