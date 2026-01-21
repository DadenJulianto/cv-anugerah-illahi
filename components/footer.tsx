'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 dark:from-slate-950 dark:to-slate-950 text-gray-300 dark:text-gray-400 transition-colors duration-500">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 dark:shadow-blue-400/30 transition-transform hover:scale-110 duration-300">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Wanderlust</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Menciptakan pengalaman perjalanan yang tak terlupakan bagi jutaan pelanggan di seluruh dunia sejak 2003.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 border border-blue-500/30 hover:border-blue-400 text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 border border-blue-500/30 hover:border-blue-400 text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 border border-blue-500/30 hover:border-blue-400 text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Menu Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#units" className="hover:text-blue-400 transition-colors">
                  Unit Kendaraan
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-blue-400 transition-colors">
                  Paket Wisata
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">
                  Galeri
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Layanan</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Perjalanan Kelompok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Paket Honeymoon
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tour Korporat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Visa Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">+62 812-3456-7890</p>
                  <p className="text-sm">+62 21-1234-5678</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm">info@wanderlust.travel</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Jl. Merdeka No. 123<br />Jakarta, Indonesia 12345</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800" />

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {currentYear} Wanderlust Travel. Semua hak dilindungi.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button (Floating) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:shadow-xl"
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
