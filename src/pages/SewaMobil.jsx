import BackgroundRental from "../assets/sewamobil/background.jpeg"
import { rental } from "../lib/data/rental"
import { Link } from "react-router-dom"
import CardCustom from "../components/CardCustom"

function SewaMobil() {
    const rentalMobil = Object.entries(rental);

    return (
        <div>
            <div class="relative w-full h-96 overflow-hidden font-primary">
                <div class="absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-3">
                    <img src={BackgroundRental} alt="Background" class="w-full h-full object-cover row-span-2" />
                    <img src={BackgroundRental} alt="Background" class="w-full h-full object-cover row-span-2" />
                    <img src={BackgroundRental} alt="Background" class="w-full h-full object-cover" />
                    <img src={BackgroundRental} alt="Background" class="w-full h-full object-cover" />

                </div>

                <div class="absolute inset-0 flex flex-col px-28 py-16 space-y-4 items-start  text-white p-8 bg-black/50">
                    <h1 class="text-4xl font-semibold">Sewa Mobil Terbaik</h1>
                    <p class="mt-2 lg:max-w-1/2 font-medium text-lg">
                        Sewa mobil murah online nagantour dengan sopir harga murah, rental mobil terdekat untuk kebutuhan harian untuk wilayah Jogja, Malang, Bali, Jakarta, Bandung, dll.
                    </p>
                </div>

            </div>
            <div className="grid grid-cols-3 gap-4 py-10 mx-auto w-6xl">
                {rentalMobil.map(([rentalKey, rentalData]) => (
                        <Link key={rentalKey} to={`/sewa-mobil/${rentalKey}`}>
                            <CardCustom classNames={
                                {
                                    image: "h-full rounded-xl",
                                    review: "hidden",
                                    buttonOverlay: "bg-utama text-black px-8 font-semibold text-sm py-2 hover:bg-black hover:text-utama transition",
                                    tittleOverlay: "font-semibold text-xl",
                                }
                            }
                                image={rentalData.image}
                                titleOverlay={rentalData.text}
                                buttonOverlayLabel="Detail"
                                showOverlay={true}
                            />
                        </Link>
                ))}
            </div>
        </div>
    )
}

export default SewaMobil