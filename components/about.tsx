import { Globe, Heart, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Globe,
      title: 'Jangkauan Global',
      description:
        'Kami melayani destinasi ke seluruh penjuru dunia dengan jaringan partner terpercaya dan pengalaman lebih dari 20 tahun.',
    },
    {
      icon: Heart,
      title: 'Pelayanan Terbaik',
      description:
        'Kepuasan pelanggan adalah prioritas utama kami. Tim profesional siap memberikan pengalaman travel yang personal dan berkesan.',
    },
    {
      icon: Zap,
      title: 'Harga Kompetitif',
      description:
        'Nikmati paket wisata dengan kualitas premium namun tetap terjangkau. Kami menawarkan berbagai pilihan sesuai budget Anda.',
    },
  ]

  return (
    <section
      id="about"
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
            Tentang Kami
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
            Mengapa Memilih Wanderlust Travel?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Kami berdedikasi untuk menciptakan pengalaman perjalanan yang luar biasa dan
            tak terlupakan bagi setiap pelanggan kami.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="
                  group
                  bg-white dark:bg-[#1E1A0F]
                  rounded-2xl p-6
                  shadow-lg dark:shadow-yellow-500/5
                  transition-all duration-500 ease-out
                  hover:-translate-y-3
                  hover:shadow-2xl hover:shadow-yellow-400/30
                  animate-card
                "
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* ICON */}
                <div
                  className="
                    w-12 h-12 mb-4
                    flex items-center justify-center
                    rounded-xl
                    bg-[#FFD65C] text-[#8A5A00]
                    dark:bg-[#2A2108] dark:text-[#FFD65C]
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    animate-pulse-glow
                  "
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-[#8A5A00] dark:text-[#FFD65C] mb-2">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* ACCENT LINE */}
                <div
                  className="
                    mt-4 h-[3px] w-0
                    bg-gradient-to-r from-yellow-400 to-amber-500
                    dark:from-[#FFD65C] dark:to-[#FFC93C]
                    group-hover:w-full
                    transition-all duration-500
                    rounded-full
                  "
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
