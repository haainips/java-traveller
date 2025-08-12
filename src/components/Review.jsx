import { Star } from "lucide-react";
import Profile1 from "../assets/review/profile1.png";
import Profile2 from "../assets/review/profile2.jpg";
import Profile3 from "../assets/review/profile3.png";
import Profile4 from "../assets/review/profile4.png";

export default function Review() {
    return (
        <section className="font-primary py-10">
            <span className="font-bold lg:text-3xl space-y-2 text-center">
                <h1>Ulasan Pengguna Menggunakan Pelayanan</h1>
                <h2 className="text-utama">Java Traveller</h2>
            </span>

            <div className="grid grid-cols-4 gap-4 py-10 px-20 mx-auto">

                <div className="flex flex-col space-y-4 drop-shadow-xl border-1 border-gray-300 px-4 py-6 rounded-2xl pb-24">
                    <div className="flex justify-start gap-6">
                        <img src={Profile1} className="rounded-full bg-gray-300 w-14 h-14"></img>
                        <span className="text-sm">
                            <h1 className="font-medium text-black">Akira Hengki</h1>
                            <p className="font-medium text-utama">2024-04-14</p>
                            <span className="flex justify-center gap-1 mt-2 mb-2">
                                <Star fill="#FFA600" stroke="#FFA600" size={20}/>
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                            </span>
                        </span>
                    </div>
                    <p className="text-justify text-sm">Di java bisa pesen tiket pesawat.. Paket tour dalam dan luar negeri.. Paket ziarah.. Pake eropa muslim dengan harga terjangkau... Mau sewa mobil atau bis juga bisa....</p>
                </div>
                <div className="flex flex-col space-y-4 drop-shadow-xl border-1 border-gray-300 px-4 py-6 rounded-2xl">
                    <div className="flex justify-start gap-6">
                        <img src={Profile2} className="rounded-full bg-gray-300 w-14 h-14"></img>
                        <span className="text-sm">
                            <h1 className="font-medium text-black">Toni</h1>
                            <p className="font-medium text-utama">2024-04-14</p>
                            <span className="flex justify-center gap-1 mt-2 mb-2">
                                <Star fill="#FFA600" stroke="#FFA600" size={20}/>
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                            </span>
                        </span>
                    </div>
                    <p className="text-justify text-sm">Terimakasih Java Traveller Yogyakarta. Atas keseruan liburan kami sekeluarga. Kami merasa puas. Mulai dari pemesanan bersama Mbak Fani, penjemputan di stasiun, wisata 3 hari dan pengantaran pulang ke stasiun bersama Mas Marcel yg selalu tepat</p>
                </div>
                <div className="flex flex-col space-y-4 drop-shadow-xl border-1 border-gray-300 px-4 py-6 rounded-2xl">
                    <div className="flex justify-start gap-6">
                        <img src={Profile3} className="rounded-full bg-gray-300 w-14 h-14"></img>
                        <span className="text-sm">
                            <h1 className="font-medium text-black">Nanong Nury</h1>
                            <p className="font-medium text-utama">2024-04-14</p>
                            <span className="flex justify-center gap-1 mt-2 mb-2">
                                <Star fill="#FFA600" stroke="#FFA600" size={20}/>
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="white" stroke="gray" size={20} />
                                <Star fill="white" stroke="gray" size={20} />
                            </span>
                        </span>
                    </div>
                    <p className="text-justify text-sm">Di java bisa pesen tiket pesawat.. Paket tour dalam dan luar negeri.. Paket ziarah.. Pake eropa muslim dengan harga terjangkau</p>
                </div>
                <div className="flex flex-col space-y-4 drop-shadow-xl border-1 border-gray-300 px-4 py-6 rounded-2xl">
                    <div className="flex justify-start gap-6">
                        <img src={Profile4} className="rounded-full bg-gray-300 w-14 h-14"></img>
                        <span className="text-sm">
                            <h1 className="font-medium text-black">Yuli</h1>
                            <p className="font-medium text-utama">2024-04-14</p>
                            <span className="flex justify-center gap-1 mt-2 mb-2">
                                <Star fill="#FFA600" stroke="#FFA600" size={20}/>
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="#FFA600" stroke="#FFA600" size={20} />
                                <Star fill="white" stroke="gray" size={20} />
                            </span>
                        </span>
                    </div>
                    <p className="text-justify text-sm">Biro perjalanan wisata Jogja.. recommended kebutuhan wisata Indonesia</p>
                </div>
                
                
            </div>
        </section>
    )
}