import Image from 'next/image'
import ParticleBg from '@/components/ParticleBg'
import Navbar from '@/components/Navbar'
import HomePageIntro from '@/components/Homepage/HomePageIntro'
import Problems from '@/components/Problems/Problems'
import Offer from '@/components/Homepage/Offer'
import Solutions from '@/components/Homepage/Solutions'
import OurTeam from '@/components/OurTeam/OurTeam'
import Sponsors from '@/components/Sponsors'

export default async function Home({ params: { lng } }: IParams) {
  return (
    <main>
      <section className="relative min-h-[calc(100svh-152px)] sm:min-h-[calc(100vh-128px)]">
        <div className="absolute flex flex-col bg-black inset-0 z-10 ">
          {/* <ParticleBg /> */}
          {/* <Navbar lng={lng} /> */}
          <HomePageIntro lng={lng} />
        </div>
      </section>
      {/* @ts-expect-error Server Component */}
      <Problems lng={lng} />
      <Offer lng={lng} />
      {/* @ts-expect-error Server Component */}
      <Solutions lng={lng} />
      {/* @ts-expect-error Server Component */}
      <OurTeam lng={lng} />
      <Sponsors lng={lng} />
    </main>
  )
}
