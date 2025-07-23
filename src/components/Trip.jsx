import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { trips } from "../lib/data/trip";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import CardCustom from "./CardCustom";

export default function Trip() {
    const regions = Object.entries(trips.domestik);
    const internationalRegions = Object.entries(trips.internasional);
    const tripPackages = Object.entries(trips.paket);
    const rentals = Object.entries(trips.rental);

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
            <span id="domestik" className="flex justify-center items-center gap-2 font-bold lg:text-3xl mb-4 scroll-mt-10">
                <h1 className="">Tujuan Populer di </h1>
                <p className="text-utama">Java Traveller</p>
            </span>
            <p className=" text-center lg:text-xl font-medium">"Jelajahi dunia baru dengan pemandangan alam yang eksotis"</p>

            {/* Trip Domestik */}
            <div className="flex flex-col items-center gap-6     mt-14">
                <h1 className="text-utama text-center text-3xl font-bold">Domestic</h1>
                <Carousel className="w-full lg:max-w-6xl mx-auto">
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
                                                <p className="text-sm mt-2 text-justify h-30">{regionData.description}</p>
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

            {/* Trip Internasional */}
            <div id="internasional" className="scroll-mt-30 flex flex-col items-center gap-10 mt-20">
                <h1 className="text-utama text-center lg:text-3xl font-bold">Internasional</h1>
                <Carousel className=" max-w-6xl mx-auto">
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
                                                <p className="text-sm mt-2 text-justify h-30">{interRegionData.description}</p>
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

            {/* Trip Paket Tour */}
            <div className="flex flex-col items-center gap-4 mt-20">
                <span className="flex justify-center gap-3 lg:text-3xl font-bold text-center">
                    <h1 className="text-black">Paket Tour</h1>
                    <h1 className="text-utama">Java Traveller</h1>
                </span>
                <p className="lg:text-xl font-medium mb-10">“Pilih paket tour dengan harga murah disini.”</p>
                <div className="flex lg:max-w-6xl mx-auto gap-10">
                    {tripPackages.map(([tripPackageKey, tripPackageData]) => (
                        <div key={tripPackageKey} className="relative w-full ">
                            <Card className="py-0">
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
                                    <Button className="bg-utama text-black font-semibold lg:text-md px-3 py-1" >Lihat Paket</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center gap-10 py-10 mt-20">
                <span className="space-y-4">
                    <h1 className="lg:text-3xl text-center font-bold font-primary text-utama">Pilihan Sewa Mobil</h1>
                    <p className="text-xl font-medium text-center">“Nikmati Perjalanan Dengan Nyaman”</p>
                </span>
                <Carousel className="w-full lg:max-w-6xl mx-auto">
                    <CarouselContent className="-ml-5">
                        {rentals.map(([rentalKey, rentalData]) => (
                            <CarouselItem key={rentalKey} className="pl-5 basis-1/3">
                                <CardCustom classNames={
                                    {
                                        image: "h-full rounded-xl",
                                        review: "hidden",
                                        buttonOverlay: "bg-utama text-black px-8 font-semibold text-md py-2",
                                        tittleOverlay: "font-medium text-xl",
                                    }
                                }
                                    image={rentalData.image}
                                    titleOverlay={rentalData.text}
                                    buttonOverlayLabel="Detail"
                                    showOverlay={true}
                                />
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
