import { Globe, Heart, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Globe,
      title: 'Jangkauan Global',
      description: 'Kami melayani destinasi ke seluruh penjuru dunia dengan jaringan partner terpercaya dan pengalaman lebih dari 20 tahun.'
    },
    {
      icon: Heart,
      title: 'Pelayanan Terbaik',
      description: 'Kepuasan pelanggan adalah prioritas utama kami. Tim profesional siap memberikan pengalaman travel yang personal dan berkesan.'
    },
    {
      icon: Zap,
      title: 'Harga Kompetitif',
      description: 'Nikmati paket wisata dengan kualitas premium namun tetap terjangkau. Kami menawarkan berbagai pilihan sesuai budget Anda.'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeInUp">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30">
            Tentang Kami
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-cyan-300 dark:to-white bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6">
            Mengapa Memilih Wanderlust Travel?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kami berdedikasi untuk menciptakan pengalaman perjalanan yang luar biasa dan tak terlupakan bagi setiap pelanggan kami.
          </p>
        </div>

        {/* Grid of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-600 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900/50 dark:to-slate-950 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/10 hover:-translate-y-2 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="relative animate-slideInLeft hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-slideInRight">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent mb-3 sm:mb-4">
                Kisah Wanderlust Travel
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
                Berawal dari passion untuk menjelajahi dunia, Wanderlust Travel didirikan pada tahun 2003 oleh sekelompok travel enthusiast yang ingin berbagi pengalaman luar biasa dengan jutaan orang.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Hingga kini, kami telah membantu lebih dari 10,000 pelanggan mewujudkan impian perjalanan mereka ke destinasi-destinasi menakjubkan di seluruh dunia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-200/50 dark:border-cyan-600/30 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">20+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Tahun Pengalaman</div>
              </div>
              <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 rounded-lg border border-cyan-200/50 dark:border-teal-600/30 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Tim Profesional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
