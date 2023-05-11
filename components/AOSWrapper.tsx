'use client'

import { FC, useEffect } from 'react'

interface AOSWrapperProps {

}

const AOSWrapper: FC<AOSWrapperProps> = ({ }) => {
  useEffect(() => {
    import('aos').then((AOS) =>
      AOS.init({
        duration: 600,
      })
    );
  }, []);
  return <></>
}

export default AOSWrapper