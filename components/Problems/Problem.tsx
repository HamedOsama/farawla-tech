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
  const isInView = useInView(ref, { once: false, margin: '0px' });
  return (
    <div
      ref={ref}
      className='flex flex-col items-center justify-center gap-4 w-full duration-1000'
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(250px)',
      }}
    >
      <Image
        src={img.src}
        alt={name}
        width={200}
        height={200}
        sizes='(max-width: 768px) 100vw, 200px'
        className='aspect-square object-contain'
      />
      <p className='text-black text-center text-lg sm:text-2xl'>{name}</p>
    </div>
  )
}

export default Problem