import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full py-12">
      <ul className='w-full flex items-center justify-center gap-12 sm:gap-24 md:gap-36 lg:gap-48 text-lg sm:text-2xl'>
        <li>
          <Link href="/" className='text-white'>
            الرئيسية
          </Link>
        </li>
        <li>
          <Link href="/about" className='text-white'>
            عنا
          </Link>
        </li>
        <li>
          <Link href="/news" className='text-white'>
            أخبارنا
          </Link>
        </li>
        <li>
          <Link href="/contact" className='text-white'>
            تواصل معنا
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar