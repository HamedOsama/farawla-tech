"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'

interface ProblemProps {
  name: string
  img: any
}

const Problem = ({ name, img }: ProblemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '10%' });
  return (
    <div
      ref={ref}
      className='flex flex-col items-center justify-center gap-4 w-full'
    >
      <Image
        src={img.src}
        alt={name}
        width={150}
        height={150}
        sizes='(max-width: 768px) 100vw, 150px'
        className='aspect-square object-contain duration-1000 ease-in-out'
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(150%)',
        }}
      />
      <p className='text-black text-center text-lg sm:text-2xl'>{name}</p>
    </div>
  )
}

export default Problem