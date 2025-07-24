import logo from "../../assets/Javatraveller-logo.png"
import "../../App.css"
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { trips } from "../../lib/data/trip"
export default function Navbar() {
    const location = useLocation();
    const packagesData = Object.entries(trips.paket);
    const isScrollablePage = location.pathname === '/' || location.pathname === '/Trip';

    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between items-center px-20 py-6 font-primary border-b border-gray-200">
                <div className="w-60">
                    <img src={logo} className="w-fit"></img>
                </div>
                <div className="flex lg:text-md lg:gap-2 font-semibold">
                    <Link to="/" className="px-2 py-1 rounded-lg hover:bg-utama transition">Home</Link>

                    {isScrollablePage ? (
                        <>
                            <a href="#domestik" className="px-2 py-1 rounded-lg hover:bg-utama transition">Domestic</a>
                            <a href="#internasional" className="px-2 py-1 rounded-lg hover:bg-utama transition">International</a>
                        </>
                    ) : (
                        <>
                            <Link to="/Trip#domestik" className="px-2 py-1 rounded-lg hover:bg-utama transition">Domestic</Link>
                            <Link to="/Trip#internasional" className="px-2 py-1 rounded-lg hover:bg-utama transition">International</Link>
                        </>
                    )}

                    <div className="relative group">
                        <span className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-utama transition cursor-pointer">
                            Paket Tour
                            <ChevronDown className="transition group-hover:rotate-180" />
                        </span>

                        {/* Dropdown */}
                        <div className="absolute hidden group-hover:block left-0 w-50 pt-1 z-50 ">
                            <div className="h-1 pointer-events-none"></div>
                            <div className="bg-white shadow-lg rounded-lg hover:rounded-lg flex flex-col pointer-events-auto border-2 border-gray-300">
                                {packagesData.map(([packageKey, packageData]) => (
                                    <Link key={packageKey} to={`/Trip/${packageKey}`} className="px-6 py-2 hover:bg-utama hover:rounded-md text-md capitalize">{packageData[packageKey] || packageKey}</Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/Sewa-mobil" className="px-2 py-1 rounded-lg hover:bg-utama transition">Sewa Mobil</Link>
                    <a href="#footer" className="px-2 py-1 rounded-lg hover:bg-utama transition">Hubungi Kami</a>
                </div>
            </div>
        </div>
    );
}