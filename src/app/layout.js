// Core
import { Play, Raleway } from "next/font/google";
import Head from "next/head";

// Components
import Header from "./components/Header/Header";

// Style
import "./globals.css";

const play = Play({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
  display: "swap",
});
const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
  display: "swap",
});

export const metadata = {
  title: "ICI Caldaie | Официальный дилер в России",
  description: "Котельное оборудование ICI Caldaie",
  keywords:
    "ICI Caldaie, ici, ici котлы, итальянские паровые котлы, котел ici, ичи котлы, котел ici caldaie, котлы rex, ici caldaie официальный сайт, ici caldaie, ici rex, котел rex, паровые котлы, sixen, котлы sixen, паровой котел sixen",
  author: "ICI Caldaie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={play.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
