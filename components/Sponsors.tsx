"use client"
import Image from 'next/image'
import React from 'react'

import SectionTitle from './SectionTitle'

import img1 from '@assets/sponsor1.png'
import img2 from '@assets/sponsor2.png'
import img3 from '@assets/sponsor3.png'
import img4 from '@assets/sponsor4.png'
import flower from '@assets/flower.png'
import { useInView } from 'framer-motion'

const Sponsors = () => {
  const sponsorImages = [
    {
      img: img1,
      alt: 'Heliopolis University',
    },
    {
      img: img2,
      alt: 'The American University in Cairo',
    },
    {
      img: img3,
      alt: 'GIMED',
    },
    {
      img: img4,
      alt: 'Orange Corners',
    }
  ]

  return (
    <section className='relative bg-white flex flex-col items-center justify-center py-10 lg:py-20 overflow-hidden'>
      <div className="relative w-full flex justify-center md:justify-start md:px-32">
        <span className='absolute top-1/2 -right-5 md:-right-14 -translate-y-1/2 rotate-180'>
          <Image
            src={flower.src}
            alt="Farawla Tech"
            blurDataURL={flower.blurDataURL}
            placeholder='blur'
            width={200}
            height={200}
            sizes='(max-width: 768px) 100px, 200px'
            className='w-full sm:w-full'
          />
        </span>
        <SectionTitle>الجهات الداعمة</SectionTitle>
      </div>
      <div className="flex-1 grid md:grid-cols-4 items-center justify-center content-center w-3/4 gap-8 sm:gap-8 mx-auto">
        {sponsorImages.map((el, i) => {
          const ref = React.useRef<HTMLDivElement>(null)
          const isInView = useInView(ref, { once: false, margin: '0%' })
          return (
            <div
              key={i}
              ref={ref}
              className='w-full h-full flex items-center justify-center'
            >
              <Image
                src={el.img.src}
                alt={el.alt}
                blurDataURL={el.img.blurDataURL}
                placeholder='blur'
                width={150}
                height={150}
                sizes='150px'
                className='w-full transition-all duration-700 ease-in-out'
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(150%)',
                }}
              />
            </div>)
        })}
      </div>
    </section>
  )
}

export default Sponsors