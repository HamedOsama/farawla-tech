"use client"
import React, { useRef } from 'react'
import SectionTitle from '../SectionTitle'
import { useInView } from 'framer-motion';

const Vision = () => {
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
        <SectionTitle>رؤيتنا</SectionTitle>
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>نسعى لتحسين إدارة الموارد المحلية والمحافظة على استخدامتها من خلال  خفض استهلاك الموارد المحلية مثل المياه في إنتاج محاصيل تصديرية مثل الفراولة ،  والمحافظة على التربة من الممارسات السلبية مثل الزراعة الأحادية والتسميد الجائر المستنزف لخصوبة التربة وجودتها .
          لنعمل على تحسين ظروف العاملين  في المجتمع المحلي في القطاع الزراعي</p>
      </div>
    </section>
  )
}

export default Vision