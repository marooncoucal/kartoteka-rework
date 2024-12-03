import localFont from "next/font/local";
import "./globals.css";
import { Header } from './components/layout/header'
import Footer from './components/layout/footer'

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className=''>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
