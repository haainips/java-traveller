import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { trips } from "../lib/data/trip";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"
import { rental } from "../lib/data/rental"
import CardCustom from "./CardCustom";

export default function Trip() {
    const regions = Object.entries(trips.domestik);
    const internationalRegions = Object.entries(trips.internasional);
    const tripPackages = Object.entries(trips.paket);
    const rentalMobil = Object.entries(rental);


    const interRegionNames = {
        asia: "Asia",
        europe: "Europe",
        africa: "Africa",
        america: "America",
        australia: "Australia",
    }
    const regionNames = {
        jawa: "Jawa",
        sumatera: "Sumatera",
        kalimantan: "Kalimantan",
        balilombok: "Bali dan Lombok",
        ntt: "NTT",
        sulawesi: "Sulawesi",
    };
    const packageNames = {
        honeymoon: "Paket Honeymoon",
        studytour: "Paket Study Tour",
        adventure: "Paket Adventure",
    }

    return (
        /* Trip Domestik & Internasional */
        <section className="py-10 font-primary bg-gray-50 w-full">
            <span id="domestik" className="flex justify-center items-center gap-2 font-bold lg:text-3xl mb-4 scroll-mt-0">
                <h1 className="">Tujuan Populer di </h1>
                <p className="text-utama">Java Traveller</p>
            </span>
            <p className=" text-center lg:text-xl font-medium">"Jelajahi dunia baru dengan pemandangan alam yang eksotis"</p>

            {/* Trip Domestik */}
            <div className="flex flex-col items-center gap-6 mt-14">
                <h1 className="text-utama text-center text-3xl font-bold">Domestic</h1>
                <Carousel className="w-full lg:max-w-6xl mx-auto">
                    <CarouselContent className="-ml-5 ">
                        {regions.map(([regionKey, regionData]) => (
                            <CarouselItem key={regionKey} className="pl-5 basis-1/3">
                                <div className="p-1">
                                    <Link key={regionKey} to={`/Trip/Domestik/${regionKey}`}>
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
                                            image={regionData.image}
                                            icon={<MapPin fill="black" stroke="white" />}
                                            title={regions[regionKey] || regionKey}
                                            description={regionData.description}
                                            buttonLabel={"Lihat Semua"}
                                        />
                                    </Link>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Trip Internasional */}
            <div id="internasional" className="scroll-mt-30 flex flex-col items-center gap-10 mt-20">
                <h1 className="text-utama text-center lg:text-3xl font-bold">Internasional</h1>
                <Carousel className=" max-w-6xl mx-auto">
                    <CarouselContent className="-ml-5 ">
                        {internationalRegions.map(([interRegionKey, interRegionData]) => (
                            <CarouselItem key={interRegionKey} className="pl-5 basis-1/3">
                                <div className="p-1">
                                    <Link key={interRegionKey} to={`/Trip/Domestik/${interRegionKey}`}>
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
                                            title={regions[interRegionKey] || interRegionKey}
                                            description={interRegionData.description}
                                            buttonLabel={"Lihat Semua"}
                                        />
                                    </Link>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Trip Paket Tour */}
            <div className="flex flex-col items-center gap-4 mt-20">
                <span className="flex justify-center gap-3 lg:text-3xl font-bold text-center">
                    <h1 className="text-black">Paket Tour</h1>
                    <h1 className="text-utama">Java Traveller</h1>
                </span>
                <p className="lg:text-xl font-medium mb-10">“Pilih paket tour dengan harga murah disini.”</p>
                <div className="grid grid-cols-3 gap-4 lg:w-6xl">
                    {tripPackages.map(([tripPackageKey, tripPackageData]) => (
                        <Link key={tripPackageKey} to={`/Trip/${tripPackageKey}`}>
                            <div key={tripPackageKey} className="relative w-full ">
                                <Card className="py-0 col-span-1">
                                    <CardContent>
                                        <img
                                            src={tripPackageData.image}
                                            alt={tripPackageKey}
                                            className="w-full h-[400px] object-cover rounded-xl"
                                        />
                                    </CardContent>
                                </Card>
                                <div className="absolute bottom-0 left-0 right-0 h-30 bg-black/70 rounded-b-xl flex flex-col py-3 px-4 text-white ">
                                    <h1 className="text-md font-medium">{packageNames[tripPackageKey] || tripPackageKey}</h1>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-white">
                                            <h1 className="text-md font-normal mb-1">Harga mulai dari :</h1>
                                            <p className="text-sm font-bold">Rp {tripPackageData.harga}</p>
                                        </span>
                                        <Button className="bg-utama text-black hover:bg-black hover:text-utama hover:shadow-xl font-semibold lg:text-md px-3 py-1 transition duration-200" >Lihat Paket</Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Rental Mobil */}
            <div id="rental" className="flex flex-col items-center gap-10 py-10 mt-20 scroll-mt-20">
                <span className="space-y-4">
                    <h1 className="lg:text-3xl text-center font-bold font-primary text-utama">Pilihan Sewa Mobil</h1>
                    <p className="text-xl font-medium text-center">“Nikmati Perjalanan Dengan Nyaman”</p>
                </span>
                <Carousel className="w-full lg:max-w-6xl mx-auto">
                    <CarouselContent className="-ml-5">
                        {rentalMobil.map(([rentalKey, rentalData]) => (
                            <CarouselItem key={rentalKey} className="pl-5 basis-1/3">
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
                                </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}
