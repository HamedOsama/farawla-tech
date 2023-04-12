"use client"
import React, { useRef } from 'react'
import SectionTitle from '../SectionTitle'
import { useInView } from 'framer-motion';

const Mission = () => {
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
        <SectionTitle>هدفنا</SectionTitle>
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>نسعى إلى تصميم وتنفيذ أنظمة زراعة بدون تربة لإنتاج الفراولة إلى مزارعين الفراولة ، الأنظمة التي  تنتهج نظم الزراعة الدقيقة التي تهدف إلى توفير  احتياجات النباتات المثلى والدقيقة في التوقيات الصحيحة من الأسمدة والمياه ، مما يعمل على خفض تكاليف الإنتاج ، معتمدة بذلك على أدوات القياس والمتابهة التقنية مثل المستشعرات ، كما تهدف إلى تأمين الاستثمار الزراعي وحمايته من مخاطر الآفات والحد من الآثار السلبية للتغيرات المناخية .
          وذلك من خلال توفير المعرفة العميقة بواسطة فريق عمل متخصص وخبير لتعظيم الربحية بمشيئة الله</p>
      </div>
    </section>
  )
}

export default Mission