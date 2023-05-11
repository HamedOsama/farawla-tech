"use client"
import React, { useRef } from 'react'
import SectionTitle from '../SectionTitle'
import { useInView } from 'framer-motion';
import { useTranslation } from '@/app/i18n/client';

const AboutUs = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });
  return (
    <section
      ref={ref}
      className='relative bg-white'

    >
      <div className="py-12 duration-700 ease-in-out w-full md:w-4/5 mx-auto px-6"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(300px)',
        }}
      >
        <SectionTitle>
          {t('AboutUs.title')}
        </SectionTitle>
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>
          {t('AboutUs.des')}
        </p>
      </div>
    </section>
  )
}

export default AboutUs;