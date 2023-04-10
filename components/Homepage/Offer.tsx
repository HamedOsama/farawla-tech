"use client"

import React, { useRef } from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

import img from '@assets/offer.png'
import { useInView } from 'framer-motion'
const Offer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50%' });

  return (
    <section ref={ref} className="sm:h-screen py-12 overflow-hidden bg-white flex flex-col">
      <SectionTitle>ما تقدمه لك فراولة تيك</SectionTitle>
      <div className="grid sm:grid-cols-2 justify-items-center items-center -mt-12  w-11/12 sm:w-2/3 gap-4 sm:gap-8 mx-auto flex-1">
        <Image
          src={img}
          alt="offer"
          width={500}
          height={800}
          sizes="(max-width: 768px) 100vw, 500px"
          className="sm:order-last duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(500px)',
          }}
        />
        <p
          className='text-black text-3xl font-semibold text-center duration-700'
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-500px)',
          }}
        >
          تصميم وتنفيذ أنظمة زراعة بدون تربة لإنتاج الفراولة عالية التكنولوجية قائمة على نظام الزراعة الدقيقة
        </p>
      </div>
    </section>
  )
}

export default Offer