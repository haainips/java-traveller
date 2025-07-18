import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { trips } from "../lib/data/trip";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function Trip() {
    const regions = Object.entries(trips.domestik);
    const internationalRegions = Object.entries(trips.internasional);
    const tripPackages = Object.entries(trips.paket);

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
        <section className="py-10 font-primary bg-gray-50 w-full">
            <span className="flex justify-center items-center gap-2 font-bold text-4xl mb-4">
                <h1 className="">Tujuan Populer di </h1>
                <p className="text-utama">Java Traveller</p>
            </span>
            <p className=" text-center text-xl font-medium">"Jelajahi dunia baru dengan pemandangan alam yang eksotis"</p>

            <div className="flex flex-col items-center gap-10 mt-20">
                <h1 className="text-utama text-center text-4xl font-bold">Domestic</h1>
                <Carousel className="w-full max-w-7xl mx-auto">
                    <CarouselContent className="-ml-5 ">
                        {regions.map(([regionKey, regionData]) => (
                            <CarouselItem key={regionKey} className="pl-5 basis-1/3">
                                <div className="p-1">
                                    <Card className="py-0">
                                        <CardContent>
                                            <img
                                                src={regionData.image}
                                                alt={regionKey}
                                                className="w-full h-48 object-cover rounded-t-xl"
                                            />
                                            <div className="p-4">
                                                <span className="flex items-center gap-2">
                                                    <MapPin size={28} fill="black" stroke="white" />
                                                    <h1 className="text-md font-bold uppercase">{regionNames[regionKey] || regionKey}</h1>
                                                </span>
                                                <p className="text-sm mt-2 text-justify h-26">{regionData.description}</p>
                                                <div className="flex justify-center pt-4">
                                                    <Button className="bg-utama text-black px-6" >Lihat Semua</Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="flex flex-col items-center gap-10 mt-20">
                <h1 className="text-utama text-center text-4xl font-bold">Internasional</h1>
                <Carousel className=" max-w-7xl mx-auto">
                    <CarouselContent className="-ml-5 ">
                        {internationalRegions.map(([interRegionKey, interRegionData]) => (
                            <CarouselItem key={interRegionKey} className="pl-5 basis-1/3">
                                <div>
                                    <Card className="py-0">
                                        <CardContent>
                                            <img
                                                src={interRegionData.image}
                                                alt={interRegionKey}
                                                className="w-full h-48 object-cover rounded-t-xl"
                                            />
                                            <div className="p-4">
                                                <span className="flex items-center gap-2">
                                                    <MapPin size={28} fill="black" stroke="white" />
                                                    <h1 className="text-md font-bold uppercase">{interRegionNames[interRegionKey] || interRegionKey}</h1>
                                                </span>
                                                <p className="text-sm mt-2 text-justify h-26">{interRegionData.description}</p>
                                                <div className="flex justify-center pt-4">
                                                    <Button className="bg-utama text-black px-6" >Lihat Semua</Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="flex flex-col items-center gap-4 mt-20">
                <span className="flex justify-center gap-3 text-4xl font-bold text-center">
                    <h1 className="text-black">Paket Tour</h1>
                    <h1 className="text-utama">Java Traveller</h1>
                </span>
                <p className="text-xl font-medium mb-10">“Pilih paket tour dengan harga murah disini.”</p>
                <div className="flex max-w-7xl mx-auto gap-10">
                    {tripPackages.map(([tripPackageKey, tripPackageData]) => (
                        <div className="relative w-full ">
                            <Card className="py-0">
                                <CardContent>
                                    <img
                                        src={tripPackageData.image}
                                        alt={tripPackageKey}
                                        className="w-3xl h-[500px] object-cover rounded-xl"
                                    />
                                </CardContent>
                            </Card>
                            <div className="absolute bottom-0 left-0 right-0 h-30 bg-black/70 rounded-b-xl flex flex-col py-3 px-4 text-white ">
                                <h1 className="text-md font-medium">{packageNames[tripPackageKey] || tripPackageKey}</h1>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white">
                                        <h1 className="text-md font-normal mb-1">Harga mulai dari :</h1>
                                        <p className="text-sm font-bold">{tripPackageData.harga}</p>
                                    </span>
                                    <Button className="bg-utama text-black font-bold text-lg px-3 py-1" >Lihat Paket</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
