import Navbar from '@/components/Navbar'
import ParticleBg from '@/components/ParticleBg'
import Image from 'next/image'
import { FC } from 'react'

import img1 from '../../../public/assets/news/1.png'
import img2 from '../../../public/assets/news/2.png'
import img3 from '../../../public/assets/news/3.png'
import img4 from '../../../public/assets/news/4.png'
import { useTranslation } from '@/app/i18n'


const page = async ({ params: { lng } }: IParams) => {
  const { t } = await useTranslation(lng)

  return <main className='flex flex-col'>

    <div className="bg-white relative w-full py-8 sm:py-16">
      <div className="flex-1 w-10/12 sm:3/4 mx-auto flex flex-col gap-6 sm:gap-12">
        <div className="">
          <p className='text-xl sm:text-3xl font-bold text-center'>
            {t('news1')}
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4 items-center justify-items-center">
            <Image
              src={img2.src}
              alt='donation'
              width={300}
              height={300}
              placeholder='blur'
              blurDataURL={img2.blurDataURL}
            />
            <Image
              src={img1.src}
              alt='donation'
              width={300}
              height={300}
              placeholder='blur'
              blurDataURL={img1.blurDataURL}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-center justify-items-center">
          <p className='text-xl sm:text-3xl font-bold text-center'>
            {t('news2')}
          </p>
          <Image
            src={img3.src}
            alt='donation'
            width={300}
            height={300}
            placeholder='blur'
            blurDataURL={img3.blurDataURL}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-center justify-items-center">
          <div>
            <Image
              src={img4.src}
              alt='donation'
              width={300}
              height={300}
              placeholder='blur'
              blurDataURL={img4.blurDataURL}
              className='hidden sm:block'
            />
          </div>
          <div className="">
            <p className='text-xl sm:text-3xl font-bold text-center mb-4'>
              {t('news3')}
            </p>

            <p className='text-xl sm:text-3xl font-bold text-center'>
              {t('news4')}
            </p>
          </div>
          <Image
            src={img4.src}
            alt='donation'
            width={300}
            height={300}
            placeholder='blur'
            blurDataURL={img4.blurDataURL}
            className='sm:hidden'
          />
        </div>
      </div>
    </div>

  </main>
}

export default page