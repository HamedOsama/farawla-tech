"use client"
import React from 'react'
import SectionTitle from '../SectionTitle'
import { useTranslation } from '@/app/i18n/client';

const Vision = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)

  return (
    <section
      className='relative bg-white'
    >
      <div className="py-12 duration-700 ease-in-out w-full md:w-4/5 mx-auto px-6"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="250"

      >
        <SectionTitle>
          {t('vision.title')}
        </SectionTitle>
        <h4 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>
        {t('vision.des')}
        </h4>
      </div>
    </section>
  )
}

export default Vision