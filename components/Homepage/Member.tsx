"use client"
import Image from 'next/image'
import React from 'react'

interface MemberProps {
  name: string
  position: string
  faculty: string
  university: string
  img: any
}

const Member = ({ name, position, faculty, university, img }: MemberProps) => {
  return (
    <div
      className='flex items-center justify-center flex-col duration-700 ease-in-out'
      data-aos="fade-up"
    >
      <div className="relative rounded-[50%] w-36 h-36 overflow-hidden mb-6 cursor-pointer">
        {/* <div className="absolute inset-0 bg-black/50 duration-300 ease-in-out hover:bg-transparent"></div> */}
        <Image
          src={img.src}
          alt={name}
          width={150}
          height={150}
          sizes='(max-width: 768px) 100vw, 150px'
          className='aspect-square object-contain'
        />
      </div>
      <h4 className='text-[#D20721] text-center text-lg sm:text-2xl'>{name}</h4>
      <p className='text-black text-center text-base sm:text-lg'>{position}</p>
      <p className='text-black text-center text-base sm:text-lg'>{faculty}</p>
      <p className='text-black text-center text-base sm:text-lg'>{university}</p>
    </div>
  )
}

export default Member