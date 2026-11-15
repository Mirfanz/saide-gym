import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAIDE GYM Karawang | Pusat Kebugaran & Fitness Sukaluyu",
  description:
    "Pusat kebugaran resmi Saide Gym di Sukaluyu, Telukjambe Timur, Karawang. Alat lengkap, trainer ramah, ramah pemula, dan membership mulai dari 15rb visit hingga paket hemat bulanan.",
  keywords: [
    "Saide Gym",
    "Gym Karawang",
    "Fitness Karawang",
    "Gym Sukaluyu",
    "Personal Trainer Karawang",
    "Tempat Gym Telukjambe",
    "Membership Gym Murah Karawang",
  ],
  authors: [{ name: "Saide Gym" }],
  openGraph: {
    title: "SAIDE GYM Karawang | Pusat Kebugaran & Fitness Sukaluyu",
    description:
      "Alat lengkap, suasana nyaman, trainer ramah, dan biaya terjangkau. Kunjungi Saide Gym Sukaluyu Karawang!",
    url: "https://saidegym.com",
    siteName: "SAIDE GYM",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark h-full antialiased">
      <head>
        {/* LocalBusiness Schema JSON-LD for Local SEO Karawang */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ExerciseGym",
              name: "SAIDE GYM",
              image: "https://saidegym.com/og-image.jpg",
              telephone: "+6281284182622",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Kalikalapa No. RT 06/03",
                addressLocality: "Sukaluyu, Telukjambe Timur",
                addressRegion: "Karawang, Jawa Barat",
                postalCode: "41361",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.3267,
                longitude: 107.2915,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "08:00",
                  closes: "22:00",
                },
              ],
              priceRange: "Rp 15.000 - Rp 650.000",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "38",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#f4f4f5]">
        {children}
      </body>
    </html>
  );
}
