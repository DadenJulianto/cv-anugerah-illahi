import { MapPin, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Packages() {
  const whatsappNumber = '6285733441457'

  const packages = [
    {
      name: 'TRIP TO BROMO + GILI KETAPANG',
      duration: '1 Hari',
      price: 'Rp 470K',
      image: '/gl.jpeg',
      destinations: [
        'Gn. Batok',
        'Kawah Bromo',
        'Pasir Berbisik',
        'Sunrise Point',
        'Bukit Teletubbies',
        'Penanjakan',
        'Pura Luhur Poten',
        'Bukit Widodaren',
        'Gili Ketapang',
      ],
      highlights: [
        'Snorkeling',
        'Dokumentasi',
        'Merchandise',
        'Tiket Wisata',
        'Makan 1x',
        'Karaoke',
        'Kapal PP',
        'Guide',
        'Driver',
        'Jeep',
        'WiFi',
        'P3K',
      ],
    },
    {
      name: 'Trip Bromo',
      duration: '1 Hari',
      price: 'Rp 350K',
      image: '/bromogiliketapang.jpeg',
      destinations: [
        'Savana',
        'Pura Luhur Poten',
        'Bukit Widodaren',
        'Gunung Botok',
        'Kawah Bromo',
        'Pasir Berbisik',
        'Sunrise Point',
      ],
      highlights: [
        'Dokumentasi',
        'Merchandise',
        'Tiket Wisata',
        'Air Mineral',
        'Guide',
        'Driver',
        'Jeep',
        'Wifi',
        'P3K',
      ],
      featured: true,
    },
    {
      name: 'Trip Bromo + Tumpak Sewu',
      duration: '1 Hari',
      price: 'Rp 400K',
      image: '/ts.jpeg',
      destinations: [
        'Savana',
        'Pura Luhur Poten',
        'Bukit Widodaren',
        'Gunung Botok',
        'Kawah Bromo',
        'Pasir Berbisik',
        'Sunrise Point',
        'Tumpak Sewu',
      ],
      highlights: [
        'Dokumentasi',
        'Merchandise',
        'Tiket Wisata',
        'Air Mineral',
        'Guide',
        'Driver',
        'Jeep',
        'Wifi',
        'P3K',
      ],
      premium: true,
    },
  ]

  return (
    <section
      id="packages"
      className="
        py-20 md:py-32
        transition-colors duration-500
        bg-gradient-to-br
        from-[#FFF6D5] via-[#FFE9A6] to-[#FFD65C]
        dark:from-[#1A1405]
        dark:via-[#2A2108]
        dark:to-[#0F0C02]
      "
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 rounded-full text-sm font-semibold bg-[#FFE08A] text-[#8A5A00] dark:bg-[#2A2108] dark:text-[#FFD65C]">
            Paket Wisata
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8A5A00] dark:text-[#FFD65C] mb-4">
            Paket Liburan Impian Anda
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Pilih dari berbagai paket menarik ke destinasi terbaik di Indonesia.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => {
            const waMessage = encodeURIComponent(
              `Halo admin, saya tertarik dengan paket ${pkg.name} (${pkg.duration}) dengan harga ${pkg.price}. Mohon info lengkapnya ya.`
            )

            return (
              <div
                key={i}
                className={`
                  group rounded-2xl overflow-hidden
                  bg-white dark:bg-[#1E1A0F]
                  shadow-lg dark:shadow-yellow-500/5
                  transition-all duration-500
                  hover:-translate-y-3 hover:shadow-2xl
                  hover:shadow-yellow-400/30
                  animate-card
                  ${pkg.featured ? 'ring-2 ring-[#FFD65C]' : ''}
                  ${pkg.premium ? 'ring-2 ring-amber-400' : ''}
                `}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {pkg.featured && (
                  <div className="bg-[#FFD65C] text-[#8A5A00] text-sm font-bold text-center py-2">
                    ⭐ PAKET POPULER
                  </div>
                )}
                {pkg.premium && (
                  <div className="bg-amber-500 text-white text-sm font-bold text-center py-2">
                    👑 PREMIUM EXPERIENCE
                  </div>
                )}

                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#8A5A00] dark:text-[#FFD65C] mb-2">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </div>

                  <div className="mb-4 p-4 rounded-xl bg-[#FFF1C1] dark:bg-[#2A2108] border border-[#FFD65C]">
                    <p className="text-2xl font-bold text-[#8A5A00] dark:text-[#FFD65C]">
                      {pkg.price}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      per orang
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.destinations.map((dest, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs bg-[#FFE08A] text-[#8A5A00] dark:bg-[#2A2108] dark:text-[#FFD65C] px-2 py-1 rounded-full font-medium"
                      >
                        <MapPin className="h-3 w-3" />
                        {dest}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="h-4 w-4 text-[#FFD65C]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON → WHATSAPP */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="
                        mt-auto w-full py-3
                        bg-[#FFD65C] dark:bg-[#2A2108]
                        text-[#8A5A00] dark:text-[#FFD65C]
                        font-semibold
                        hover:bg-[#FFC93C] dark:hover:bg-[#3A2F10]
                        transition-all duration-300
                        hover:shadow-lg hover:scale-105
                      "
                    >
                      Lihat Detail & Pesan
                    </Button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
