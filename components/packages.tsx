import { MapPin, Clock, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Packages() {
  const packages = [
    {
      name: 'Pesona Bali 5 Hari',
      duration: '5 Hari 4 Malam',
      price: 'Rp 3.5 Juta',
      image: 'https://images.unsplash.com/photo-1537225228614-b3fb3d625cb0?w=500&h=400&fit=crop',
      destinations: ['Ubud', 'Kuta', 'Sanur', 'Bedugul'],
      highlights: [
        'Tari Kecak di Tepi Pantai',
        'Snorkling di Nusa Penida',
        'Spa Tradisional Bali',
        'Vegan Food Tour'
      ],
      includes: ['Hotel 3-4 bintang', 'Makan pagi', 'Pemandu wisata', 'Asuransi']
    },
    {
      name: 'Keajaiban Lombok 4 Hari',
      duration: '4 Hari 3 Malam',
      price: 'Rp 2.8 Juta',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop',
      destinations: ['Senggigi', 'Gili Trawangan', 'Kuta', 'Tanjung Bira'],
      highlights: [
        'Snorkling 3 Gili',
        'Pantai Pasir Putih',
        'Sunset di Tebing',
        'Kehidupan Bawah Laut'
      ],
      includes: ['Hotel 3 bintang', 'Makan pagi & malam', 'Pemandu wisata', 'Asuransi'],
      featured: true
    },
    {
      name: 'Keajaiban Yogyakarta 3 Hari',
      duration: '3 Hari 2 Malam',
      price: 'Rp 1.8 Juta',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop',
      destinations: ['Yogyakarta', 'Magelang', 'Sleman'],
      highlights: [
        'Sunrise di Borobudur',
        'Candi Prambanan',
        'Rakit Bamboo Sungai Elo',
        'Kota Tua Yogyakarta'
      ],
      includes: ['Hotel 3 bintang', 'Makan pagi', 'Pemandu wisata', 'Asuransi']
    },
    {
      name: 'Indonesia Timur 7 Hari',
      duration: '7 Hari 6 Malam',
      price: 'Rp 5.2 Juta',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
      destinations: ['Komodo', 'Flores', 'Alor', 'Sumba'],
      highlights: [
        'Taman Nasional Komodo',
        'Pulau Padar',
        'Savana Sumba',
        'Budaya Lokal'
      ],
      includes: ['Hotel 2-3 bintang', 'Makan 3x sehari', 'Pemandu wisata', 'Asuransi'],
      premium: true
    },
    {
      name: 'Danau Toba Adventure 4 Hari',
      duration: '4 Hari 3 Malam',
      price: 'Rp 2.2 Juta',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      destinations: ['Medan', 'Danau Toba', 'Samosir', 'Sibolga'],
      highlights: [
        'Pemandian Air Panas',
        'Pulau Samosir',
        'Situs Pusaka Batak',
        'Waterfall Asahan'
      ],
      includes: ['Hotel 3 bintang', 'Makan pagi & malam', 'Pemandu wisata', 'Asuransi']
    },
    {
      name: 'Pantai Selatan Jawa 3 Hari',
      duration: '3 Hari 2 Malam',
      price: 'Rp 1.5 Juta',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
      destinations: ['Yogyakarta', 'Gunungkidul', 'Wonogiri'],
      highlights: [
        'Pantai Krakal',
        'Pantai Baron',
        'Pantai Sepanjang',
        'Goa Laut'
      ],
      includes: ['Hotel 2 bintang', 'Makan pagi', 'Pemandu wisata', 'Asuransi']
    }
  ]

  return (
    <section id="packages" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20 animate-fadeInUp">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30">
            Paket Wisata
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6">
            Paket Liburan Impian Anda
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pilih dari berbagai paket menarik ke destinasi-destinasi terbaik di Indonesia dan mancanegara.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group ${
                pkg.featured
                  ? 'md:col-span-2 lg:col-span-1 border-2 border-transparent bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/40 dark:to-blue-900/40 shadow-xl dark:shadow-cyan-500/20 hover:shadow-2xl'
                  : 'border border-gray-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-600 bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-cyan-500/10'
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 text-center shadow-lg">
                  ⭐ PAKET POPULER
                </div>
              )}

              {pkg.premium && (
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 text-center shadow-lg">
                  👑 PREMIUM EXPERIENCE
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                {/* Title & Duration */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 line-clamp-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-500 flex-shrink-0" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-200/50 dark:border-cyan-600/30">
                  <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">per orang</p>
                </div>

                {/* Destinations */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((dest, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-700 dark:text-cyan-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-200/50 dark:border-cyan-600/30 font-medium"
                      >
                        <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Highlight:
                  </p>
                  <ul className="space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-3 w-3 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 dark:from-blue-600 dark:to-cyan-600 dark:hover:from-blue-700 dark:hover:to-cyan-700 text-white py-2 sm:py-3 font-semibold mt-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  Lihat Detail & Pesan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
