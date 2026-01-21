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
      title: 'Pantai Eksotis Maldives'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      category: 'pegunungan',
      title: 'Gunung Fuji, Jepang'
    },
    {
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
      category: 'budaya',
      title: 'Candi Borobudur, Yogyakarta'
    },
    {
      src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop',
      category: 'budaya',
      title: 'Candi Prambanan'
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop',
      category: 'pantai',
      title: 'Gili Trawangan, Lombok'
    },
    {
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
      category: 'petualangan',
      title: 'Trekking di Komodo'
    },
    {
      src: 'https://images.unsplash.com/photo-1537225228614-b3fb3d625cb0?w=500&h=400&fit=crop',
      category: 'pantai',
      title: 'Pantai Bali yang Menawan'
    },
    {
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
      category: 'pegunungan',
      title: 'Pemandangan Gunung'
    },
    {
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
      category: 'petualangan',
      title: 'Petualangan Ekstrem'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop',
      category: 'pantai',
      title: 'Pantai Paradise'
    },
    {
      src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop',
      category: 'budaya',
      title: 'Warisan Budaya'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      category: 'pegunungan',
      title: 'Pegunungan Sejuk'
    }
  ]

  const filteredImages = activeCategory === 'semua'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const handleNextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex].src)
  }

  const handlePrevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage)
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImage(galleryImages[prevIndex].src)
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900/50 dark:to-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-200 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30">
            Galeri Foto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent mb-6">
            Galeri Petualangan Kami
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Lihat koleksi foto indah dari destinasi-destinasi menakjubkan yang telah kami kunjungi bersama pelanggan setia kami.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white shadow-lg dark:shadow-cyan-500/20 scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer h-64 border border-gray-200/50 dark:border-slate-700/50"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-sm">{image.title}</p>
                <p className="text-cyan-300 text-xs capitalize font-medium">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Tidak ada foto di kategori ini</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full h-96 md:h-screen flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full p-2 transition-all duration-300 border border-blue-400/50 backdrop-blur-sm hover:scale-110"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Full screen gallery"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full p-3 transition-all duration-300 border border-blue-400/50 backdrop-blur-sm hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full p-3 transition-all duration-300 border border-blue-400/50 backdrop-blur-sm hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/50 shadow-lg">
              {galleryImages.findIndex(img => img.src === selectedImage) + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
