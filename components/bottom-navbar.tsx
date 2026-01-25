'use client'

import Link from 'next/link'
import { Home, Info, Grid, MessageCircle } from 'lucide-react'

function NavItem({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      className="
        flex flex-col items-center justify-center gap-1
        text-[11px] font-medium
        text-[#8A5A00] dark:text-[#FFD65C]
        transition-all duration-300
        hover:scale-110
        active:scale-95
      "
    >
      <div className="w-6 h-6">{icon}</div>
      <span>{label}</span>
    </Link>
  )
}

function NavItemWA({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex flex-col items-center justify-center gap-1
        text-[11px] font-medium
        text-[#8A5A00] dark:text-[#FFD65C]
        transition-all duration-300
        hover:scale-110
        active:scale-95
      "
    >
      <div className="w-6 h-6">{icon}</div>
      <span>{label}</span>
    </a>
  )
}

export default function BottomNavbar() {
  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        z-50
        px-2
        w-full max-w-[360px]
        md:hidden
      "
    >
      <nav
        className="
          flex items-center justify-between
          px-6 py-3
          rounded-full
          shadow-2xl
          backdrop-blur-xl
          bg-gradient-to-r
          from-[#FFD65C] via-[#FFC93C] to-[#FFB703]
          dark:from-[#3A2B08]
          dark:via-[#5A430C]
          dark:to-[#2A1E06]
          border border-white/40
          dark:border-yellow-600/30
        "
      >
        <NavItem href="/" icon={<Home className="w-5 h-5" />} label="Beranda" />
        <NavItem href="#about" icon={<Info className="w-5 h-5" />} label="About" />
        <NavItem href="#packages" icon={<Grid className="w-5 h-5" />} label="Paket" />

        {/* 👇 LANGSUNG KE WHATSAPP */}
        <NavItemWA
          href="https://wa.me/6285733441457"
          icon={<MessageCircle className="w-5 h-5" />}
          label="WA Me"
        />
      </nav>
    </div>
  )
}
