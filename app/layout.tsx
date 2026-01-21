import React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import BottomNavbar from "@/components/bottom-navbar"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wanderlust Travel | Petualangan Menakjubkan Menanti Anda",
  description:
    "Jelajahi destinasi impian dengan paket wisata eksklusif, unit travel modern, dan pengalaman tak terlupakan bersama Wanderlust Travel.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.className} font-sans antialiased bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors duration-300 relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <BottomNavbar />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
