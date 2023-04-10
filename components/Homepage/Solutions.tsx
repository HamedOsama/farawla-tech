import React from 'react'

import img1 from '@assets/solution1.png'
import img2 from '@assets/solution2.png'
import img3 from '@assets/solution3.png'
import img4 from '@assets/solution4.png'
import img5 from '@assets/solution5.png'

import Problem from '../Problems/Problem'
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
    <section className='bg-white sm:h-screen flex items-center justify-center py-8 sm:py-0 overflow-hidden'>
      <div className="flex flex-wrap items-center justify-center w-3/4 gap-8 sm:gap-8 mx-auto">
        {solutions.map((solution, i) => (
          <div className="w-full sm:w-1/4">
            <Problem name={solution.name} img={solution.img} key={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Solutions