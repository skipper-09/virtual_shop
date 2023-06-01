import "./globals.css";
import { Source_Sans_Pro } from "next/font/google";
import Navbar from "./components/Front-end/Navbar";
const sunpro = Source_Sans_Pro({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Virtual Shop",
  description: "Aplikasi yang menyediakan berbagai kebutuhan digital kamu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={sunpro.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
