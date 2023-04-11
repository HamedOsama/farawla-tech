import React from 'react'

import img1 from '@assets/solution1.png'
import img2 from '@assets/solution2.png'
import img3 from '@assets/solution3.png'
import img4 from '@assets/solution4.png'
import img5 from '@assets/solution5.png'

import abBg from '@assets/solution-after.png'

import Problem from '../Problems/Problem'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'
const Solutions = () => {
  const solutions = [
    {
      name: 'بنستخدم برامج تسميد مخصصة للفراولة المزروعة بدون تربة',
      img: img1,
    },
    {
      name: 'هتروي زرعك بدقة عالية من خلال التكنولوجيا',
      img: img2,
    },
    {
      name: 'بنستخدم بدائل تربة محلية بنسبة 100%',
      img: img3,
    },
    {
      name: 'ممكن تشتغل موسمين في السنة لو شغال في الصوبة',
      img: img4,
    },
    {
      name: 'ظروف شغل العمال أفضل ، وهتنجز أكتر',
      img: img5,
    }
  ]
  return (
    <section className='relative bg-white lg:h-screen flex flex-col items-center justify-center py-8  overflow-hidden'>
      <div className="relative w-full">
        <span className='absolute top-0 -left-6'>
          <Image
            src={abBg.src}
            alt="Farawla Tech"
            width={200}
            height={200}
            sizes='(max-width: 768px) 100px, 200px'
            className='w-full sm:w-full'
          />
        </span>
        <span className='absolute top-0 -right-6'>
          <Image
            src={abBg.src}
            alt="Farawla Tech"
            width={200}
            height={200}
            sizes='(max-width: 768px) 100px, 200px'
            className='w-full sm:w-full'
          />
        </span>
        <SectionTitle>عارفين اللي تاعبك</SectionTitle>
      </div>
      <div className="flex-1 flex flex-wrap items-center justify-center w-3/4 gap-8 sm:gap-8 mx-auto">
        {solutions.map((solution, i) => (
          <div className="w-full md:w-1/4 h-auto" key={i} >
            <Problem name={solution.name} img={solution.img} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Solutions