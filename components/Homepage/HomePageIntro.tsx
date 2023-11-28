"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import logo from '@assets/logo.png'
import { useTranslation } from '@/app/i18n'

async function HomePageIntro ({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  const scrollToHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.querySelector('.solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', });
    }
  }
  return (
    <div className="absolute w-full h-full flex-1 flex flex-col sm:flex-row items-center sm:items-start px-8 md:px-11 lg:px-20 xl:px-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.25 }}
        className="flex-1 flex flex-col items-center justify-center gap-6">
        <Image
          src={logo.src}
          blurDataURL={logo.blurDataURL}
          placeholder='blur'
          alt="Farawla Tech"
          width={180}
          height={180}
          priority
        />
        <p className='text-white text-4xl sm:text-3xl lg:text-5xl xl:text-6xl'>Farawlatech</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.25 }}
        className="h-full grid justify-items-center content-center gap-10 w-full sm:w-3/5">
        <p className='text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>
          {t('pageIntro')}
        </p>
        <button onClick={scrollToHandler} type='button' className='text-white outline-none px-4 py-2 border border-white duration-300 ease-in-out hover:bg-white/60'>
          {t('pageIntroBtn')}
        </button>
      </motion.div>
    </div>
  )
}

export default HomePageIntro