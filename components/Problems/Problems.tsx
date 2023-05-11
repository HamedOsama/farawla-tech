import React from 'react'

import img1 from '@assets/problem1.png'
import img2 from '@assets/problem2.png'
import img3 from '@assets/problem3.png'
import img4 from '@assets/problem4.png'
import Problem from './Problem'
import SectionTitle from '../SectionTitle'
import { useTranslation } from '@/app/i18n'

const Problems = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  const problems = [
    {
      name: t('problem1'),
      img: img1,
    },
    {
      name: t('problem2'),
      img: img2,
    },
    {
      name: t('problem3'),
      img: img3,
    },
    {
      name: t('problem4'),
      img: img4,
    },
  ]
  return (
    <section className='bg-white sm:min-h-screen flex flex-col items-center justify-center py-8 overflow-hidden'>
      <div className="w-full">
        <SectionTitle>{t('problemsTitle')}</SectionTitle>
      </div>
      <div className="grid sm:grid-cols-2 justify-items-center w-1/2 gap-8 sm:gap-8 mx-auto">
        {problems.map((problem, i) => (
          <Problem name={problem.name} img={problem.img} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Problems