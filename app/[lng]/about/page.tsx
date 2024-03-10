import React from 'react'

import AboutUs from '@/components/About/AboutUs'
import Mission from '@/components/About/Mission'
import Vision from '@/components/About/Vision'
import Navbar from '@/components/Navbar'
import OurTeam from '@/components/OurTeam/OurTeam'
import ParticleBg from '@/components/ParticleBg'
import Sponsors from '@/components/Sponsors'

const page = async ({ params: { lng } }: IParams) => {
  return (
    <main>
      <h1 className=' sr-only'>Farawlatech / فراولة تك</h1>
      
      <AboutUs lng={lng}/>
      <Mission lng={lng}/>
      <Vision lng={lng}/>
      {/* @ts-expect-error Server Component */}
      <OurTeam lng={lng} />
      <Sponsors lng={lng} />
    </main>
  )
}

export default page