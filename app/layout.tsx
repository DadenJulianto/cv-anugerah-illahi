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
  title: "17 Trans | Petualangan Di Jawa Timur",
  description:
    "Jelajahi destinasi impian dengan paket wisata eksklusif, unit travel modern, dan pengalaman tak terlupakan bersama Wanderlust Travel.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`
          ${poppins.className}
          font-sans antialiased
          transition-colors duration-300
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
          <BottomNavbar />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
