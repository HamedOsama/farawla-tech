import Image from 'next/image'
import ParticleBg from '@/components/ParticleBg'
import Navbar from '@/components/Navbar'
import HomePageIntro from '@/components/Homepage/HomePageIntro'
import Problems from '@/components/Problems/Problems'
import Offer from '@/components/Homepage/Offer'
import Solutions from '@/components/Homepage/Solutions'
import OurTeam from '@/components/OurTeam/OurTeam'
import Sponsors from '@/components/Sponsors'

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] sm:min-h-screen">
        {/* <ParticleBg /> */}
        <div className="absolute inset-0 z-10 flex flex-col">
          <Navbar />
          <HomePageIntro />
        </div>
      </section>
      <Problems />
      <Offer />
      <Solutions />
      <OurTeam />
      <Sponsors />
    </main>
  )
}
