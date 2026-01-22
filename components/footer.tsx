'use client'

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#1A1405] to-[#0F0C02] text-gray-300 transition-colors duration-500">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="
                  w-8 h-8 rounded-lg
                  bg-gradient-to-br from-[#FFD65C] to-[#FFC93C]
                  flex items-center justify-center
                  shadow-lg shadow-yellow-500/30
                  transition-transform hover:scale-110
                "
              >
                <span className="text-[#8A5A00] font-bold">W</span>
              </div>
              <span className="text-xl font-bold text-[#FFD65C]">
                Wanderlust
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Menciptakan pengalaman perjalanan yang tak terlupakan bagi jutaan
              pelanggan di seluruh dunia sejak 2003.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10 rounded-lg
                    bg-[#2A2108]
                    border border-[#FFD65C]/30
                    flex items-center justify-center
                    text-[#FFD65C]
                    hover:bg-[#FFD65C]
                    hover:text-[#8A5A00]
                    transition-all duration-300
                  "
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[#FFD65C] font-bold mb-4">
              Menu Cepat
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ['#about', 'Tentang Kami'],
                ['#units', 'Unit Kendaraan'],
                ['#packages', 'Paket Wisata'],
                ['#gallery', 'Galeri'],
              ].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-[#FFD65C] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[#FFD65C] font-bold mb-4">
              Layanan
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                'Perjalanan Kelompok',
                'Paket Honeymoon',
                'Tour Korporat',
                'Visa Assistance',
              ].map(service => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-[#FFD65C] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[#FFD65C] font-bold mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#FFD65C] mt-0.5" />
                <div>
                  <p>+62 812-3456-7890</p>
                  <p>+62 21-1234-5678</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#FFD65C] mt-0.5" />
                <p>info@wanderlust.travel</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FFD65C] mt-0.5" />
                <p>
                  Jl. Merdeka No. 123<br />
                  Jakarta, Indonesia 12345
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#FFD65C]/20" />

      {/* BOTTOM */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {currentYear} Wanderlust Travel. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            {['Kebijakan Privasi', 'Syarat & Ketentuan', 'FAQ'].map(item => (
              <a
                key={item}
                href="#"
                className="hover:text-[#FFD65C] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="
          fixed bottom-8 right-8
          w-12 h-12 rounded-full
          bg-[#FFD65C]
          text-[#8A5A00]
          shadow-lg shadow-yellow-500/40
          hover:bg-[#FFC93C]
          hover:scale-110
          transition-all duration-300
          flex items-center justify-center
        "
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}
