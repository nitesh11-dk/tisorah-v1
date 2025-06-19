import Gifting from '@/components/Gifting'
import Testimonials from '@/components/Testimonials'
import React from 'react'
import ProductGrid from '@/components/ProductGrid'
import NewArrival from '@/components/NewArrival'
import Footer from '@/components/Footer'

const trendingProducts = [
  {
    name: 'Luxury Gift Box',
    image: 'https://www.boxupgifting.com/cdn/shop/files/ScrumptiousMunchBoxINFOcopy2.webp?v=1729161014&width=400',
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    rating: 4,
    reviews: 120
  },
  {
    name: 'Personalized Mug',
    image: 'https://www.boxupgifting.com/cdn/shop/files/ScrumptiousMunchBoxINFOcopy2.webp?v=1729161014&width=400',
    price: 499,
    originalPrice: 699,
    discount: 29,
    rating: 5,
    reviews: 87
  },
  {
    name: 'Handmade Chocolate Box',
    image: 'https://www.boxupgifting.com/cdn/shop/files/Charmofchai-2.jpg?v=1748607120&width=400',
    price: 899,
    rating: 3,
    reviews: 45
  },
  {
    name: 'Elegant Flower Bouquet',
    image: 'https://www.boxupgifting.com/cdn/shop/files/Charmofchai-2.jpg?v=1748607120&width=400',
    price: 1599,
    originalPrice: 1799,
    discount: 11,
    rating: 4,
    reviews: 62
  }
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-14">
      <ProductGrid title="Trending Today" products={trendingProducts} />
      <NewArrival products={trendingProducts} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Gifting />
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}

export default Landing