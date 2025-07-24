import { useParams, Link, useNavigate } from "react-router-dom";
import { trips } from "../../lib/data/trip";
import { Input } from "../../../@/components/ui/input";
import CardCustom from "../../components/CardCustom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../@/components/ui/select";
import { useState } from "react";

function DomestikListPage() {
    const { region } = useParams();
    const navigate = useNavigate();
    const regionData = trips.domestik[region];
    const [searchTerm, setSearchTerm] = useState("");

    const domesticRegions = Object.keys(trips.domestik);

    const handleRegionChange = (newRegion) => {
        if (newRegion) {
            navigate(`/Trip/Domestik/${newRegion}`);
        }
    };

    if (!regionData) return <div className="text-center py-10">Region tidak ditemukan.</div>;

    // Filter trip berdasarkan input pencarian
    const filteredTrips = regionData.trips.filter(trip =>
        trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.tripDestination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="px-20 py-10 mb-10 min-h-[60vh] 0">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold mb-4 capitalize">Wisata Pulau {region}</h1>
                <div className="ml-auto">
                    <Input
                        placeholder="Cari kota, destinasi, atau tipe..."
                        className="w-60 px-4 border-1 border-gray-300 shadow-md bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex justify-end mt-8 mb-4">
                <Select onValueChange={handleRegionChange}>
                    <SelectTrigger className="w-[180px] capitalize border-1 border-gray-300 shadow-md bg-white">
                        <SelectValue placeholder="Pilih Pulau" />
                    </SelectTrigger>
                    <SelectContent>
                        {domesticRegions.map((regionName) => (
                            <SelectItem key={regionName} value={regionName} className="capitalize ">
                                {regionName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* --- Perubahan Dimulai Di Sini --- */}

            {/* 1. Cek apakah ada hasil dari filter */}
            {filteredTrips.length > 0 ? (
                // 2. Jika ada, tampilkan grid kartu
                <div className="grid grid-cols-3 gap-6">
                    {filteredTrips.map((trip) => (
                        <Link key={trip.id} to={`/Trip/Domestik/${region}/${trip.slug}`}>
                            <CardCustom classNames={{
                                card: "drop-shadow-lg",
                                text: "py-2",
                                subtitle: "flex justify-between items-center px-4 py-2",
                                title: "font-semibold",
                                category: "text-sm font-bold px-1 capitalize",
                                image: "h-50 w-full object-cover",
                                price: "text-md capitalize",
                                description: "px-4 text-sm text-justify h-10 capitalize",
                                footer: "flex justify-between items-center px-4 py-4",
                                buttonLabel: "text-sm px-3 py-2 text-black font-semibold rounded-md hover:bg-black hover:text-utama transition"
                            }}
                                key={trip.id}
                                image={trip.images[0]}
                                category={trip.type}
                                title={trip.name}
                                price={trip.priceperday}
                                description={trip.tripDestination}
                                buttonLabel="Pesan Sekarang"
                            />
                        </Link>
                    ))}
                </div>
            ) : (
                // 3. Jika tidak ada, tampilkan pesan
                <div className="text-center py-20">
                    <h2 className="text-xl font-semibold text-gray-700">Wisata tidak ditemukan</h2>
                    <p className="text-gray-500 mt-2">Coba gunakan kata kunci lain untuk pencarian Anda.</p>
                </div>
            )}
            {/* --- Perubahan Selesai --- */}
        </div>
    );
}

export default DomestikListPage;