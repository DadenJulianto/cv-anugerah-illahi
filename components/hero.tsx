import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900/50 dark:to-blue-950/30 overflow-hidden transition-colors duration-500">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-400 via-cyan-400 to-teal-400 dark:from-blue-900/50 dark:via-cyan-900/40 dark:to-teal-900/30 rounded-full blur-3xl opacity-20 dark:opacity-15 -mr-48 animate-float" />
        <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400 dark:from-cyan-900/40 dark:via-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl opacity-15 dark:opacity-10 -ml-48 animate-pulse-glow" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fadeInUp">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30">
                ✨ Petualangan Menanti Anda
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Jelajahi Dunia dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 animate-gradient-shift">Wanderlust</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Temukan pengalaman travel yang tak terlupakan dengan paket wisata eksklusif, unit perjalanan modern, dan layanan prima kami.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="px-4 sm:px-8 py-3 sm:py-6 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 dark:from-blue-600 dark:to-cyan-600 dark:hover:from-blue-700 dark:hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Mulai Petualangan
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
              <Button variant="outline" className="px-4 sm:px-8 py-3 sm:py-6 text-sm sm:text-base border-gray-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm font-semibold transition-all duration-300 hover:shadow-lg">
                Lihat Paket
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slideInRight hidden md:block">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop"
                alt="Travel Adventure"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Stats Cards */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-white/50 dark:border-slate-700/50 hover:shadow-xl hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Destinasi</div>
              </div>
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-white/50 dark:border-slate-700/50 hover:shadow-xl hover:border-cyan-300/50 dark:hover:border-cyan-600/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Pelanggan Puas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    </section>
  )
}
