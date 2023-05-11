"use client"
import Image from 'next/image'
import React from 'react'

import SectionTitle from './SectionTitle'

import img1 from '@assets/sponsor1.png'
import img2 from '@assets/sponsor2.png'
import img3 from '@assets/sponsor3.png'
import img4 from '@assets/sponsor4.png'
import img5 from '@assets/sponsor5.png'
import img6 from '@assets/sponsor6.png'

import flower from '@assets/flower.png'
import { useTranslation } from '@/app/i18n/client'

const Sponsors = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)

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
    },
    {
      img: img5,
      alt: 'ABA',
    },
    {
      img: img6,
      alt: 'Next Food',
    }
  ]

  return (
    <section className='relative bg-white flex flex-col items-center justify-center py-10 lg:py-20'>
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
        <SectionTitle>{t('sponsors')}</SectionTitle>
      </div>
      <div className="flex-1 grid md:grid-cols-4 items-center justify-items-center content-center w-3/4 gap-8 sm:gap-8 mx-auto">
        {sponsorImages.map((el, i) => {
          return (
            <div
              key={i}
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
                data-aos="fade-up"
              />
            </div>)
        })}
      </div>
    </section>
  )
}

export default Sponsors