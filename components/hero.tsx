import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="
      relative w-full h-screen overflow-hidden
      bg-gradient-to-br
      from-[color:oklch(0.98_0.02_95)]
      via-[color:oklch(0.93_0.08_85)]
      to-[color:oklch(0.88_0.14_80)]
      dark:from-[color:oklch(0.12_0.01_260)]
      dark:via-[color:oklch(0.2_0.05_90)]
      dark:to-[color:oklch(0.25_0.08_85)]
      transition-colors duration-500
    ">

      {/* ✨ Premium Light Overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-tr
        from-white/60 via-white/30 to-transparent
        dark:from-black/40 dark:via-black/20
      " />

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="
          absolute top-20 right-0 w-[520px] h-[520px]
          bg-gradient-to-bl
          from-amber-400 via-yellow-400 to-amber-300
          dark:from-amber-900/40 dark:via-yellow-900/30 dark:to-amber-900/20
          rounded-full blur-3xl opacity-25 dark:opacity-20
          -mr-48 animate-float
        " />
        <div className="
          absolute -bottom-20 left-0 w-[520px] h-[520px]
          bg-gradient-to-tr
          from-yellow-300 via-amber-400 to-orange-300
          dark:from-yellow-900/30 dark:via-amber-900/25 dark:to-orange-900/20
          rounded-full blur-3xl opacity-20 dark:opacity-15
          -ml-48 animate-pulse-glow
        " />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fadeInUp">
            <div className="space-y-3">

              <div className="
                inline-block px-4 py-2
                bg-gradient-to-r from-amber-100 to-yellow-100
                dark:from-amber-900/50 dark:to-yellow-900/50
                text-amber-700 dark:text-amber-200
                rounded-full text-xs sm:text-sm font-semibold
                backdrop-blur-sm border
                border-amber-200/50 dark:border-amber-700/30
              ">
                ✨ Petualangan Menanti Anda
              </div>

              <h1 className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold leading-tight
                text-slate-900 dark:text-white
              ">
                Jelajahi Dunia dengan{' '}
                <span className="
                  text-transparent bg-clip-text
                  bg-gradient-to-r
                  from-amber-500 via-yellow-500 to-amber-600
                  dark:from-amber-400 dark:via-yellow-400 dark:to-amber-500
                  animate-gradient-shift
                ">
                  Wanderlust
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Temukan pengalaman travel yang tak terlupakan dengan paket wisata eksklusif,
                unit perjalanan modern, dan layanan prima kami.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="
                px-6 sm:px-8 py-3 sm:py-6
                text-sm sm:text-base font-semibold
                text-white whitespace-nowrap
                bg-gradient-to-r from-amber-400 to-yellow-500
                hover:from-amber-500 hover:to-yellow-600
                shadow-lg shadow-amber-500/30
                hover:shadow-xl transition-all duration-300
                transform hover:scale-105
              ">
                Mulai Petualangan
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>

              <Button
                variant="outline"
                className="
                  px-6 sm:px-8 py-3 sm:py-6
                  text-sm sm:text-base font-semibold
                  border-slate-300 dark:border-slate-600
                  bg-white/60 dark:bg-slate-900/50
                  backdrop-blur-sm
                  hover:bg-white dark:hover:bg-slate-800
                  transition-all duration-300 hover:shadow-lg
                "
              >
                Lihat Paket
              </Button>
            </div>
          </div>

        {/* Right Image */}
<div className="relative animate-slideInRight block md:block mt-10 md:mt-0">
  <div className="relative w-full h-64 sm:h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl group">
    <img
      src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop"
      alt="Travel Adventure"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />

    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

            {/* Stats Cards */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
              <div className="
                bg-white/90 dark:bg-slate-900/80
                backdrop-blur-xl rounded-xl p-4
                shadow-lg border border-white/50 dark:border-slate-700/50
                hover:shadow-xl transition-all duration-300
                transform hover:scale-105
              ">
                <div className="
                  text-xl sm:text-2xl font-bold
                  bg-gradient-to-r from-amber-500 to-yellow-500
                  dark:from-amber-400 dark:to-yellow-400
                  bg-clip-text text-transparent
                ">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Destinasi
                </div>
              </div>

              <div className="
                bg-white/90 dark:bg-slate-900/80
                backdrop-blur-xl rounded-xl p-4
                shadow-lg border border-white/50 dark:border-slate-700/50
                hover:shadow-xl transition-all duration-300
                transform hover:scale-105
              ">
                <div className="
                  text-xl sm:text-2xl font-bold
                  bg-gradient-to-r from-yellow-500 to-amber-600
                  dark:from-yellow-400 dark:to-amber-400
                  bg-clip-text text-transparent
                ">
                  10K+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Pelanggan Puas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
        </div>
      </div>
    </section>
  )
}
