import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'

import img from '@assets/offer.png'
const Offer = () => {
  return (
    <section className="sm:h-screen py-12 overflow-hidden bg-white flex flex-col">
      <SectionTitle>ما تقدمه لك فراولة تيك</SectionTitle>
      <div className="grid sm:grid-cols-2 justify-items-center items-center -mt-12  w-11/12 sm:w-2/3 gap-4 sm:gap-8 mx-auto flex-1">
        <Image
          src={img}
          alt="offer"
          width={500}
          height={800}
          sizes="(max-width: 768px) 100vw, 500px"
          className="sm:order-last"
        />
        <p className='text-black text-3xl font-semibold text-center'>
          تصميم وتنفيذ أنظمة زراعة بدون تربة لإنتاج الفراولة عالية التكنولوجية قائمة على نظام الزراعة الدقيقة
        </p>
      </div>
    </section>
  )
}

export default Offer