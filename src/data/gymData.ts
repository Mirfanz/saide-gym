export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  period: string;
  originalPrice?: string;
  savings?: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
  waMessage: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  items: string[];
  icon: string;
  tag: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
  initials: string;
  avatarColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const GYM_INFO = {
  name: "SAIDE GYM",
  tagline: "Pusat Kebugaran & Fitness Sukaluyu, Karawang",
  subTagline:
    "Fasilitas lengkap, suasana nyaman & bersih, ramah pemula, dan bimbingan coach berpengalaman dengan tarif paling terjangkau di Karawang.",
  phone: "081284182622",
  phoneIntl: "6281284182622",
  address: "Jl. Kalikalapa No. RT 06/03, Desa Sukaluyu, Kec. Telukjambe Timur, Kab. Karawang, Jawa Barat 41361",
  addressShort: "Sukaluyu, Telukjambe Timur, Karawang",
  hours: "Setiap Hari (Senin – Minggu) 08:00 – 22:00 WIB",
  openHour: 8,
  closeHour: 22,
  mapsUrl: "https://share.google/d1almTyksNyb19Qug",
  mapsEmbedQuery: "Saide+Gym+Karawang+Sukaluyu",
  instagramUrl: "https://www.instagram.com/saidegym",
  instagramHandle: "@saidegym",
  tiktokUrl: "https://www.tiktok.com/@saidegym",
  tiktokHandle: "@saidegym",
  linktreeUrl: "https://linktr.ee/saidegym",
  rating: 4.9,
  reviewCount: 38,
};

export const MEMBERSHIP_PLANS: PricingPlan[] = [
  {
    id: "visit-daily",
    name: "Visit Harian",
    price: 15000,
    priceDisplay: "Rp 15.000",
    period: "per kedatangan",
    description: "Pilihan fleksibel tanpa ikatan untuk Anda yang ingin coba suasana atau berolahraga sewaktu-waktu.",
    features: [
      "Akses penuh seluruh alat gym",
      "Bebas pakai fasilitas loker",
      "Tanpa biaya registrasi awal",
      "Konsultasi singkat penggunaan alat",
      "Cocok untuk pemula & visitor luar kota",
    ],
    ctaText: "Mulai Latihan Hari Ini",
    waMessage: "Halo Admin Saide Gym, saya mau tanya untuk visit latihan harian (15k) hari ini. Buka sampai jam berapa ya?",
  },
  {
    id: "member-1m",
    name: "Member 1 Bulan",
    price: 115000,
    priceDisplay: "Rp 115.000",
    period: "per bulan",
    description: "Paket standar bulanan untuk membangun konsistensi latihan rutin dengan biaya sangat hemat.",
    features: [
      "Akses UNLIMITED 30 hari penuh",
      "Bebas datang kapan saja (08:00 - 22:00)",
      "Bebas akses seluruh zona alat & cardio",
      "Fasilitas loker aman & ruang ganti",
      "Bimbingan postur dasar dari coach",
      "Tanpa biaya admin / perpanjangan tersembunyi",
    ],
    ctaText: "Daftar Member 1 Bulan",
    waMessage: "Halo Admin Saide Gym, saya ingin mendaftar Member 1 Bulan (Rp 115.000). Bagaimana prosedur pendaftarannya?",
  },
  {
    id: "member-3m",
    name: "Member 3 Bulan",
    price: 330000,
    priceDisplay: "Rp 330.000",
    period: "3 bulan",
    originalPrice: "Rp 345.000",
    savings: "Hemat Rp 15.000 (Rp 110.000/bln)",
    badge: "Paling Populer",
    popular: true,
    description: "Paling direkomendasikan untuk target transformasi tubuh nyata dan pembentukan kebiasaan hidup sehat.",
    features: [
      "Akses UNLIMITED 90 hari penuh",
      "Hemat Rp 15.000 dibanding bulanan",
      "Bebas akses seluruh zona alat latihan",
      "Prioritas penggunaan fasilitas loker",
      "Panduan rekomendasi split latihan",
      "Komunitas olahraga yang suportif",
    ],
    ctaText: "Pilih Paket 3 Bulan",
    waMessage: "Halo Admin Saide Gym, saya tertarik mendaftar Paket Promo Member 3 Bulan (Rp 330.000). Mohon info pendaftarannya.",
  },
  {
    id: "member-6m",
    name: "Member 6 Bulan",
    price: 650000,
    priceDisplay: "Rp 650.000",
    period: "6 bulan",
    originalPrice: "Rp 690.000",
    savings: "Hemat Rp 40.000 (~Rp 108.000/bln)",
    badge: "Super Hemat",
    description: "Pilihan terbaik untuk Anda yang berkomitmen serius dalam jangka panjang dengan harga termurah.",
    features: [
      "Akses UNLIMITED 180 hari penuh",
      "Tarif paling hemat per bulannya",
      "Akses bebas 7 hari seminggu",
      "Konsultasi progres latihan berkala",
      "Fasilitas loker & area istirahat",
      "Investasi kebugaran terbaik",
    ],
    ctaText: "Ambil Paket 6 Bulan",
    waMessage: "Halo Admin Saide Gym, saya ingin mengambil Paket Member 6 Bulan (Rp 650.000). Apakah bisa dibantu prosesnya?",
  },
];

export const PT_PLANS: PricingPlan[] = [
  {
    id: "pt-1",
    name: "1 Sesi Trial PT",
    price: 80000,
    priceDisplay: "Rp 80.000",
    period: "1 sesi privat",
    badge: "Termasuk Free Visit",
    description: "Coba pengalaman didampingi trainer privat untuk koreksi teknik, postur, dan pengenalan gerakan aman.",
    features: [
      "1x Sesi Privat (1-on-1) intensif",
      "FREE Biaya Visit Harian",
      "Analisis postur & evaluasi tubuh",
      "Koreksi form gerakan angkat beban",
      "Penjelasan fungsi alat yang tepat",
    ],
    ctaText: "Coba Sesi PT",
    waMessage: "Halo Coach Saide Gym, saya mau booking 1 Sesi Personal Trainer (Rp 80.000 termasuk free visit). Jadwal kosong kapan ya?",
  },
  {
    id: "pt-5",
    name: "5 Sesi Privat PT",
    price: 400000,
    priceDisplay: "Rp 400.000",
    period: "5 sesi privat",
    badge: "FREE 1 Bulan Member",
    description: "Pendampingan terarah untuk pemula yang ingin memahami program latihan dasar dengan benar.",
    features: [
      "5x Sesi Privat (1-on-1) terarah",
      "FREE 1 Bulan Membership Gym (Hemat Rp 115k)",
      "Penyusunan jadwal & split latihan",
      "Bimbingan teknik & tempo angkatan",
      "Konsultasi nutrisi & pola makan dasar",
    ],
    ctaText: "Pilih 5 Sesi PT",
    waMessage: "Halo Admin & Coach Saide Gym, saya ingin mendaftar paket 5 Sesi PT + Free 1 Bulan Member (Rp 400.000). Mohon infonya.",
  },
  {
    id: "pt-10",
    name: "10 Sesi Pro PT",
    price: 700000,
    priceDisplay: "Rp 700.000",
    period: "10 sesi privat",
    badge: "Rekomendasi Coach",
    popular: true,
    savings: "FREE 1 Bulan Member",
    description: "Paket paling ideal untuk akselerasi hasil: penurunan lemak (*fat loss*) atau peningkatan massa otot (*muscle gain*).",
    features: [
      "10x Sesi Privat (1-on-1) terstruktur",
      "FREE 1 Bulan Membership Gym (Hemat Rp 115k)",
      "Custom workout plan sesuai target fisik",
      "Pemantauan form & progres beban",
      "Panduan kalori & makronutrisi harian",
      "Motivasi & push limit yang aman",
    ],
    ctaText: "Pilih 10 Sesi PT",
    waMessage: "Halo Coach Saide Gym, saya tertarik mengambil paket 10 Sesi PT + Free 1 Bulan Member (Rp 700.000). Boleh info trainer yang ready?",
  },
  {
    id: "pt-15",
    name: "15 Sesi Intensif PT",
    price: 850000,
    priceDisplay: "Rp 850.000",
    period: "15 sesi privat",
    badge: "Best Deal",
    savings: "FREE 1 Bulan Member",
    description: "Bimbingan mendalam hingga Anda menguasai seluruh teknik dan mandiri dalam berolahraga.",
    features: [
      "15x Sesi Privat (1-on-1) intensif",
      "FREE 1 Bulan Membership Gym (Hemat Rp 115k)",
      "Pemeriksaan progres berkala",
      "Pelatihan progressive overload terukur",
      "Dukungan konsultasi harian via WhatsApp",
    ],
    ctaText: "Pilih 15 Sesi PT",
    waMessage: "Halo Admin Saide Gym, saya ingin mendaftar paket 15 Sesi PT + Free 1 Bulan Member (Rp 850.000). Bagaimana jadwal latihannya?",
  },
  {
    id: "pt-30",
    name: "30 Sesi Total Transform",
    price: 1650000,
    priceDisplay: "Rp 1.650.000",
    period: "30 sesi privat",
    badge: "FREE 2 Bulan Member",
    savings: "Hemat Ekstra + Free 2 Bulan",
    description: "Pendampingan transformasi tubuh menyeluruh dengan garansi pendampingan konsisten selama berbulan-bulan.",
    features: [
      "30x Sesi Privat (1-on-1) komprehensif",
      "FREE 2 Bulan Membership Gym (Hemat Rp 230k)",
      "Transformasi tubuh total (Body Recomposition)",
      "Pelacakan pengukuran lingkar & berat badan",
      "Meal plan & pendampingan gaya hidup bugar",
      "Prioritas booking jadwal coach",
    ],
    ctaText: "Pilih 30 Sesi PT",
    waMessage: "Halo Coach Saide Gym, saya ingin berkomitmen di paket 30 Sesi PT + Free 2 Bulan Member (Rp 1.650.000). Mohon panduan konsultasi awalnya.",
  },
];

export const FACILITIES: Facility[] = [
  {
    id: "free-weights",
    title: "Zona Free Weights & Dumbbell",
    category: "Strength Training",
    description:
      "Koleksi dumbbell dari beban ringan (1kg) hingga berat, barbell standar Olympic, serta variasi bench press (flat, incline, decline) untuk melatih otot secara maksimal.",
    items: [
      "Dumbbell Rack lengkap berbagai ukuran",
      "Olympic Barbell & Weight Plates berkualitas",
      "Adjustable Flat, Incline & Decline Benches",
      "Squat Rack untuk latihan kaki yang kokoh & aman",
    ],
    icon: "dumbbell",
    tag: "Lengkap & Kokoh",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cable-machines",
    title: "Zona Machine & Cable Crossover",
    category: "Hypertrophy & Isolation",
    description:
      "Peralatan mesin beban ergonomis yang aman dan efektif untuk isolasi otot dada, punggung, bahu, dan kaki tanpa risiko tertimpa beban.",
    items: [
      "Dual Cable Crossover Station",
      "Lat Pulldown & Seated Cable Row",
      "Chest Press & Shoulder Press Machine",
      "Leg Press, Leg Extension & Leg Curl",
      "Smith Machine untuk latihan terkontrol",
    ],
    icon: "cables",
    tag: "Aman untuk Pemula",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cardio-zone",
    title: "Zona Cardio & Fat Burning",
    category: "Stamina & Cardio",
    description:
      "Tingkatkan kesehatan jantung dan bakar kalori dengan alat cardio yang siap digunakan untuk pemanasan atau sesi pendinginan.",
    items: [
      "Treadmill bertenaga dengan pengaturan kemiringan",
      "Stationary Exercise Bikes",
      "Area skipping rope / jump rope",
    ],
    icon: "flame",
    tag: "Pembakaran Kalori",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "coach-support",
    title: "Bimbingan Trainer & Ramah Pemula",
    category: "Personal Coaching",
    description:
      "Tidak perlu canggung atau bingung! Coach kami selalu siap di area gym untuk mengoreksi gerakan dan memastikan Anda berlatih dengan benar.",
    items: [
      "Coach ramah, sabar & mudah diajak bicara",
      "Bimbingan gratis pengoperasian alat untuk member baru",
      "Pilihan paket Personal Trainer (1-on-1) intensif",
      "Suasana latihan tanpa intimidasi",
    ],
    icon: "users",
    tag: "Friendly Coach",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "amenities",
    title: "Fasilitas Pendukung & Kenyamanan",
    category: "Convenience",
    description:
      "Kenyamanan Anda adalah prioritas. Kami menyediakan fasilitas bersih dan memadai untuk menunjang aktivitas olahraga sehari-hari.",
    items: [
      "Loker penyimpanan barang bawaan",
      "Ruang ganti pakaian yang bersih",
      "Sirkulasi udara baik & kipas/pendingin",
      "Parkir motor & mobil yang aman",
    ],
    icon: "shield",
    tag: "Bersih & Nyaman",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Rizky Pratama",
    role: "Member Rutin (Warga Sukaluyu)",
    rating: 5,
    timeAgo: "2 minggu lalu",
    comment:
      "Gym paling worth it di Telukjambe Karawang! Alatnya lengkap banget, suasananya ramah buat pemula, gak ada yang sok jago. Coach-nya juga suka bantuin kalau form gerakan salah. Mantap Saide Gym!",
    source: "Google Maps Review",
    initials: "RP",
    avatarColor: "from-red-600 to-rose-700",
  },
  {
    id: "rev-2",
    author: "Dimas Anggara",
    role: "Member 6 Bulan",
    rating: 5,
    timeAgo: "1 bulan lalu",
    comment:
      "Tarif 115k sebulan bener-bener ramah di kantong buruh pabrik dan mahasiswa Karawang. Fasilitas bersih, dumbel gak karatan, buka dari pagi sampai jam 10 malem jadi bisa latihan pulang shift.",
    source: "Google Maps Review",
    initials: "DA",
    avatarColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "rev-3",
    author: "Siti Rahmawati",
    role: "Klien Personal Trainer",
    rating: 5,
    timeAgo: "1 bulan lalu",
    comment:
      "Awalnya ragu ke gym karena cewek dan belum pernah angkat beban. Ambil paket PT di Saide Gym langsung diajarin dari nol dengan sabar. Sekarang udah turun 4 kg dalam sebulan!",
    source: "Google Maps Review",
    initials: "SR",
    avatarColor: "from-purple-500 to-pink-600",
  },
  {
    id: "rev-4",
    author: "Ahmad Fauzi",
    role: "Visitor Harian",
    rating: 5,
    timeAgo: "3 minggu lalu",
    comment:
      "Visit harian cuma 15 ribu bebas main sepuasnya. Parkiran luas dan lokasinya gampang dicari di Kalikalapa Sukaluyu. Recommended banget buat warga Karawang.",
    source: "Google Maps Review",
    initials: "AF",
    avatarColor: "from-amber-500 to-orange-600",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Apakah pemula yang baru pertama kali ke gym akan dibimbing?",
    answer:
      "Tentu saja! Saide Gym sangat ramah bagi pemula. Instruktur dan coach kami siap menunjukkan cara menggunakan alat, mengatur posisi duduk/beban, serta memberikan tips form gerakan yang aman agar terhindar dari cedera.",
  },
  {
    question: "Apakah ada biaya pendaftaran atau biaya registrasi member pertama kali?",
    answer:
      "Tidak ada biaya administrasi tambahan! Anda hanya membayar sesuai paket yang Anda pilih (misal: Visit 15k, Member 1 Bulan 115k, dll). Sangat transparan dan terjangkau.",
  },
  {
    question: "Apa saja perlengkapan yang wajib saya bawa saat datang?",
    answer:
      "Cukup kenakan pakaian olahraga yang nyaman (kaos/jersey dan celana training), sepatu olahraga yang bersih, dan bawa handuk kecil serta botol minum. Kami menyediakan loker untuk menyimpan barang berharga Anda.",
  },
  {
    question: "Jam berapa gym buka dan kapan waktu yang santai untuk latihan?",
    answer:
      "Saide Gym buka SETIAP HARI (Senin s/d Minggu) pukul 08:00 – 22:00 WIB. Waktu yang biasanya lebih santai dan leluasa adalah pagi hingga sore hari (08:00 – 16:00 WIB).",
  },
  {
    question: "Bagaimana cara mendaftar paket member atau memesan jadwal Personal Trainer?",
    answer:
      "Anda bisa langsung datang ke lokasi Saide Gym di Jl. Kalikalapa RT 06/03 Sukaluyu, atau klik tombol WhatsApp di website ini untuk chat admin kami di 081284182622. Admin kami akan langsung membantu pendaftaran Anda.",
  },
];
