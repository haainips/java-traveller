import jawa from "../../assets/domestik/borobudur.jpeg"
import sumatera from "../../assets/domestik/sumatera.jpeg"
import balilombok from "../../assets/domestik/balilombok.jpeg"
import ntt from "../../assets/domestik/ntt.jpeg"
import kalimantan from "../../assets/domestik/kalimantan.jpeg"
import sulawesi from "../../assets/domestik/sulawesi.jpeg"
import asia from "../../assets/internasional/asia.jpg"
import europe from "../../assets/internasional/europe.webp"
import africa from "../../assets/internasional/africa.jpg"
import america from "../../assets/internasional/america.jpeg"
import australia from "../../assets/internasional/australia.jpg"
import honeymoon from "../../assets/paket/honeymoon.jpg"
import studytour from "../../assets/paket/studytour.jpg"
import adventure from "../../assets/paket/adventure.jpg"
import RentalJogja from "../../assets/rental/sewa-mobil-jogja.png"
import RentalSemarang from "../../assets/rental/sewa-mobil-semarang.png"
import RentalJakarta from "../../assets/rental/sewa-mobil-jakarta.png"
import RentalBandung from "../../assets/rental/sewa-mobil-bandung.png"
import RentalBali from "../../assets/rental/sewa-mobil-bali.png"
import Yogya1 from "../../assets/domestik/jawa/yogya-1.jpg"
import Yogya2 from "../../assets/domestik/jawa/yogya-2.jpg"
import Yogya3 from "../../assets/domestik/jawa/yogya-3.jpg"
import Yogya4 from "../../assets/domestik/jawa/yogya-4.jpg"
import Yogya5 from "../../assets/domestik/jawa/yogya-5.jpg"
import Yogya6 from "../../assets/domestik/jawa/yogya-6.jpg"
import Pacitan from "../../assets/domestik/jawa/pacitan.jpg"
import Malang1 from "../../assets/domestik/jawa/malang-1.jpg"
import Malang2 from "../../assets/domestik/jawa/malang-2.jpg"
import KarimunJawa from "../../assets/domestik/jawa/karimun-jawa.jpg"
import Banyuwangi from "../../assets/domestik/jawa/banyuwangi.jpg"
import Bandung from "../../assets/domestik/jawa/bandung.jpg"
import Yogya1DetailTrip1 from "../../assets/domestik/jawa/yogya1-detail1.jpg"
import Yogya1DetailTrip2 from "../../assets/domestik/jawa/yogya1-detail2.png"
import Yogya1DetailTrip3 from "../../assets/domestik/jawa/yogya1-detail3.png" 

export const trips = {
    domestik: {
        jawa: {
            id: 1,
            image: jawa,
            description: "Rasakan pengalaman tak terlupakan di Jawa, pulau dengan warisan budaya terkaya di Indonesia, lengkap dengan kuliner lezat, seni tradisional yang memesona, dan keramahan penduduk lokal yang hangat",
            trips: [
                {
                    id: 1,
                    name: "Yogyakarta",
                    type: "Instagramable",
                    images: [
                        Yogya1,
                        Yogya1DetailTrip1,
                        Yogya1DetailTrip2,
                        Yogya1DetailTrip3
                    ],
                    topTitle: "3 Day Tour",
                    slug: "Jogja Adventure + Cycling",
                    duration: "3 Hari 2 Malam",
                    tripDestination: "Kraton - Malioboro - Pinus Mangunan - Watu Gubit",
                    priceperday: "IDR.424K/1 day",
                    pricetrip: "1.511.000",
                    ringkasan: "Jogjakarta sangat dikenal dengan budaya yang masih begitu kental dan memiliki banyak sekali obyek wisata yang menjadikan daya tarik wisata baik kunjungan wisatawan mancanegara maupun wisatawan domestik. Jogjakarta memiliki obyek wisata mulai dari budaya, edukasi, alam, sampai tempat-tempat yang instagramable. Sisi lain dari kota Jogjakarta yang terkenal dengan obyek-obyek wisatanya Jogjakarta juga menyuguhkan berbagai makanan tradional dan kerajinan tradisional.",
                    include: [
                        "Transportasi AC Privat",
                        "2X Makan Siang",
                        "Tiket Obyek Wisata",
                        "Tour Guide + Driver",
                        "Asuransi"
                    ],
                    exclude: [
                        "Tiket Pesawat",
                        "Akomodasi Hotel",
                        "Tipping Guide",
                        "Tour Tambahan",
                        "Pengeluaran Pribadi"
                    ],
                    itenary: [{
                        day1: [{
                            destination: "Gua Pindul - Ngobaran - Heha Ocean View",
                            description: "Pagi hari peserta dijemput di meeting point (Hotel/Stasiun/Bandara). Menuju ke Gunung Kidul terletak di selatan Yogyakarta. Cave tubing menyusuri gua alam di Gua Pindul. Makan siang di lokal restaurant. setelah itu menuju Pantai Ngobaran Balinya Jogja. Menikmati pemandangan laut lepas di tepi tebing yang indah dengan spot foto instagramble di Heha Ocean View."
                        }],
                        day2: [{
                            destination: "Cycling - Svargabumi - Borobudur",
                            description: "Pagi ini Cycling dengan rute yang menyusuri pegunungan Menoreh dengan pemandangan yang sangat indah. Makan siang dengan suasana pedesaan. Selanjutnya Mengunjungi Svargabumi wisata tengah sawah dengan spot instagramable. Mengunjungi candi Borobudur kuil Buddha terbesar yang menjadi situs warisan dunia UNESCO."
                        }],
                        day3: [{
                            destination: "Lava Tour - Malioboro",
                            description: "Pagi ini menuju Kaliurang di kaki gunung Merapi. Menikmati Lava Tour menyusuri aliran lava di lereng merapi dengan jeep (denan biaya sendiri / optional tour). Mengunjungi The Lost World Castle bangunan konsep kastil seperti di Eropa. Makan siang di lokal restaurant. Menikmati keindahan sunset dan view kota dari ketinggian di Heha Sky View. berbelanja oleh-oleh khas di Yogya di Malioboro. Diantar kembali ke meeting point (hotel/stasiun/bandara) Tour selesai dan Terimakasih"
                        }],

                    }]

                },
                {
                    id: 2,
                    name: "Yogyakarta",
                    type: "Instagramable",
                    images: [
                        Yogya2
                    ],
                    tripDestination: "Kraton - Malioboro - Pinus Mangunan - Watu Gubit",
                    priceperday: "IDR.876K/2 day",

                },
                {
                    id: 3,
                    name: "Yogyakarta",
                    type: "Adventure",
                    images: [
                        Yogya3
                    ],
                    tripDestination: "Kraton - Malioboro - Pinus Mangunan - Watu Gubit",
                    priceperday: "IDR.1.511K/3 days",

                },
                {
                    id: 4,
                    name: "Yogyakarta",
                    type: "Fun",
                    images: [
                        Yogya4
                    ],
                    tripDestination: "Kraton - Malioboro - Pinus Mangunan - Watu Gubit",
                    priceperday: "IDR.476K/1 day",

                },
                {
                    id: 5,
                    name: "Yogyakarta",
                    type: "Enjoy",
                    images: [
                        Yogya5
                    ],
                    tripDestination: "Kraton - Malioboro - Pinus Mangunan - Watu Gubit",
                    priceperday: "IDR.931K/2 day",

                },
                {
                    id: 6,
                    name: "Yogyakarta",
                    type: "Natural",
                    images: [
                        Yogya6
                    ],
                    tripDestination: "Kraton - Malioboro - Pinus Mangunan - Watu Gubit",
                    priceperday: "IDR.435K/1 day",

                },
                {
                    id: 7,
                    name: "Pacitan",
                    type: "Explore",
                    images: [
                        Pacitan
                    ],
                    tripDestination: "Gua Tabuhan - Gua Gong - Pantai Klayar - Sungai Maron",
                    priceperday: "Call for Price/2 days",
                },
                {
                    id: 8,
                    name: "Malang",
                    type: "Enjoy",
                    images: [
                        Malang1
                    ],
                    tripDestination: "Museum Angkut - BNS - Jatim Park 2 - Kawah Bromo",
                    priceperday: "Call for Price/2 days",
                },
                {
                    id: 9,
                    name: "Malang",
                    type: "Natural",
                    images: [
                        Malang2
                    ],
                    tripDestination: "Jatim Park 2 - Eco Green Park - Museum Angkut - BNS",
                    priceperday: "Call for Price/3 days",
                },
                {
                    id: 10,
                    name: "Karimun Jawa",
                    type: "Explore",
                    images: [
                        KarimunJawa
                    ],
                    tripDestination: "Gua Tabuhan - Gua Gong - Pantai Klayar - Sungai Maron",
                    priceperday: "Call for Price/2 days",
                },
                {
                    id: 11,
                    name: "Banyuwangi",
                    type: "Enjoy",
                    images: [
                        Banyuwangi
                    ],
                    tripDestination: "Museum Angkut - BNS - Jatim Park 2 - Kawah Bromo",
                    priceperday: "Call for Price/2 days",
                },
                {
                    id: 12,
                    name: "Bandung",
                    type: "Natural",
                    images: [
                        Bandung
                    ],
                    tripDestination: "Jatim Park 2 - Eco Green Park - Museum Angkut - BNS",
                    priceperday: "Call for Price/3 days",
                }
            ]
        },
        sumatera: {
            id: 2,
            image: sumatera,
            description: "Temukan surga tersembunyi di ujung barat Indonesia - Sumatera menghadirkan kombinasi sempurna antara keindahan alam yang menakjubkan, kekayaan budaya yang autentik, dan kuliner legendaris yang akan memanjakan lidah.",
            trips: [
                {

                }
            ]
        },
        balilombok: {
            id: 3,
            image: balilombok,
            description: "Rasakan keajaiban Pulau Dewata yang memadukan keindahan alam tropis, kearifan budaya Hindu yang mempesona, dan keramahan penduduk lokal yang tak terlupakan",
            trips: [
                {

                }
            ]
        },
        ntt: {
            id: 4,
            image: ntt,
            description: "Temukan surga tersembunyi di ujung timur Indonesia - Nusa Tenggara Timur menanti dengan pantai pink Komodo, danau tiga warna Kelimutu, dan petualangan bertemu naga purba di habitat aslinya",
            trips: [
                {

                }
            ]
        },
        kalimantan: {
            id: 5,
            image: kalimantan,
            description: "Bersiaplah terpesona dengan keindahan Raja Ampat-nya Kalimantan di Kepulauan Derawan, tempat penyu dan pari manta menari bebas di perairan kristal.",
            trips: [
                {

                }
            ]
        },
        sulawesi: {
            id: 6,
            image: sulawesi,
            description: "Sulawesi menanti petualangan Anda dengan budaya unik Toraja, diving spektakuler di Bunaken, dan keindahan alam yang belum terjamah di setiap sudutnya",
            trips: [
                {

                }
            ]
        }
    },
    internasional: {
        asia: {
            id: 1,
            image: asia,
            description: "Rasakan keajaiban Pulau Dewata yang memadukan keindahan alam tropis, kearifan budaya Hindu yang mempesona, dan keramahan penduduk lokal yang tak terlupakan",
            trips: [
                {

                }
            ]
        },
        europe: {
            id: 2,
            image: europe,
            description: "Temukan surga tersembunyi di ujung barat Indonesia - Sumatera menghadirkan kombinasi sempurna antara keindahan alam yang menakjubkan, kekayaan budaya yang autentik, dan kuliner legendaris yang akan memanjakan lidah.",
            trips: [
                {

                }
            ]
        },
        africa: {
            id: 3,
            image: africa,
            description: "Rasakan keajaiban Pulau Dewata yang memadukan keindahan alam tropis, kearifan budaya Hindu yang mempesona, dan keramahan penduduk lokal yang tak terlupakan",
            trips: [
                {

                }
            ]
        },
        america: {
            id: 4,
            image: america,
            description: "Temukan surga tersembunyi di ujung barat Indonesia - Sumatera menghadirkan kombinasi sempurna antara keindahan alam yang menakjubkan, kekayaan budaya yang autentik, dan kuliner legendaris yang akan memanjakan lidah.",
            trips: [
                {

                }
            ]
        },
        australia: {
            id: 5,
            image: australia,
            description: "Bersiaplah terpesona dengan keindahan Raja Ampat-nya Kalimantan di Kepulauan Derawan, tempat penyu dan pari manta menari bebas di perairan kristal.",
            trips: [
                {

                }
            ]
        }
    },
    paket: {
        honeymoon: {
            id: 1,
            image: honeymoon,
            harga: "5.160.000",
            trip: [
                {

                }
            ]
        },
        studytour: {
            id: 2,
            image: studytour,
            harga: "5.160.000",
            trip: [
                {

                }
            ]
        },
        adventure: {
            id: 3,
            image: adventure,
            harga: "5.160.000",
            trip: [
                {

                }
            ]
        }
    },
    rental: {
        jogja: {
            id: 1,
            text: "Sewa Mobil Yogya",
            image: RentalJogja,
            description: "Sewa Mobil Yogya murah menjadi opsi terbaik di segala kebutuhanmu. Dapatkan tarif rental mobil 100 ribuan hanya di Java Traveler, selain itu ada pilihan sewa mobil jogja lepas atau dengan sopir ramah dan berpengalaman. Kami menawarkan berbagai jenis rental mobil Jogja yang siap sedia untuk segala kebutuhan Anda untuk acara keluarga, dinas, wedding, wisuda atau berwisata dengan jarak jauh maupun dekat. Anda bisa memilih sewa mobil Jogja per 6 jam, 8 jam, 1 hari, mingguan hingga bulanan.Berikut harga sewa mobil di Jogja 2025 serta fasilitas dari Java Traveler dari sewa mobil Yogya terbaik & termurah",
            tipe: [
                {
                    id: 1,
                    mobil: "Kijang Inova Reborn",
                    image: RentalJogja,
                },
                {
                    id: 2,
                    mobil: "Terios New",
                    image: RentalJogja,
                },
                {
                    id: 3,
                    mobil: "Inova Reborn Diesel",
                    image: RentalJogja,
                },
                {
                    id: 4,
                    mobil: "Honda Brio",
                    image: RentalJogja,
                },
                {
                    id: 5,
                    mobil: "Hiace Commuter",
                    image: RentalJogja,
                },
                {
                    id: 6,
                    mobil: "Hiace Premio",
                    image: RentalJogja,
                },
            ]
        },
        semarang: {
            id: 2,
            text: "Sewa Mobil Semarang",
            image: RentalSemarang,
            description: "Sewa Mobil Semarang murah menjadi opsi terbaik di segala kebutuhanmu. Dapatkan tarif rental mobil 100 ribuan hanya di Java Traveler, selain itu ada pilihan sewa mobil jogja lepas atau dengan sopir ramah dan berpengalaman. Kami menawarkan berbagai jenis rental mobil Jogja yang siap sedia untuk segala kebutuhan Anda untuk acara keluarga, dinas, wedding, wisuda atau berwisata dengan jarak jauh maupun dekat. Anda bisa memilih sewa mobil Jogja per 6 jam, 8 jam, 1 hari, mingguan hingga bulanan.Berikut harga sewa mobil di Jogja 2025 serta fasilitas dari Java Traveler dari sewa mobil Yogya terbaik & termurah",
            tipe: [
                {
                    id: 1,
                    mobil: "Kijang Inova Reborn",
                    image: RentalJogja,
                },
                {
                    id: 2,
                    mobil: "Terios New",
                    image: RentalJogja,
                },
                {
                    id: 3,
                    mobil: "Inova Reborn Diesel",
                    image: RentalJogja,
                },
                {
                    id: 4,
                    mobil: "Honda Brio",
                    image: RentalJogja,
                },
                {
                    id: 5,
                    mobil: "Hiace Commuter",
                    image: RentalJogja,
                },
                {
                    id: 6,
                    mobil: "Hiace Premio",
                    image: RentalJogja,
                },
            ]
        },
        jakarta: {
            id: 3,
            text: "Sewa Mobil Jakarta",
            image: RentalJakarta,
            description: "Sewa Mobil Jakarta murah menjadi opsi terbaik di segala kebutuhanmu. Dapatkan tarif rental mobil 100 ribuan hanya di Java Traveler, selain itu ada pilihan sewa mobil jogja lepas atau dengan sopir ramah dan berpengalaman. Kami menawarkan berbagai jenis rental mobil Jogja yang siap sedia untuk segala kebutuhan Anda untuk acara keluarga, dinas, wedding, wisuda atau berwisata dengan jarak jauh maupun dekat. Anda bisa memilih sewa mobil Jogja per 6 jam, 8 jam, 1 hari, mingguan hingga bulanan.Berikut harga sewa mobil di Jogja 2025 serta fasilitas dari Java Traveler dari sewa mobil Yogya terbaik & termurah",
            tipe: [
                {
                    id: 1,
                    mobil: "Kijang Inova Reborn",
                    image: RentalJogja,
                },
                {
                    id: 2,
                    mobil: "Terios New",
                    image: RentalJogja,
                },
                {
                    id: 3,
                    mobil: "Inova Reborn Diesel",
                    image: RentalJogja,
                },
                {
                    id: 4,
                    mobil: "Honda Brio",
                    image: RentalJogja,
                },
                {
                    id: 5,
                    mobil: "Hiace Commuter",
                    image: RentalJogja,
                },
                {
                    id: 6,
                    mobil: "Hiace Premio",
                    image: RentalJogja,
                },
            ]
        },
        bandung: {
            id: 4,
            text: "Sewa Mobil Bandung",
            image: RentalBandung,
            description: "Sewa Mobil Bandung murah menjadi opsi terbaik di segala kebutuhanmu. Dapatkan tarif rental mobil 100 ribuan hanya di Java Traveler, selain itu ada pilihan sewa mobil jogja lepas atau dengan sopir ramah dan berpengalaman. Kami menawarkan berbagai jenis rental mobil Jogja yang siap sedia untuk segala kebutuhan Anda untuk acara keluarga, dinas, wedding, wisuda atau berwisata dengan jarak jauh maupun dekat. Anda bisa memilih sewa mobil Jogja per 6 jam, 8 jam, 1 hari, mingguan hingga bulanan.Berikut harga sewa mobil di Jogja 2025 serta fasilitas dari Java Traveler dari sewa mobil Yogya terbaik & termurah",
            tipe: [
                {
                    id: 1,
                    mobil: "Kijang Inova Reborn",
                    image: RentalJogja,
                },
                {
                    id: 2,
                    mobil: "Terios New",
                    image: RentalJogja,
                },
                {
                    id: 3,
                    mobil: "Inova Reborn Diesel",
                    image: RentalJogja,
                },
                {
                    id: 4,
                    mobil: "Honda Brio",
                    image: RentalJogja,
                },
                {
                    id: 5,
                    mobil: "Hiace Commuter",
                    image: RentalJogja,
                },
                {
                    id: 6,
                    mobil: "Hiace Premio",
                    image: RentalJogja,
                },
            ]
        },
        bali: {
            id: 5,
            text: "Sewa Mobil Bali",
            image: RentalBali,
            description: "Sewa Mobil Bali murah menjadi opsi terbaik di segala kebutuhanmu. Dapatkan tarif rental mobil 100 ribuan hanya di Java Traveler, selain itu ada pilihan sewa mobil jogja lepas atau dengan sopir ramah dan berpengalaman. Kami menawarkan berbagai jenis rental mobil Jogja yang siap sedia untuk segala kebutuhan Anda untuk acara keluarga, dinas, wedding, wisuda atau berwisata dengan jarak jauh maupun dekat. Anda bisa memilih sewa mobil Jogja per 6 jam, 8 jam, 1 hari, mingguan hingga bulanan.Berikut harga sewa mobil di Jogja 2025 serta fasilitas dari Java Traveler dari sewa mobil Yogya terbaik & termurah",
            tipe: [
                {
                    id: 1,
                    mobil: "Kijang Inova Reborn",
                    image: RentalJogja,
                },
                {
                    id: 2,
                    mobil: "Terios New",
                    image: RentalJogja,
                },
                {
                    id: 3,
                    mobil: "Inova Reborn Diesel",
                    image: RentalJogja,
                },
                {
                    id: 4,
                    mobil: "Honda Brio",
                    image: RentalJogja,
                },
                {
                    id: 5,
                    mobil: "Hiace Commuter",
                    image: RentalJogja,
                },
                {
                    id: 6,
                    mobil: "Hiace Premio",
                    image: RentalJogja,
                },
            ]
        }
    }
}