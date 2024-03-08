import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Generation High School",
  description: "Next Generation High School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      <Navigation/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
