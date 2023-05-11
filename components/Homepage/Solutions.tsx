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
import { useTranslation } from '@/app/i18n'

const Solutions = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  const solutions = [
    {
      name: t('solution1'),
      img: img1,
    },
    {
      name: t('solution2'),
      img: img2,
    },
    {
      name: t('solution3'),
      img: img3,
    },
    {
      name: t('solution4'),
      img: img4,
    },
    {
      name: t('solution5'),
      img: img5,
    }
  ]
  return (
    <section className='solutions relative bg-white lg:min-h-screen flex flex-col items-center justify-center py-8  overflow-hidden'>
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
        <SectionTitle>{t('solutionTitle')}</SectionTitle>
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