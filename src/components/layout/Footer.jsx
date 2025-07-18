import logo from "../../assets/logo-footer.png"
import { MapPin, Mail, Phone, Clock8, Instagram, Facebook} from "lucide-react"
export default function Footer() {
    return (
        <div className="flex flex-col items-center bg-kedua font-primary gap-4">
            <div className="grid grid-cols-3 py-8 gap-30">
                <div className="flex flex-col items-center space-y-4">
                    <img src={logo} className="w-100 mix-blend-multiply"></img>
                    <p className="font-semibold text-xl">Jelajahi semua tempat bersama kami</p>
                </div>

                <div className="py-2 space-y-4">
                    <h1 className="text-3xl font-bold mb-5">Kantor Pusat</h1>
                    <span className="flex items-center gap-4 text-xl font-semibold">
                        <MapPin size={28} />
                        <p>Ruko Gajahmada Square, Jl Juminahan <br/> No 26 H Yogyakarta 551112 Indonesia</p>
                    </span>
                    <span className="flex items-center gap-4 text-xl font-semibold">
                        <Mail size={28} />
                        <p>booking@Javatraveller.com</p>
                    </span>
                    <span className="flex items-center gap-4 text-xl font-semibold">
                        <Phone size={28} />
                        <p>0284-550-777</p>
                    </span>
                    <span className="flex items-center gap-4 text-xl font-semibold">
                        <Clock8 size={28} />
                        <p>Buka Setiap Hari 08:00 - 21.00</p>
                    </span>
                </div>

                <div className="py-2 space-y-4">
                    <h1 className="text-3xl font-bold mb-5">Sosial Media</h1>
                    <span className="flex gap-4">
                        <Instagram size={32} />
                        <Facebook size={32} />
                    </span>
                </div>

            </div>
            <p className="text-lg font-bold py-1 border-t-2 border-black w-full text-center">
                Copyright &copy; 2025 Java Traveller. All Rights Reserved
            </p>
        </div>
    )
}