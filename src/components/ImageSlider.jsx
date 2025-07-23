import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider({
    images = [],
    className = {},
}) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    if (images.length === 0) {
        return <p className="text-gray-500">Belum ada gambar tersedia.</p>;
    }

    return (
        <div className={`relative ${className.container}`}>
            <img
                src={images[current]}
                alt={`Slide ${current}`}
                className="h-full w-full col-span-3 row-span-2 object-cover transition duration-400 rounded-l-xl"
            />

            {/* Tombol navigasi */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-utama py-2 px-3 rounded-xl hover:bg-opacity-50"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-utama py-2 px-3 rounded-xl hover:bg-opacity-50"
            >
                <ChevronRight size={24} />
            </button>

            {/* Bullet indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
