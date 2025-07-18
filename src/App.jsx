import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import logo from "./assets/Javatraveller-logo.png"
import Trip from "./components/Trip";
import Galeri from "./components/Galeri";
import CardCustom from "./components/CardCustom";
import { trips } from "./lib/data/trip";
import { Star } from "lucide-react";

function App() {
  const regions = Object.entries(trips.domestik);
  return (
    <>
      <Navbar />
      <Hero />

      <section className="space-y-12 py-18 font-primary ">
        <div className="flex flex-col items-center gap-12 font-medium text-xl">
          <img src={logo} className="w-160 mix-blend-multiply"></img>
          <p className="px-60 text-justify">
            “Java Traveller adalah perusahaan jasa wisata yang menyediakan perjalanan wisata dengan aman, berkesan, dan bernilai budaya bagi wisatawan domestik maupun internasional kami juga menyediakan jasa Rental Mobil dengan beberapa pilihan armada kami. Dengan tim yang profesional  Java Traveller siap membantu anda menjelajahi destinasi impian anda, kami menyediakan paket wisata fleksibel lengkap dengan layanan transportasi, akomodasi, tour guide dan dokumentasi perjalanan, didukung oleh tim profesional untuk memastikan perjalanan yang aman, nyaman dan berkesan.”
          </p>
        </div>
        <div className="px-60">
          <h1 className="text-2xl font-bold text-black">Andri S Sasmitha.</h1>
          <p className="text-xl font-medium text-gray-400">Manager PT. Java Traveller</p>
        </div>
      </section>

      <Trip />
      <Galeri />
      <Footer />
    </>
  );
}

export default App
