import logo from "../../assets/logo.png"
import "../../App.css"
export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-20 py-4 font-primary">
            <div className="w-80">
                <img src={logo} className="w-fit"></img>
            </div>
            <div className="flex text-xl gap-6 font-semibold">
                <span className="px-2 py-1 rounded-lg hover:bg-utama transition">Home</span>
                <a className="px-2 py-1 rounded-lg hover:bg-utama transition">Domestic</a>
                <a className="px-2 py-1 rounded-lg hover:bg-utama transition">International</a>
                <span className="px-2 py-1 rounded-lg hover:bg-utama transition">Paket Tour</span>
                <a className="px-2 py-1 rounded-lg hover:bg-utama transition">Sewa Mobil</a>
                <a className="px-2 py-1 rounded-lg hover:bg-utama transition">Hubungi Kami</a>
            </div>
        </div>
    );
}