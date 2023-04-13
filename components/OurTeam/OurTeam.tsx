import React from 'react'
import Image from 'next/image'


import Member from '../Homepage/Member'
import SectionTitle from '../SectionTitle'

import img1 from '@assets/member1.png'
import img2 from '@assets/member2.png'
import img3 from '@assets/member3.png'
import img4 from '@assets/member4.png'
import flower from '@assets/flower.png'

const OurTeam = () => {
  const members = [
    {
      name: 'أحمد رمضان عوف',
      position: 'المدير التنفيذي ومطور الأعمال',
      faculty: 'بكالوريوس الهندسة الزراعي',
      university: 'جامعة بنها',
      img: img1,
    },
    {
      name: 'محمد حافظ',
      position: 'مطور المنتجات وعمليات التشغيل',
      faculty: 'دكتوراة كيمياء الأراضي',
      university: 'جامعة باري ألدو مورو إيطاليا',
      img: img2,
    },
    {
      name: 'أحمد النجار',
      position: 'مطور المنتجات و عمليات التشغيل',
      faculty: 'دكتوراة معهد الري الدقيق',
      university: 'جامعة ماسي نيوزلندا',
      img: img3,
    },
    {
      name: 'حمادة عبد الرحمن',
      position: 'مطور عمليات التشغيل',
      faculty: 'ماجستير أمراض النبات',
      university: 'جامعة بنها',
      img: img4,
    }
  ]

  return (
    <section className='relative bg-white lg:min-h-screen flex flex-col items-center justify-center py-8  overflow-hidden'>
      <div className="relative w-full">
        <span className='absolute top-1/2 -left-5 md:-left-10 -translate-y-1/2'>
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
        <SectionTitle>فريق العمل</SectionTitle>
      </div>
      <div className="flex-1 grid md:grid-cols-4 items-stretch justify-center content-center w-3/4 gap-8 sm:gap-8 mx-auto">
        {members.map((solution, i) => (
          <div className={`w-full md:order-${10 - i} `} key={i}>
            <Member
              name={solution.name}
              position={solution.position}
              faculty={solution.faculty}
              university={solution.university}
              img={solution.img}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurTeam