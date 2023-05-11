import React from 'react'

import logo from '@assets/logo.png'
import Image from 'next/image'
import Facebook from './Icons/Facebook'
import ParticleBg from './ParticleBg'
import { useTranslation } from '@/app/i18n'
const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <footer className='relative py-4 sm:py-6 overflow-hidden  -z-50 bg-black'>
      <div className="py-4 sm:py-12 flex items-center justify-center md:justify-start px-8 gap-4">
        <div className="w-6 md:w-20">
          <Image
            src={logo.src}
            alt={t('title')}
            blurDataURL={logo.src}
            placeholder='blur'
            width={82}
            height={140}
            sizes='(max-width: 768px) 24px, 82px'
            className='w-full'
          />
        </div>
        <p className='text-white text-center text-2xl sm:text-4xl'>
          {t('title')}
        </p>
        <div className="">
          <Facebook />
        </div>
      </div>
      <p className=' text-white text-center'>كل الحقوق محفوطة فراولة تيك  &copy; 2023</p>
    </footer>
  )
}

export default Footer