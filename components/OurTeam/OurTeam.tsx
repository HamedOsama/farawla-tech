import React from 'react'
import Image from 'next/image'


import Member from '../Homepage/Member'
import SectionTitle from '../SectionTitle'

import img1 from '@assets/member1.png'
import img2 from '@assets/member2.png'
import img3 from '@assets/member3.png'
import img4 from '@assets/member4.png'
import flower from '@assets/flower.png'
import { useTranslation } from '@/app/i18n'

const OurTeam = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)
  const members = [
    {
      name: t('AhmedOuf.name'),
      position: t('AhmedOuf.position'),
      faculty: t('AhmedOuf.faculty'),
      university: t('AhmedOuf.university'),
      img: img1,
    },
    {
      name: t('AhmedELnagar.name'),
      position: t('AhmedELnagar.position'),
      faculty: t('AhmedELnagar.faculty'),
      university: t('AhmedELnagar.university'),
      img: img3,
    },
    {
      name: t('HamadaAbdelrahman.name'),
      position: t('HamadaAbdelrahman.position'),
      faculty: t('HamadaAbdelrahman.faculty'),
      university: t('HamadaAbdelrahman.university'),
      img: img4,
    },
    {
      name: t('MohamedHafez.name'),
      position: t('MohamedHafez.position'),
      faculty: t('MohamedHafez.faculty'),
      university: t('MohamedHafez.university'),
      img: img2,
    },
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
        <SectionTitle>{t('ourTeamTitle')}</SectionTitle>
      </div>
      <div className="flex-1 grid md:grid-cols-4 items-stretch justify-center content-center w-3/4 gap-8 sm:gap-8 mx-auto">
        {members.map((solution, i) => (
          <div className={`w-full md:order-${5 - i} `} key={i}>
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