'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('semua')

  const categories = ['semua', 'pantai', 'pegunungan', 'budaya', 'petualangan']

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop',
      category: 'pantai',
      title: 'Pantai Eksotis Maldives',
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      category: 'pegunungan',
      title: 'Gunung Fuji, Jepang',
    },
    {
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
      category: 'budaya',
      title: 'Candi Borobudur, Yogyakarta',
    },
    {
      src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop',
      category: 'budaya',
      title: 'Candi Prambanan',
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop',
      category: 'pantai',
      title: 'Gili Trawangan, Lombok',
    },
    {
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
      category: 'petualangan',
      title: 'Trekking di Komodo',
    },
  ]

  const filteredImages =
    activeCategory === 'semua'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory)

  const handleNextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage)
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length].src)
  }

  const handlePrevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage)
    setSelectedImage(
      galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length].src
    )
  }

  return (
    <section
      id="gallery"
      className="
        py-20 md:py-32
        transition-colors duration-500

        bg-gradient-to-br
        from-[#FFF6D5] via-[#FFE9A6] to-[#FFD65C]

        dark:from-[#1A1405]
        dark:via-[#2A2108]
        dark:to-[#0F0C02]
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span
            className="
              inline-block px-4 py-2 mb-4
              rounded-full text-sm font-semibold
              bg-[#FFE08A] text-[#8A5A00]
              dark:bg-[#2A2108] dark:text-[#FFD65C]
            "
          >
            Galeri Foto
          </span>

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-extrabold
              text-[#8A5A00]
              dark:text-[#FFD65C]
              mb-4
            "
          >
            Galeri Petualangan Kami
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Koleksi momen terbaik dari perjalanan bersama pelanggan kami ke berbagai destinasi impian.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2 rounded-full font-medium capitalize
                transition-all duration-300
                ${
                  activeCategory === cat
                    ? 'bg-[#FFD65C] text-[#8A5A00] dark:bg-[#2A2108] dark:text-[#FFD65C] shadow-lg scale-105'
                    : 'bg-white dark:bg-[#1E1A0F] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#3A2F10] hover:shadow-md'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(image.src)}
              className="
                group relative overflow-hidden
                rounded-2xl h-64 cursor-pointer
                bg-white dark:bg-[#1E1A0F]
                shadow-lg dark:shadow-yellow-500/5
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                hover:shadow-yellow-400/30
                animate-card
              "
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-sm">
                  {image.title}
                </p>
                <p className="text-[#FFD65C] text-xs capitalize font-medium">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#FFD65C] dark:bg-[#2A2108] text-[#8A5A00] dark:text-[#FFD65C] rounded-full p-2 hover:scale-110 transition"
            >
              <X className="h-6 w-6" />
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[80vh] rounded-xl shadow-2xl"
            />

            {/* NAV */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 bg-[#FFD65C] dark:bg-[#2A2108] text-[#8A5A00] dark:text-[#FFD65C] p-3 rounded-full hover:scale-110 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 bg-[#FFD65C] dark:bg-[#2A2108] text-[#8A5A00] dark:text-[#FFD65C] p-3 rounded-full hover:scale-110 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
