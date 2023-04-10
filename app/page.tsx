import Image from 'next/image'
import ParticleBg from '@/components/ParticleBg'
import Navbar from '@/components/Navbar'
import HomePageIntro from '@/components/Homepage/HomePageIntro'
import Problems from '@/components/Problems/Problems'

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] sm:min-h-screen">
        <ParticleBg />
        <div className="absolute inset-0 z-10 flex flex-col">
          <Navbar />
          <HomePageIntro />
        </div>
      </section>
      <Problems />
    </main>
  )
}
