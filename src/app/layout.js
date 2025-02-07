import localFont from "next/font/local";
import "./globals.css";
import Footer from './components/layout/footer'
import { helios } from "./fonts/fonts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'kartoteka.',
  description: 'веб агрегатор полезных ссылок для дизайна',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${helios.className} antialiased bg-custom-white`}>
        <div className=''>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
