import landingPic from "../assets/landing-page.png"
export default function Hero() {
    return (
        <section
            className="relative w-full h-[700px] bg-cover bg-center flex items-center px-20 text-white"
            style={{
                backgroundImage: `url(${landingPic})`,
            }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-start px-4">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 font-primary">
                    TEMUKAN TEMPAT <br /> LIBURAN MU
                </h1>
                <button className="bg-white text-black text-lg font-bold opacity-50 mt-5 px-6 py-3 rounded-full hover:bg-utama hover:opacity-100 transition">
                    Lihat Wisata
                </button>
            </div>
        </section>
    );
}