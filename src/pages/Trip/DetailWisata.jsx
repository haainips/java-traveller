import { useParams, useNavigate } from "react-router-dom";
import { trips } from "../../lib/data/trip";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import PaymentIcon from "../../assets/payment-icon.png";
import FormReservation from "../../components/FormReservation";
import Logo from "../../assets/Javatraveller-logo.png";
import { ChevronRight, Circle } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function DetailWisata() {
    const { slug, region, type } = useParams();
    const allTrips = Object.values(trips.domestik).flatMap((region) => region.trips);
    const selectedTrip = allTrips.find((trip) => trip.slug === slug);
    const selectedRegion = trips.domestik[region];
    const formRef = useRef(null);
    const [isFormVisible, setIsFormVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFormVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    const handleAnchorClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            document.documentElement.style.scrollBehavior = 'smooth';
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Reset setelah animasi selesai
            setTimeout(() => {
                document.documentElement.style.scrollBehavior = 'auto';
            }, 2000);
        }
    };

    if (!selectedTrip) {
        return (
            <div className="relative px-20 py-4 font-primary text-md">
                <div className="flex items-center gap-2 font-medium mb-6">
                    <Link to={"/"} className="hover:underline hover:text-blue-500 transition">Home</Link>
                    <ChevronRight size={22}/>    
                    <Link to={"/Trip"} className="hover:underline transition hover:text-blue-500">Trip</Link>
                    <ChevronRight size={22}/>    
                    <Link to={`/Trip/${type}/${region}`} className="hover:underline hover:text-blue-500 transition capitalize">{region}</Link>
                </div>
                <div className="text-center py-10 text-lg font-regular">
                    Maaf Wisata tidak ditemukan.
                </div>
            </div>
        )
    }


    return (
        <div className="relative px-20 py-4 font-primary">
            <div className="flex gap-2 font-medium mb-6">
                <Link to={"/"} className="hover:underline hover:text-blue-700 transition">Home</Link>
                <ChevronRight size={22} />  
                <Link to={"/Trip"} className="hover:underline hover:text-blue-700 transition">Trip</Link>
                <ChevronRight size={22} />  
                <Link to={`/Trip/${type}/${region}`} className="hover:underline hover:text-blue-700 transition capitalize">{region}</Link>
                <ChevronRight size={22} />  
                <Link className="text-blue-600">{slug}</Link>
            </div>

            <div className="flex justify-between mb-4">
                <div className="font-semibold text-4xl">
                    <span className="uppercase">
                        <p className="mb-2 text-utama">{selectedTrip.topTitle}</p>
                        <h1>{selectedTrip.slug}</h1>
                    </span>
                    <p className="mb-4 text-sm font-semibold">{selectedTrip.tripDestination}</p>
                    <p className="mb-2 text-sm font-semibold">Durasi {selectedTrip.duration}</p>
                </div>
                <div className="border-1 border-gray-300 rounded-2xl shadow-xl py-6 px-6 space-y-2">
                    <span className="flex justify-between gap-30 font-semibold text-lg ">
                        <p>IDR:</p>
                        <h1 className="">{selectedTrip.pricetrip}/Orang</h1>
                    </span>
                    <span className="flex justify-between font-semibold text-lg border-b-1 border-gray-200 mb-6"></span>
                    <a href="#form" onClick={handleAnchorClick} className="flex justify-center bg-utama text-md px-3 py-2 text-black font-semibold rounded-md hover:bg-black hover:text-utama transition">
                        Pesan Sekarang
                    </a>
                </div>
            </div>

            {/* Image Slider */}
            <h1 className="text-lg font-medium py-4">{selectedTrip.name}, Indonesia</h1>
            <div className="grid grid-cols-5 grid-row-2 gap-4">
                <ImageSlider
                    className={{
                        container: "w-full h-[500px] rounded-xl col-span-3 row-span-2 object-cover"
                    }}
                    images={selectedTrip.images} />
                <img src={selectedTrip.images[1]} alt="" className="h-[335px] w-full col-span-2 col-start-4 row-span-1 rounded-tr-xl object-cover" />
                <img src={selectedTrip.images[2]} alt="" className="h-[150px] w-full col-span-1 col-start-4 row-span-1 object-cover" />
                <img src={selectedTrip.images[3]} alt="" className="h-[150px] w-full col-span-1 col-start-5 row-span-1 rounded-br-xl object-cover" />
            </div>

            {/* Ringkasan */}
            <div className="grid grid-cols-3 py-10 gap-6 space-y-8">
                <span className="space-y-2 col-span-2">
                    <h1 className="text-2xl font-bold"><li>Ringkasan</li></h1>
                    <p className=" font-medium text-justify mb-8">"{selectedTrip.ringkasan}"</p>

                    {/* Include & Exclude */}
                    <div className="grid bg-[#F8F8F8] grid-cols-3 gap-8 border-1 border-gray-300 rounded-2xl shadow-md py-6 px-10 pl-16 ">
                        <div className="">
                            <h1 className="font-bold text-2xl underline mb-8">Include</h1>
                            <ul className="list-disc space-y-4 text-md">
                                {selectedTrip.include.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-2xl underline mb-8">Exclude</h1>
                            <ul className="list-disc space-y-4 text-md">
                                {selectedTrip.exclude.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-2xl underline mb-8">Pembayaran</h1>
                            <ul className="list-disc space-y-4 text-md">
                                <li>Uang Muka Sebesar Rp200.000/Orang</li>
                                <li>Pelunasan 10 Hari Sebelum Keberangkatan Tour</li>
                                <li>Pembayaran Hanya Melalui Rekening Berikut :</li>
                            </ul>
                            <img src={PaymentIcon} className="w-16 object-cover mt-4 mb-2" />
                            <p className="text-sm mb-2">AC NO. 169 1818 999 (IDR)</p>
                            <img src={Logo} className="w-40" />
                        </div>
                    </div>
                </span>

                <div ref={formRef} id="form" className="scroll-m-24">
                    <FormReservation price={selectedTrip.pricetrip} />
                </div>

                {!isFormVisible && (
                    <a href="#form" onClick={handleAnchorClick} className="fixed bottom-10 font-bold right-10 bg-utama text-black py-3 px-6 rounded-full shadow-2xl z-50 cursor-pointer transition hover:bg-black hover:text-utama">
                        Pesan Sekarang
                    </a>
                )}

                {selectedTrip.itenary && selectedTrip.itenary.length > 0 && (
                    <div className="gap-10 bg-[#F8F8F8] col-span-3 border border-gray-300 rounded-2xl shadow-sm py-10 px-10 space-y-6">
                        <li className="font-semibold text-2xl capitalize">Itenary (Rencana Perjalanan)</li>

                        {selectedTrip.itenary.map((dayObj, index) => (
                            Object.entries(dayObj).map(([dayKey, activities]) => (
                                <div key={dayKey} className="relative flex">
                                    {/* Timeline dot & line */}
                                    <div className="relative flex flex-col items-center mr-6">
                                        {/* Dot */}
                                        <div className="z-10 -left-20 bg-white rounded-full">
                                            <Circle size={30} fill="#FFA600" stroke="white" />
                                        </div>
                                        {/* Line */}
                                        <div className="flex-1 border-l-2 border-utama border-dashed"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-18 font-bold uppercase text-[#1A1A1A]">
                                            <h3 className="text-lg">{dayKey} :</h3>
                                            <h4 className="text-lg">({activities[0].destination})</h4>
                                        </div>

                                        {activities.map((activity, i) => (
                                            <div key={i} className="mt-2">
                                                <p className="text-black text-justify text-sm leading-6 font-medium">
                                                    {activity.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                )}

                {selectedTrip.syaratkondisi && selectedTrip.syaratkondisi.length > 0 && (
                    <div className=" bg-[#F8F8F8] col-span-3 border border-gray-300 rounded-2xl shadow-sm py-8 px-10 space-y-10">
                        <span className="flex justify-center gap-1">
                            <h1 className="font-semibold text-center text-2xl text-utama uppercase">Syarat</h1>
                            <h1 className="font-semibold text-center text-2xl uppercase">dan Kondisi</h1>
                        </span>
                        <ul className="list-decimal space-y-4 text-justify font-medium pl-4 text-md">
                            {selectedTrip.syaratkondisi.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetailWisata;