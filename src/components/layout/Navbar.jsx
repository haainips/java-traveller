import logo from "../../assets/Javatraveller-logo.png";
import "../../App.css";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { trips } from "../../lib/data/trip";

export default function Navbar() {
    const location = useLocation();
    const packagesData = Object.entries(trips.paket);
    const isScrollablePage = location.pathname === '/' || location.pathname === '/Trip';

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

    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between items-center px-20 py-6 font-primary border-b border-gray-200">
                <div className="w-60">
                    <img src={logo} className="w-fit" alt="Java Traveller Logo" />
                </div>
                <div className="flex lg:text-md lg:gap-2 font-semibold items-center">

                    {/* Bug Fix 1: Link "Home" disederhanakan */}
                    <Link to="/" className="px-2 py-1 rounded-lg hover:bg-utama transition">Home</Link>

                    {isScrollablePage ? (
                        <>
                            <a href="#domestik" onClick={handleAnchorClick} className="px-2 py-1 rounded-lg hover:bg-utama transition">Domestic</a>
                            <a href="#internasional" onClick={handleAnchorClick} className="px-2 py-1 rounded-lg hover:bg-utama transition">International</a>
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

                        <div className="absolute hidden group-hover:block left-0 w-50 pt-1 z-50">
                            <div className="h-1 pointer-events-none"></div>
                            <div className="bg-white shadow-lg rounded-lg flex flex-col pointer-events-auto border-2 border-gray-300">
                                {/* Bug Fix 2: Perbaikan logika mapping */}
                                {packagesData.map(([packageKey]) => (
                                    <Link key={packageKey} to={`/Trip/${packageKey}`} className="px-6 py-2 hover:bg-utama hover:rounded-md text-md capitalize">{packageKey}</Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/sewa-mobil" className="px-2 py-1 rounded-lg hover:bg-utama transition">Sewa Mobil</Link>

                    {/* Bug Fix 3: Menambahkan onClick handler */}
                    <a href="#footer" onClick={handleAnchorClick} className="px-2 py-1 rounded-lg hover:bg-utama transition">Hubungi Kami</a>
                </div>
            </div>
        </div>
    );
}