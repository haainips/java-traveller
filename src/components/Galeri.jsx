import { galleryData } from "../lib/data/galeri"
export default function Galeri() {
    return (
        <div className="py-10 font-primary">
            <h1 className="lg:text-3xl text-center font-bold text-utama">Galeri</h1>
            <h2 className="lg:text-lg text-center mt-4 font-medium">
                "Liburan Seru dan Mengesankan Bersama Java Traveller"
            </h2>

            {/* Tambahkan class group di container utama */}
            <div className="group grid grid-cols-3 grid-rows-6  gap-4 py-10 mx-auto w-6xl max-h-[1200px]">
                {galleryData.map((item, index) => (
                    <div
                        key={index}
                        // peer + blur jika tidak di-hover
                        className={`relative rounded-lg overflow-hidden transition-transform duration-800 ease-in-out transform group-hover:blur-xs group-hover:saturate-0 hover:!blur-none hover:!saturate-100 hover:drop-shadow-2xl hover:scale-110 hover:z-10 ${item.style}`}
                    >
                        {/* Gambar */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 transition duration-300" />

                        {/* Judul */}
                        <div className="absolute bottom-4 left-2 z-10 text-white text-xl font-semibold px-2 py-1 rounded">
                            <h1>Wisata</h1>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}