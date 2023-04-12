import React from 'react'

import img1 from '@assets/problem1.png'
import img2 from '@assets/problem2.png'
import img3 from '@assets/problem3.png'
import img4 from '@assets/problem4.png'
import Problem from './Problem'

const Problems = () => {
  const problems = [
    {
      name: 'الأرض ملحت ومبقتش تجيب خير زي الأول',
      img: img1,
    },
    {
      name: 'العنكبوت الأحمر والدودة والتربس ماليين الأرض',
      img: img2,
    },
    {
      name: 'االمناخ اتغير والشبورة والحر تعبينك',
      img: img3,
    },
    {
      name: 'يومية العمال زادت والناس بطلت تشتغل ف الأرض',
      img: img4,
    },
  ]
  return (
    <section className='bg-white sm:min-h-screen flex items-center justify-center py-8 overflow-hidden'>
      <div className="grid sm:grid-cols-2 justify-items-center w-1/2 gap-8 sm:gap-8 mx-auto">
        {problems.map((problem, i) => (
          <Problem name={problem.name} img={problem.img} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Problems