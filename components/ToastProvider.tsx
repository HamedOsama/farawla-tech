'use client'

import { FC } from 'react'
import { Toaster } from 'react-hot-toast'


const ToastProvider: FC = () => {
  return <>
    <Toaster position='top-right' reverseOrder={false} />
  </>
}

export default ToastProvider