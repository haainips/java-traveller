import landingPic from "../assets/landing-page.png"
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <section
            id="home"
            className="relative w-full h-[600px] bg-cover bg-center flex items-center px-20 text-white"
            style={{
                backgroundImage: `url(${landingPic})`,
            }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-start px-4 space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold font-primary">
                    TEMUKAN TEMPAT <br /> LIBURAN MU
                </h1>
                <Link to="/Trip" className="bg-white font-primary text-black text-lg font-bold opacity-50 mt-5 px-6 py-2 rounded-full hover:bg-utama hover:opacity-100 transition">
                    Lihat Wisata
                </Link>
            </div>
        </section>
    );
}