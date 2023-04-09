"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion'

interface PageWrapperProps {
  children: React.ReactNode
}
const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  )
}

export default PageWrapper