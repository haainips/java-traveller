import { useParams } from "react-router-dom";
import { trips } from "../../lib/data/trip";
import { Input } from "../../../@/components/ui/input";
import CardCustom from "../../components/CardCustom"
import { Link } from "react-router-dom"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from ".././../../@/components/ui/select"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "../../../@/components/ui/command"

function DomestikListPage() {
    const { region } = useParams();
    const regionData = trips.domestik[region];

    if (!regionData) return <div>Region tidak ditemukan.</div>;

    return (
        <div className="px-20 py-10 mb-10 ">
            <div className="flex">
                <h1 className="text-2xl font-bold mb-4 capitalize">Wisata pulau {region}</h1>
                <div className="ml-auto">
                    <Input placeholder="Cari Wisatamu disini" className="w-60 px-4" />
                </div>
            </div>

            <div className="flex justify-end mt-8 mb-4">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Pilih kotamu" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {regionData.trips.map((trip) => (
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
                            buttonLabel: "text-sm px-3 py-2 text-black font-semibold rounded-md hover:bg-black hover:text-utama transition  "
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
        </div>
    );
}

export default DomestikListPage;
