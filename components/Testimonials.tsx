"use client"
import React, { useState } from 'react'

const testimonials = [
  {
    name: 'Sujatha Kailas',
    title: 'MD - Gastroenterology - Chicago',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: `I live in USA and needed 20 baskets to be distributed in Hyd and Chennai.\n\nBoxUP Team worked with me and my daughter diligently and delivered a product that was much above our expectations.\n\nThe quality of the product and the compliments we received on it was superb. Good Job! Working with her will never disappoint you.`,
  },
  {
    name: 'Chethan Athreyas',
    title: 'CEO, Synctactic.ai',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: `It was amazing working with Kruthi. Reached out to curate some personalised gifting options for our company's 2nd year anniversary. She came with options very quickly within the budget we had. I was very impressed by the speed with which the gifts were ready and delivered to our employees location directly.\nHighly recommended for all corporates who wants to give personalised gifts for your staffs.`,
  },
  {
    name: 'Aakshay Kumar',
    title: 'Associate - Transactions Advisory, BDO India LLP',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    text: `Got to know about Boxup Luxury gifting in November when i was sourcing my gifts for Diwali.\nSince then, Boxup has become my one stop solution for exclusive and classy gifts. I absolutely love their products and quality and service. No second doubts about it....\nThank you guys for such a wonderful experience...!!!`,
  },
  {
    name: 'Saba Banu',
    title: 'Home Baker',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: `I had a lovely experience with BoxUp, as I wanted a special hamper reaching my brothers in Muscat, Oman. BoxUp team made it possible and also customised the hampers for me with some extra goodies Sending hampers packed so beautifully abroad would not have been possible if not for BoxUp.\n\nThanks so much for this. Lots of love and luck to the BoxUp team`,
  },
  {
    name: 'Priya Sharma',
    title: 'Marketing Manager',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    text: `BoxUp made my corporate gifting so easy and impressive! The hampers were beautifully packed and delivered on time. My clients loved them. Will definitely use BoxUp again!`,
  },
  {
    name: 'Rahul Verma',
    title: 'Entrepreneur',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
    text: `I ordered a custom hamper for my wife's birthday and it was perfect. The team was very responsive and the quality was top-notch. Highly recommended for anyone looking for premium gifts.`,
  },
]

const Testimonials = () => {
  const [start, setStart] = useState(0)
  const visible = testimonials.slice(start, start + 3)
  const canGoLeft = start > 0
  const canGoRight = start + 3 < testimonials.length

  const handleLeft = () => {
    if (canGoLeft) setStart(start - 1)
  }
  const handleRight = () => {
    if (canGoRight) setStart(start + 1)
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const mobileVisible = testimonials.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl md:text-5xl font-edu-cursive  mb-12">What our happy customers says</h2>
      <div className="relative flex items-center">
        <button
          onClick={handleLeft}
          disabled={!canGoLeft}
          className={`hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-gray-700 rounded-full w-12 h-12 items-center justify-center shadow-lg text-3xl font-light text-gray-700 hover:bg-gray-100 transition-all duration-200 ${canGoLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
          aria-label="Previous testimonials"
        >
          &lt;
        </button>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(
              typeof window !== 'undefined' && window.innerWidth < 768
                ? mobileVisible
                : visible
            ).map((t, idx) => (
              <div key={idx} className="bg-white border rounded-lg shadow-md p-8 flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 mb-4" />
                <h3 className="text-xl font-edu-cursive mb-1">{t.name}</h3>
                <div className="text-sm text-gray-600 mb-2 font-medium">{t.title}</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mb-1">5.0 rating</div>
                <p className="text-gray-700 text-sm whitespace-pre-line mb-4">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleRight}
          disabled={!canGoRight}
          className={`hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-gray-700 rounded-full w-12 h-12 items-center justify-center shadow-lg text-3xl font-light text-gray-700 hover:bg-gray-100 transition-all duration-200 ${canGoRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
          aria-label="Next testimonials"
        >
          &gt;
        </button>
      </div>
    </section>
  )
}

export default Testimonials 