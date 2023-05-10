import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ParticleBg from '@/components/ParticleBg'
import Image from 'next/image'
import { FC } from 'react'

import img1 from '../../public/assets/news/1.png'
import img2 from '../../public/assets/news/2.png'
import img3 from '../../public/assets/news/3.png'
import img4 from '../../public/assets/news/4.png'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return <main className='flex flex-col'>
    <div className="relative">
      <Navbar />
      <ParticleBg />
    </div>
    <div className="bg-white relative w-full py-8 sm:py-16">
      <div className="flex-1 w-10/12 sm:3/4 mx-auto flex flex-col gap-6 sm:gap-12">
        <div className="grid sm:grid-cols-2 gap-4 items-center justify-items-center">
          <Image
            src={img1.src}
            alt='donation'
            width={300}
            height={300}
            placeholder='blur'
            blurDataURL={img1.blurDataURL}
          />
          <p className='text-xl sm:text-3xl font-bold text-center'>الحمد لله ، حصلت فكرة فراولة تيك على المركز  الأول في مسابقة المشاريع في برنامج بناء القدرات للمهنيين العاملين في مجال الزراعة  بمركز البحوث التطبيقية في البيئة والاستدامة ( CARES )  بالجامعة الأمريكية بالقاهرة برعاية بنك HSPC  وبدعم مالي قدره 50 ألف جنيه مصري </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-center justify-items-center">
          <p className='text-xl sm:text-3xl font-bold text-center'>الحمد لله ، انتهت رحلتنا في البرنامج التدريبي في مركز ريادة الأعمال للتأثير الاجتماعي بجامعة هليوبوليس للتنمية المستدامة بالقاهرة ، بفوزنا بالمركز الثالث عن فكرة (farawlatech) وبدعم مالي قدره 2000 يورو.</p>
          <Image
            src={img2.src}
            alt='donation'
            width={300}
            height={300}
            placeholder='blur'
            blurDataURL={img2.blurDataURL}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-center justify-items-center">
          <div>
            <Image
              src={img3.src}
              alt='donation'
              width={300}
              height={300}
              placeholder='blur'
              blurDataURL={img3.blurDataURL}
              className='mb-4'
            />
            <Image
              src={img4.src}
              alt='donation'
              width={300}
              height={300}
              placeholder='blur'
              blurDataURL={img4.blurDataURL}
              className='hidden sm:block'
            />
          </div>
          <div className="">
            <p className='text-xl sm:text-3xl font-bold text-center mb-4'>الحمد لله ، فازت فراولة تيك بالمنافسة في رحلة حاضنة برنامج GIMED ودعم مالي بقيمة 7500 يورو
              يهدف GIMED إلى تعزيز تطوير المشاريع البيئية المبتكرة من أجل خلق فرص العمل ودفع الاقتصاد الأخضر والدائري في منطقة البحر الأبيض المتوسط ،  ينفذ المشروع "معيار ريادة الأعمال الخضراء" </p>

            <p className='text-xl sm:text-3xl font-bold text-center'>
              المدعوم من الأمم المتحدة والذي سيوحد المدخلات الداعمة اللازمة لتوليد مشاريع ناجحة وسيمنح هذه المشاريع علامة الجودة للوصول بشكل أفضل إلى التمويل والأسواق. على أرض الواقع ، قام المشروع بتدريب  المبتكرين البيئيين وتشجيع الممولين على الاستثمار في قطاع الابتكار البيئي في منطقة البحر الأبيض المتوسط
            </p>
          </div>
          <Image
              src={img4.src}
              alt='donation'
              width={300}
              height={300}
              placeholder='blur'
              blurDataURL={img4.blurDataURL}
              className='sm:hidden'
            />
        </div>
      </div>
    </div>

    <Footer />
  </main>
}

export default page