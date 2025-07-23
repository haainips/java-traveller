import Hero from "../components/Hero";
import logo from "../assets/Javatraveller-logo.png"
import Trip from "../components/Trip";
import Galeri from "../components/Galeri";
import Review from "../components/Review";
import wonderfulIndonesia from "../assets/wonderful-indonesia.png";
import asitaBali from "../assets/asita-bali.png";

function Home() {
    return (
        <div className="scroll-smooth">
            <Hero />
            <section className="space-y-12 py-18 font-primary ">
                <div className="flex flex-col items-center gap-12 font-medium text-lg">
                    <img src={logo} className="w-140 mix-blend-multiply"></img>
                    <p className="px-60 text-justify">
                        “Java Traveller adalah perusahaan jasa wisata yang menyediakan perjalanan wisata dengan aman, berkesan, dan bernilai budaya bagi wisatawan domestik maupun internasional kami juga menyediakan jasa Rental Mobil dengan beberapa pilihan armada kami. Dengan tim yang profesional  Java Traveller siap membantu anda menjelajahi destinasi impian anda, kami menyediakan paket wisata fleksibel lengkap dengan layanan transportasi, akomodasi, tour guide dan dokumentasi perjalanan, didukung oleh tim profesional untuk memastikan perjalanan yang aman, nyaman dan berkesan.”
                    </p>
                </div>
                <div className="px-60">
                    <h1 className="text-xl font-bold text-black">Andri S Sasmitha.</h1>
                    <p className="text-lg font-medium text-gray-400">Manager PT. Java Traveller</p>
                </div>
            </section>

            <Trip />
            <Galeri />
            <Review />

            {/* Maps */}
            <section className="flex flex-col items-center gap-4 font-primary py-10">
                <span className="flex gap-2 justify-center font-bold lg:text-3xl text-center">
                    <h1>Lokasi</h1>
                    <h2 className="text-utama">Kami</h2>
                </span>
                <p className="lg:text-xl font-medium mb-4">“Kunjungi kantor Kami dan dapatkan pelayanan terbaik.”</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.932040356557!2d110.37231650000001!3d-7.7970201999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5831e3d76609%3A0x142c30dc0819ea35!2sJAVA%20TRAVELLER%20INDONESIA!5e0!3m2!1sen!2sid!4v1752847096723!5m2!1sen!2sid" className="w-6xl" height="400"></iframe>
                <div className="flex gap-2 justify-center w-full mb-10">
                    <img src={asitaBali} className="h-30"></img>
                    <img src={wonderfulIndonesia} className="h-30"></img>
                </div>
            </section>
        </div>
    )

}

export default Home;