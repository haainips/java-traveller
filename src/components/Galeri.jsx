import { galleryData } from "../lib/data/galeri"
export default function Galeri() {
    return (
        <div className="py-10">
            <h1 className="text-3xl text-center font-bold font-primary text-utama">Galeri</h1>
            <h2 className="text-xl text-center mt-4 font-semibold font-primary">"Liburan Seru dan Mengesankan Bersama Java Traveller"</h2>
            <div className="grid grid-cols-3 grid-rows-6 px-20 gap-4 py-10 mx-auto max-w-6xl max-h-[1000px]">
                {galleryData.map((item, index) => (
                    <div key={index} className={item.style}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}