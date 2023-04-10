import React from 'react'

interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <p
      className='text-center text-3xl sm:text-6xl bg-clip-text shadow-[0_4px_4px_#000000_0.29] text-transparent bg-gradient-to-r from-black to-[#D00720] py-4 mb-8 sm:mb-12'
    >
      {children}
    </p>
  )
}

export default SectionTitle