import { MapPin } from "lucide-react";
import CardCustom from "../../components/CardCustom"
import { trips } from "../../lib/data/trip";
import { Link } from "react-router-dom";
function Home() {
    const domestikRegions = Object.entries(trips.domestik);
    const internationalRegions = Object.entries(trips.internasional);

    const interNames = {
        asia: "Asia",
        europe: "Europe",
        africa: "Africa",
        america: "America",
        australia: "Australia",
    }
    const domestikNames = {
        jawa: "Jawa",
        sumatera: "Sumatera",
        kalimantan: "Kalimantan",
        balilombok: "Bali dan Lombok",
        ntt: "NTT",
        sulawesi: "Sulawesi",
    };
    return (
        <section className="py-10 bg-gray-300/20 px-30 font-primary space-y-10">
            <span id="domestik" className="font-bold scroll-mt-10">
                <h1 className="text-3xl mb-2">Temukan Liburanmu</h1>
                <h2 className="text-2xl text-center py-4 mb-2">Domestic</h2>
            </span>
            
            {/* Trip Domestik */}
            <div  className="grid grid-cols-3 gap-6">
                {domestikRegions.map(([domestikKey, domestikData]) => (
                    <Link key={domestikKey} to={`/Trip/Domestik/${domestikKey}`}>
                        <CardCustom
                            classNames={{
                                card: "",
                                review: "hidden",
                                image: "w-full h-48 object-cover",
                                title: "font-bold text-md py-4 uppercase",
                                description: "text-sm font-primary text-justify mb-4 line-clamp-4",
                                subtitle: "flex items-center gap-2",
                                text: "px-4 mb-4",
                                buttonLabel: "text-sm px-4 py-2 text-black font-semibold rounded-md hover:bg-black hover:text-utama transition",
                                footer: "flex justify-center py-2",
                            }}
                            image={domestikData.image}
                            icon={<MapPin fill="black" stroke="white" />}
                            title={domestikNames[domestikKey] || domestikKey}
                            description={domestikData.description}
                            buttonLabel={"Lihat Semua"}
                        />
                    </Link>
                ))}
            </div>
            
            {/* Trip Internasional */}
            <span id="internasional" className="font-bold scroll-mt-20">
                <h2 className="text-2xl text-center py-4 mb-2">Internasional</h2>
            </span>
            <div className="grid grid-cols-3 gap-6">
                {internationalRegions.map(([interRegionKey, interRegionData]) => (
                    <Link key={interRegionKey} to={`/Trip/Internasional/${interRegionKey}`}>
                        <CardCustom
                            classNames={{
                                card: "",
                                review: "hidden",
                                image: "w-full h-48 object-cover",
                                title: "font-bold text-md py-4 uppercase",
                                description: "text-sm font-primary text-justify mb-4 line-clamp-4",
                                subtitle: "flex items-center gap-2",
                                text: "px-4 mb-4",
                                buttonLabel: "text-sm px-4 py-2 text-black font-semibold rounded-md hover:bg-black hover:text-utama transition",
                                footer: "flex justify-center py-2",
                            }}
                            image={interRegionData.image}
                            icon={<MapPin fill="black" stroke="white" />}
                            title={interNames[interRegionKey] || interRegionKey}
                            description={interRegionData.description}
                            buttonLabel={"Lihat Semua"}
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Home