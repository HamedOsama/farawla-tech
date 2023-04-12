"use client"
import React, { useRef } from 'react'
import SectionTitle from '../SectionTitle'
import { useInView } from 'framer-motion';

const AboutUs = () => {
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
        <SectionTitle>عنا</SectionTitle>
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>البداية : انطلقت رحلة الفكرة من مركز CARES بالجامعة الأمريكية بالقاهرة في برنامج دعم قدرات العاملين  في المجال الزراعي برعاية من بنك HSBC ، ليستمر العمل وتنطلق فراولة تيك في الأسواق بمساعدة الكثير من الداعمين
          ( جمعية رجال الأعمال بالإسكندرية من خلال برنامج GIMMED .
          حاضنة ريادة الأعمال المجتمعية بجامعة هليوبوليس .
          برنامج أورانج كورنر الممول من السفارة الهولندية )</p>
      </div>
    </section>
  )
}

export default AboutUs;