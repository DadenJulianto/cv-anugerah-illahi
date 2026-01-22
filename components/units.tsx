import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Units() {
  const units = [
    {
      name: 'Kelas Ekonomi',
      icon: '🚌',
      price: 'Dari Rp 500K',
      capacity: '40 penumpang',
      features: ['AC standar', 'Kursi empuk', 'Stop rutin', 'Tiket asuransi'],
      image:
        'https://images.unsplash.com/photo-1570125909519-0a90ed8a7b88?w=500&h=400&fit=crop',
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
        'Tiket asuransi',
      ],
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff3c3c?w=500&h=400&fit=crop',
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
        'Asuransi + Roadworthiness',
      ],
      image:
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
    },
  ]

  return (
    <section
      id="units"
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
          <span
            className="
              inline-block px-4 py-2 mb-4
              rounded-full text-sm font-semibold
              bg-[#FFE08A] text-[#8A5A00]
              dark:bg-[#2A2108] dark:text-[#FFD65C]
            "
          >
            Unit Kendaraan
          </span>

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-extrabold
              text-[#8A5A00]
              dark:text-[#FFD65C]
              mb-4
            "
          >
            Pilihan Unit Perjalanan Kami
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Dari ekonomi hingga eksekutif, kami memiliki unit yang sesuai dengan kebutuhan
            dan budget Anda.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, i) => (
            <div
              key={i}
              className={`
                group rounded-2xl overflow-hidden
                bg-white dark:bg-[#1E1A0F]
                shadow-lg dark:shadow-yellow-500/5
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:shadow-2xl
                hover:shadow-yellow-400/30
                animate-card
                ${unit.featured ? 'ring-2 ring-[#FFD65C]' : ''}
              `}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* FEATURED BADGE */}
              {unit.featured && (
                <div className="bg-[#FFD65C] text-[#8A5A00] dark:bg-[#2A2108] dark:text-[#FFD65C] text-sm font-bold text-center py-2">
                  ⭐ PALING POPULER
                </div>
              )}

              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl transition-transform duration-300 group-hover:scale-125">
                    {unit.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#8A5A00] dark:text-[#FFD65C]">
                      {unit.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4" />
                      {unit.capacity}
                    </div>
                  </div>
                </div>

                {/* PRICE */}
                <div className="mb-5 p-4 rounded-xl bg-[#FFF1C1] dark:bg-[#2A2108] border border-[#FFD65C]">
                  <p className="text-2xl font-bold text-[#8A5A00] dark:text-[#FFD65C]">
                    {unit.price}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                    per perjalanan
                  </p>
                </div>

                {/* FEATURES */}
                <div className="space-y-2 mb-6">
                  {unit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FFD65C]" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <Button
                  className="
                    w-full py-3 rounded-lg
                    font-semibold
                    text-[#8A5A00] dark:text-[#FFD65C]
                    bg-[#FFD65C] dark:bg-[#2A2108]
                    hover:bg-[#FFC93C] dark:hover:bg-[#3A2F10]
                    transition-all duration-300
                    hover:shadow-lg hover:scale-105
                  "
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
