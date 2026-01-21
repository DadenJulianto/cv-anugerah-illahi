"use client"

import Link from "next/link"
import { Home, User, Layers, MessageCircle } from "lucide-react"

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-3 left-1/2 z-50 w-[92%] max-w-sm -translate-x-1/2 md:hidden">
      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white/90 px-4 py-2 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
        
        <NavItem href="/" icon={<Home size={18} />} label="Home" />
        <NavItem href="#about" icon={<User size={18} />} label="About" />
        <NavItem href="#layanan" icon={<Layers size={18} />} label="Layanan" />

        {/* CTA WhatsApp */}
        <Link
          href="https://wa.me/628XXXXXXXXX"
          className="flex flex-col items-center rounded-xl bg-emerald-500 px-3 py-1.5 text-[10px] font-medium text-white shadow-sm"
        >
          <MessageCircle size={16} />
          WA
        </Link>

      </div>
    </nav>
  )
}

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
      className="flex flex-col items-center text-[10px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      {icon}
      <span className="mt-0.5">{label}</span>
    </Link>
  )
}
