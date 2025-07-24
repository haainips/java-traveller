import { useState } from "react";
import { useParams } from "react-router-dom";
import { trips } from "../lib/data/trip";
import { Input } from "../../@/components/ui/input";
import CardModal from "../components/CardModal";

const formatDayTitle = (dayKey) => {
    if (!dayKey.startsWith('hari')) return dayKey;
    const dayNumberText = dayKey.replace('hari', '');
    return `Hari ${dayNumberText.charAt(0).toUpperCase() + dayNumberText.slice(1)}`;
};

function PackagesList() {
    // ... (kode lainnya tetap sama)
    const { type } = useParams();
    const packagesData = trips.paket[type];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleOpenModal = (data) => {
        setSelectedPackage(data);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPackage(null);
    };

    if (!packagesData) {
        return <div className="text-center py-20">Paket wisata '{type}' tidak ditemukan.</div>;
    }

    const filteredPackages = packagesData.trip.filter(data => {
        const searchTermLower = searchTerm.toLowerCase();
        const slugMatch = data.slug.toLowerCase().includes(searchTermLower);
        const destinationMatch = Object.values(data.destinasi[0])
            .flat()
            .some(dest => dest.toLowerCase().includes(searchTermLower));
        return slugMatch || destinationMatch;
    });

    return (
        <div className="px-20 py-10 font-primary space-y-8 min-h-[60vh]">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-primary capitalize font-semibold">Paket Wisata {type}</h1>
                <div className="ml-auto">
                    <Input
                        placeholder="Cari paket atau destinasi..."
                        className="w-60 px-4"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {filteredPackages.length > 0 ? (
                <div className="grid grid-cols-2 gap-8">
                    {filteredPackages.map((data) => {
                        // --- Perubahan Dimulai Di Sini ---

                        // 1. Definisikan nomor WhatsApp dan pesan default
                        const phoneNumber = "6281809091929";
                        const message = `Halo, saya tertarik dengan paket wisata: "${data.slug}". Bisakah saya mendapatkan informasi lebih lanjut?`;

                        // 2. Buat URL WhatsApp yang sudah di-encode
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                        return (
                            <div key={data.id} className="col-span-1 flex flex-col border border-gray-200 shadow-sm rounded-xl py-4">
                                {/* ... Konten kartu lainnya ... */}
                                <h1 className="text-center font-semibold text-xl mb-6">{data.slug}</h1>
                                <div className="grid grid-cols-4 px-8 gap-2">
                                    <div className="col-span-3 overflow-hidden rounded-tl-lg">
                                        <img src={data.images[0]} alt="package" className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" />
                                    </div>
                                    <div className="overflow-hidden rounded-tr-lg">
                                        <img src={data.images[1]} alt="package" className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" />
                                    </div>
                                    <div className="overflow-hidden col-span-1 rounded-bl-lg">
                                        <img src={data.images[2]} alt="package" className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" />
                                    </div>
                                    <div className="overflow-hidden col-span-3 rounded-br-lg">
                                        <img src={data.images[3]} alt="package" className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center px-20 mt-4">
                                    <p className="px-8 py-1 rounded-lg font-semibold text-md shadow-lg bg-utama w-fit text-center">Rp {data.price}</p>
                                </div>
                                <div className="px-8 mt-4 flex-grow">
                                    <h1 className="font-semibold text-sm py-2">Destinasi yang dikunjungi:</h1>
                                    <div className="space-y-2 grid grid-cols-2 gap-x-10">
                                        {Object.entries(data.destinasi[0]).map(([dayKey, destinations]) => (
                                            <div key={dayKey} className="mt-2">
                                                <p className="font-semibold text-bold text-sm mb-2">{formatDayTitle(dayKey)}:</p>
                                                <ul className="list-decimal space-y-2 ml-2">
                                                    {destinations.map((activity, index) => (
                                                        <li key={index} className="text-[12px] text-justify text-black">
                                                            {activity}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center gap-1 px-8 mt-6">
                                    {/* 3. Ganti <button> menjadi <a> */}
                                    <a
                                        href={whatsappUrl}
                                        target="_blank" // Membuka di tab baru
                                        rel="noopener noreferrer"
                                        className="w-30 text-sm text-center bg-utama text-black font-semibold py-2 rounded-l-lg hover:bg-black hover:text-utama transition-colors duration-300"
                                    >
                                        Pesan
                                    </a>
                                    <button
                                        onClick={() => handleOpenModal(data)}
                                        className="w-30 text-sm bg-utama text-black font-semibold py-2 rounded-r-lg hover:bg-black hover:text-utama transition-colors duration-300 border-l border-black/20"
                                    >
                                        Info
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                // ... Pesan "Paket tidak ditemukan"
                <div className="text-center py-20">
                    <h2 className="text-xl font-semibold text-gray-700">Paket tidak ditemukan</h2>
                    <p className="text-gray-500 mt-2">Coba gunakan kata kunci lain untuk pencarian paket atau destinasi Anda.</p>
                </div>
            )}

            <CardModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                data={selectedPackage}
            />
        </div>
    );
}

export default PackagesList;