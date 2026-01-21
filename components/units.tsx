import { Users, Wifi, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Units() {
  const units = [
    {
      name: 'Kelas Ekonomi',
      icon: '🚌',
      price: 'Dari Rp 500K',
      capacity: '40 penumpang',
      features: [
        'AC standar',
        'Kursi empuk',
        'Stop rutin',
        'Tiket asuransi'
      ],
      image: 'https://images.unsplash.com/photo-1570125909519-0a90ed8a7b88?w=500&h=400&fit=crop'
    },
    {
      name: 'Kelas Bisnis',
      icon: '🚎',
      price: 'Dari Rp 1.2J',
      capacity: '30 penumpang',
      featured: true,
      features: [
        'AC premium',
        'Kursi recline',
        'Wifi gratis',
        'Snack & minuman',
        'Tiket asuransi'
      ],
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff3c3c?w=500&h=400&fit=crop'
    },
    {
      name: 'Kelas Eksekutif',
      icon: '✈️',
      price: 'Dari Rp 3J',
      capacity: '15 penumpang',
      features: [
        'AC eksklusif',
        'Kursi VIP',
        'Wifi premium',
        'Catering lengkap',
        'Asuransi + Roadworthiness'
      ],
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop'
    }
  ]

  return (
    <section id="units" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900/50 dark:to-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20 animate-fadeInUp">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30">
            Unit Kendaraan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6">
            Pilihan Unit Perjalanan Kami
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dari ekonomi hingga eksekutif, kami memiliki unit yang sesuai dengan kebutuhan dan budget Anda.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {units.map((unit, index) => (
            <div
              key={index}
              className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 group ${
                unit.featured
                  ? 'sm:col-span-2 lg:col-span-1 lg:scale-105 border-2 border-transparent bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/40 dark:to-cyan-900/40 shadow-xl dark:shadow-cyan-500/20 hover:shadow-2xl'
                  : 'border border-gray-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-600 bg-white dark:bg-slate-800'
              }`}
            >
              {/* Featured Badge */}
              {unit.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 text-center shadow-lg">
                  ⭐ PALING POPULER
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img
                  src={unit.image || "/placeholder.svg"}
                  alt={unit.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300">{unit.icon}</span>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                      {unit.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      {unit.capacity}
                    </div>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-200/50 dark:border-cyan-600/30">
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    {unit.price}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">per perjalanan</p>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {unit.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full shadow-sm flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    unit.featured
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 dark:from-blue-600 dark:to-cyan-600 dark:hover:from-blue-700 dark:hover:to-cyan-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white hover:shadow-md'
                  }`}
                >
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
