import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className=" bg-gray-200 ">
      <Navbar />
      <Hero />
      <Info />
      <Carousel />
      <Footer />
    </main>
  );
}
