"use client"
import Image from 'next/image'
import React from 'react'

interface ProblemProps {
  name: string
  img: any
}

const Problem = ({ name, img }: ProblemProps) => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-4 w-full'
    >
      <Image
        src={img.src}
        alt={name}
        width={150}
        height={150}
        sizes='(max-width: 768px) 100vw, 150px'
        className='aspect-square object-contain duration-1000 ease-in-out'
        data-aos="fade-up"
      />
      <p
        className='text-black text-center text-lg sm:text-2xl duration-1000 delay-100 ease-in-out'
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {name}
      </p>
    </div>
  )
}

export default Problem