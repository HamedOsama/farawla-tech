import { useTranslation } from '@/app/i18n'
import Link from 'next/link'
import React from 'react'

export default async function Navbar({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  return (
    <nav className="w-full py-12">
      <ul className='w-full flex items-center justify-center gap-12 sm:gap-24 md:gap-36 lg:gap-48 text-lg sm:text-2xl'>
        <li>
          <Link href="/" className='text-white'>
            {t('navbar.home')}
          </Link>
        </li>
        <li>
          <Link href="/about" className='text-white'>
            {t('navbar.about')}
          </Link>
        </li>
        <li>
          <Link href="/news" className='text-white'>
            {t('navbar.news')}
          </Link>
        </li>
        <li>
          <Link href="/contact" className='text-white'>
            {t('navbar.contact')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
