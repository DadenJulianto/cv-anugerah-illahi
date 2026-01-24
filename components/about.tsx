'use client'

import { useState, useEffect, useRef } from 'react'
import type { TouchEvent } from 'react'
import { Globe, Heart, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Globe,
      title: 'Jangkauan Global',
      description:
        'Kami melayani destinasi ke berbagai penjuru dunia dengan jaringan partner terpercaya dan pengalaman lebih dari 20 tahun.',
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
        'Nikmati paket wisata berkualitas premium dengan harga tetap terjangkau dan fleksibel sesuai kebutuhan Anda.',
    },
  ]

  /* ================= VISI & MISI SLIDER ================= */
  const slides = [
    {
      title: 'Visi',
      type: 'text',
      content:
        'Menjadi perusahaan transportasi dan travel terpercaya yang menghadirkan pengalaman perjalanan berkualitas, aman, dan berkesan bagi setiap pelanggan.',
    },
    {
      title: 'Misi',
      type: 'list',
      content: [
        'Menyediakan armada yang aman, nyaman, dan terawat',
        'Memberikan pelayanan profesional dan ramah pelanggan',
        'Menawarkan harga kompetitif dengan kualitas terbaik',
        'Membangun hubungan jangka panjang dengan pelanggan',
      ],
    },
  ]

  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const next = () => {
    setDirection('right')
    setActive((p) => (p + 1) % slides.length)
  }

  const prev = () => {
    setDirection('left')
    setActive((p) => (p - 1 + slides.length) % slides.length)
  }

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused])

  /* ================= SWIPE HANDLER ================= */
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    if (diff < -50) prev()
    touchStartX.current = null
  }

  return (
    <section
      id="about"
      className="
        py-20 md:py-32
        transition-colors duration-500
        bg-gradient-to-br
        from-[#FFF6D5] via-[#FFE9A6] to-[#FFD65C]
        dark:from-[#1A1405] dark:via-[#2A2108] dark:to-[#0F0C02]
      "
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 mb-4 rounded-full text-sm font-semibold bg-[#FFE08A] text-[#8A5A00] dark:bg-[#2A2108] dark:text-[#FFD65C]">
            Tentang Kami
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8A5A00] dark:text-[#FFD65C] mb-8">
            Mengapa Memilih Wanderlust Travel?
          </h2>
        </div>

        {/* ================= BRAND STORY ================= */}
        <div className="mb-20">
          <div
            className="
              space-y-6
              max-w-[42ch] md:max-w-3xl
              mx-auto
              text-center md:text-left
              text-gray-700 dark:text-gray-300
              leading-relaxed
            "
          >
            <p>
              <span className="font-medium text-gray-800 dark:text-gray-100">
                17Trans
              </span>{' '}
              adalah perusahaan jasa transportasi dan travel yang hadir sebagai
              solusi perjalanan yang nyaman, aman, dan terpercaya. Berdiri
              dengan semangat memberikan layanan terbaik bagi setiap pelanggan.
            </p>

            <p>
              Kami berkomitmen menghadirkan pengalaman perjalanan yang
              menyenangkan dengan mengutamakan kualitas armada,
              profesionalisme kru, serta pelayanan prima yang berorientasi pada
              kepuasan penumpang.
            </p>

            <p>
              Lebih dari sekadar penyedia jasa transportasi,{' '}
              <span className="font-medium text-gray-800 dark:text-gray-100">
                17Trans adalah sahabat perjalanan
              </span>{' '}
              yang siap menemani setiap langkah menuju destinasi impian dengan
              harga kompetitif dan layanan yang bersahabat.
            </p>
          </div>
        </div>

        {/* ================= VISI & MISI SLIDER ================= */}
        <div
          className="flex justify-center mb-24"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative max-w-md w-full overflow-hidden">
            <div
              key={active}
              className={`
                bg-white/80 dark:bg-[#1E1A0F]/80
                backdrop-blur rounded-2xl p-8 shadow-lg
                transition-all duration-500
                ${
                  direction === 'right'
                    ? 'animate-slideInRight'
                    : 'animate-slideInLeft'
                }
              `}
            >
              <h3 className="text-2xl font-bold text-center text-[#8A5A00] dark:text-[#FFD65C] mb-6">
                {slides[active].title}
              </h3>

              {slides[active].type === 'text' ? (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  {slides[active].content}
                </p>
              ) : (
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  {slides[active].content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FFD65C]/80 dark:bg-[#2A2108]"
            >
              <ChevronLeft className="w-5 h-5 text-[#8A5A00] dark:text-[#FFD65C]" />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FFD65C]/80 dark:bg-[#2A2108]"
            >
              <ChevronRight className="w-5 h-5 text-[#8A5A00] dark:text-[#FFD65C]" />
            </button>
          </div>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="group bg-white dark:bg-[#1E1A0F] rounded-2xl p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-400/30"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-[#FFD65C] text-[#8A5A00] dark:bg-[#2A2108] dark:text-[#FFD65C] group-hover:scale-110 group-hover:rotate-3 transition">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#8A5A00] dark:text-[#FFD65C] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
