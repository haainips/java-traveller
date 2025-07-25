import BackgroundRental from "../assets/sewamobil/background.jpeg";
import { rental } from "../lib/data/rental";
import { Link, useParams } from "react-router-dom";
import { Clock, MapPin, UserPlus } from "lucide-react";

function DetailSewaMobil() {
    const { region } = useParams();
    const regionData = rental[region];
    const phoneNumber = "6281809091929";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Halo, saya ingin memesan sewa mobil:  untuk wilayah ${region}.}`;
    
    console.log(regionData);

    if (!regionData) {
        return <div className="text-center py-20">Data rental untuk {region} tidak ditemukan.</div>;
    }


    return (
        <div>
            {/* Bagian Hero Banner */}
            <div className="relative w-full h-96 overflow-hidden font-primary">
                <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-3">
                    <img src={BackgroundRental} alt="Background" className="w-full h-full object-cover row-span-2" />
                    <img src={BackgroundRental} alt="Background" className="w-full h-full object-cover row-span-2" />
                    <img src={BackgroundRental} alt="Background" className="w-full h-full object-cover" />
                    <img src={BackgroundRental} alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 flex flex-col px-28 py-16 space-y-4 items-start text-white bg-black/50">

                    <h1 className="text-4xl font-semibold">
                        {regionData.text}
                        
                    </h1>
                    <p className="mt-2  text-justify font-medium text-lg">
                        {regionData.description}
                    </p>
                </div>
            </div>

            {/* Bagian Daftar Mobil */}
            <div className="px-28 py-16 font-primary">

                {/* 4. Tampilkan daftar mobil menggunakan map */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-primary">
                    {regionData.tipe.map((mobil) => (
                        
                        <div key={mobil.id} className="flex flex-col items-center border-1 rounded-xl shadow-sm py-4 px-2">
                            <img src={mobil.image} className="h-70"></img>
                            <h1 className="text-lg font-semibold mb-3">{mobil.mobil}</h1>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="col-span-1 flex gap-2 font-semibold text-sm items-center">
                                    <Clock size={20} />
                                    <p>Pemakaian per day</p>
                                </div>
                                <div className="col-span-1 flex gap-2 font-semibold text-sm items-center">
                                    <UserPlus size={20} />
                                    <p>Include Driver</p>
                                </div>
                                <div className="col-span-1 flex gap-2 font-semibold text-sm items-center">
                                    <MapPin size={20} />
                                    <p>Rute dalam kota</p>
                                </div>
                            </div>
                            <a href={whatsappUrl} className="bg-utama text-white font-medium text-sm w-full shadow-sm py-2 px-4 text-center rounded-sm mt-4 hover:bg-black hover:text-utama transition duration-200">Booking Via WhatsApp</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailSewaMobil;