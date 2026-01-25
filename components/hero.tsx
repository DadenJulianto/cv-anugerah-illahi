'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {

  // ✨ Premium smooth scroll (cinematic)
  const smoothScrollTo = (targetId: string) => {
    const target = document.getElementById(targetId)
    if (!target) return

    const startPosition = window.scrollY
    const offset = 80 // tinggi navbar (jika ada)
    const targetPosition =
      target.getBoundingClientRect().top + startPosition - offset

    const distance = targetPosition - startPosition
    const duration = 1400
    let startTime: number | null = null

    const easeInOutCubic = (t: number) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      window.scrollTo(
        0,
        startPosition + distance * easeInOutCubic(progress)
      )

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

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

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
              Jelajahi Jawa Timur dengan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                17 Trans
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 max-w-xl">
              Temukan pengalaman travel yang tak terlupakan dengan armada nyaman
              dan paket wisata terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* 🔥 KE BAGIAN UNIT */}
              <Button
                onClick={() => smoothScrollTo('units')}
                className="
                  px-8 py-4 text-white font-semibold
                  bg-gradient-to-r from-amber-400 to-yellow-500
                  hover:from-amber-500 hover:to-yellow-600
                  shadow-lg shadow-amber-500/30
                  transition-all duration-300
                  hover:scale-105
                "
              >
                Mulai Petualangan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* 🔥 KE BAGIAN PAKET */}
              <Button
                variant="outline"
                onClick={() => smoothScrollTo('packages')}
                className="
                  px-8 py-4 font-semibold
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

          {/* RIGHT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900"
              alt="Travel Adventure"
              className="w-full h-[420px] object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  )
}
