import Image from "next/image";
import Header from "./components/Header";
import Main from "./Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <body>
      <Header/>
      <Navigation/>
      <Main/>
      <Footer/>
    </body>
  );
}
