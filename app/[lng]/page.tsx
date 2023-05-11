import Image from 'next/image'
import ParticleBg from '@/components/ParticleBg'
import Navbar from '@/components/Navbar'
import HomePageIntro from '@/components/Homepage/HomePageIntro'
import Problems from '@/components/Problems/Problems'
import Offer from '@/components/Homepage/Offer'
import Solutions from '@/components/Homepage/Solutions'
import OurTeam from '@/components/OurTeam/OurTeam'
import Sponsors from '@/components/Sponsors'
import Footer from '@/components/Footer'

export default async function Home({ params: { lng } }: IParams) {
  return (
    <main>
      <section className="relative min-h-[100svh] sm:min-h-screen">
        <ParticleBg />
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* @ts-expect-error Server Component */}
          <Navbar lng={lng} />
          <HomePageIntro lng={lng} />
        </div>
      </section>
      {/* @ts-expect-error Server Component */}
      <Problems lng={lng}/>
      <Offer />
      <Solutions />
      <OurTeam />
      <Sponsors />
      <Footer />
    </main>
  )
}
