import { useParams, useNavigate } from "react-router-dom";
import { trips } from "../../lib/data/trip";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import PaymentIcon from "../../assets/payment-icon.png";
import FormReservation from "../../components/FormReservation";
import Logo from "../../assets/Javatraveller-logo.png";
import { Circle } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function DetailWisata() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const allTrips = Object.values(trips.domestik).flatMap((region) => region.trips);
    const selectedTrip = allTrips.find((trip) => trip.slug === slug);
    const formRef = useRef(null)
    const [showScrollToForm, setShowScrollToForm] = useState(false)
    
    if (!selectedTrip) {
        return <div className="text-center py-10">Wisata tidak ditemukan.</div>;
    }


    useEffect(() => {
        if (!formRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowScrollToForm(!entry.isIntersecting)
            },
            {
                root: null, // viewport
                threshold: 0.9, // minimal 10% visible
            }
        )

        observer.observe(formRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className="relative px-20 py-10 font-primary">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-blue-600 hover:underline"
            >
                ← Kembali
            </button>

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
                    <Link to="" className="flex justify-center bg-utama text-md px-3 py-2 text-black font-semibold rounded-md hover:bg-black hover:text-utama transition">
                        Pesan Sekarang
                    </Link>
                </div>
            </div>

            {/* Image Slider */}
            <h1 className="text-lg font-medium py-4">{selectedTrip.name}, Indonesia</h1>
            <div className="grid grid-cols-5 grid-row-2 gap-4">
                <ImageSlider
                    className={{
                        container: "w-full rounded-xl col-span-3 row-span-2 object-cover"
                    }}
                    images={selectedTrip.images} />
                <img src={selectedTrip.images[1]} alt="" className="h-full w-full col-span-2 col-start-4 row-span-1 rounded-tr-xl object-cover" />
                <img src={selectedTrip.images[2]} alt="" className="h-full w-full col-span-1 col-start-4 row-span-1 object-cover" />
                <img src={selectedTrip.images[3]} alt="" className="h-full w-full col-span-1 col-start-5 row-span-1 rounded-br-xl object-cover" />
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

                <FormReservation ref={formRef} price={selectedTrip.pricetrip} />

                {showScrollToForm && (
                    <button
                        onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary/90"
                    >
                        Form Reservasi
                    </button>
                )}

                {/* ... konten bawah */}

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
                                            <h4 className="text-lg">({activities[0]?.destination})</h4>
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

            </div>
        </div>
    );
}

export default DetailWisata;
