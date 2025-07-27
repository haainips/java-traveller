import logo from "../../assets/Javatraveller-logo.png"
import { MapPin, Mail, Phone, Clock8, Instagram, Facebook, Youtube } from "lucide-react"
import Whatsapp from "../../assets/whatsapp.png"
export default function Footer() {
    return (
        <div id="footer" className="flex flex-col items-center bg-kedua font-primary">
            <div className="grid grid-cols-3 py-6 pb-8 gap-30">
                <div className="flex flex-col items-center space-y-4">
                    <img src={logo} className="w-80 mix-blend-multiply"></img>
                    <p className="font-semibold lg:text-md text-center">Jelajahi semua tempat<br/> bersama kami</p>
                </div>

                <div className="py-2 space-y-2">
                    <h1 className="text-xl font-bold mb-5">Kantor Pusat</h1>
                    <span className="flex items-center gap-4 lg:text-md font-semibold">
                        <MapPin size={24} fill="black" stroke="#FFA600" />
                        <p>Ruko Gajahmada Square, Jl Juminahan <br/> No 26 H Yogyakarta 551112 Indonesia</p>
                    </span>
                    <span className="flex items-center gap-4 lg:text-md font-semibold">
                        <Mail size={24} />
                        <p>booking@Javatraveller.com</p>
                    </span>
                    <span className="flex items-center gap-4 lg:text-md font-semibold">
                        <Phone size={24} />
                        <p>0274-550-777</p>
                    </span>
                    <span className="flex items-center gap-4 lg:text-md font-semibold">
                        <img src={Whatsapp} className="w-6" />
                        <p>0818-0909-1929</p>
                    </span>
                    <span className="flex items-center gap-4 lg:text-md font-semibold">
                        <Clock8 size={24} />
                        <p>Buka Setiap Hari 08:00 - 21.00</p>
                    </span>
                </div>

                <div className="py-2 space-y-4">
                    <h1 className="text-xl font-bold mb-5">Sosial Media</h1>
                    <span className="flex gap-4">
                        <span className="rounded-full bg-gray-200/60 py-2 px-2"><Instagram size={24} /> </span>
                        <span className="rounded-full bg-gray-200/60 py-2 px-2"><Facebook size={24} /></span>
                        <span className="rounded-full bg-gray-200/60 py-2 px-2"><Youtube size={24} /></span>
                    </span>
                </div>

            </div>
            <p className="text-sm font-semibold py-1 border-t-2 border-black w-full text-center">
                Copyright &copy; 2025 Java Traveller. All Rights Reserved
            </p>
        </div>
    )
}