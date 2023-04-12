import React from 'react'

import AboutUs from '@/components/About/AboutUs'
import Mission from '@/components/About/Mission'
import Vision from '@/components/About/Vision'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import OurTeam from '@/components/OurTeam/OurTeam'
import ParticleBg from '@/components/ParticleBg'
import Sponsors from '@/components/Sponsors'

const page = () => {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <ParticleBg />
      </div>
      <AboutUs />
      <Mission />
      <Vision />
      <OurTeam />
      <Sponsors />
      <Footer />
    </main>
  )
}

export default page