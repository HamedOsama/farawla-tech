import { useTranslation } from '@/app/i18n'
import Link from 'next/link'
import React from 'react'

import LangButton from './LangButton'

export default async function Navbar({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  return (
    <nav className="w-full py-12">
      <ul className='w-4/5 sm:w-full mx-auto flex items-center justify-between gap-4 text-lg sm:text-2xl px-4 sm:px-12 md:px-16 lg:px-20 xl:px-28 flex-wrap'>
        <li>
          <Link href={`/${lng}`} className='text-white hover:text-red-600 cursor-pointer duration-300'>
            {t('navbar.home')}
          </Link>
        </li>
        <li>
          <Link href={`/${lng}/about`} className='text-white hover:text-red-600 cursor-pointer duration-300'>
            {t('navbar.about')}
          </Link>
        </li>
        <li>
          <Link href={`/${lng}/news`} className='text-white hover:text-red-600 cursor-pointer duration-300'>
            {t('navbar.news')}
          </Link>
        </li>
        <li>
          <Link href={`/${lng}/contact`} className='text-white hover:text-red-600 cursor-pointer duration-300'>
            {t('navbar.contact')}
          </Link>
        </li>
        <li className='flex flex-col sm:flex-row gap-2'>
          <LangButton lng={'ar'} />
          <LangButton lng={'en'} />
        </li>
      </ul>
    </nav>
  )
}
