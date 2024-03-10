"use client"
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react';
import { useSearchParams , useRouter } from 'next/navigation';
import load from '../../api/load'

import img1 from '../../../public/assets/blogs/1.png'
import img2 from '../../../public/assets/blogs/2.png'
import img3 from '../../../public/assets/blogs/3.png'
import { useTranslation } from '@/app/i18n'
import Link from 'next/link';


const page = ({ params: { lng } }) => {
//   photo: StaticImageData;
//     createdDate: string;
// }[]>
  const router = useRouter()
  const [postsList, setPostsList] = useState([
    {id: "1", topic: "", arTopic: "",
    title: "", arTitle: "",
    conclusion: "", arConclusion: "", subTitle: "", arSubTitle: "", desc: "", arDesc: "", photo: img2,
    createdDate: ""},
  ])

  useEffect(() => {
    const loadData = async()=>{
    const data = await load()
    if(data && data[0]) {
      const info = data.map((_, i)=>{
        return {
          id: i, topic: _.get("topic"), arTopic: _.get("arTopic"),
          title: _.get("title"), arTitle: _.get("arTitle"),
          conclusion: _.get("conclusion"), arConclusion: _.get("arConclusion"), subTitle: _.get("subTitle"), arSubTitle: _.get("arSubTitle"), desc: _.get("desc"),
           arDesc: _.get("arDesc"), photo: _.get("photo"),
          createdDate: _.get("createdDate"), slug: _.get("slug"), alt: _.get("alt"), tags: _.get("tags")
        }
      }) 
      setPostsList(info.reverse())
    }
    }
    loadData()
  }, [])
  

  return <main className='flex flex-col'>
  <h1 className=' sr-only'>Farawlatech / فراولة تك</h1>

    <div className="bg-white relative w-full py-8 sm:py-16 flex flex-col items-center justify-center gap-5">
      <div className="w-10/12 mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
        {postsList.map((_, i)=>{
          return <Link key={i} href={`/${lng}/blogs/${_.slug}`}
          className="max-w-lg bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
                  <Image className="rounded-t-lg mx-auto w-11/12 mt-4 h-44 object-cover" src={_?.photo || img2} alt={_.topic}
                  width={_?.photo?.width || 200} height={_?.photo?.height || 100} />
              <div className="p-5 flex flex-col gap-5">
                <p className="bg-blue-100 text-[#4B6BFB] text-sm font-medium me-2 px-2.5 py-0.5 rounded w-fit">{lng === 'ar'? _.arTopic:_.topic}</p>
                <h2 className=" text-gray-900 text-2xl">{lng === 'ar'? _.arTitle:_.title}</h2>
                <p className=" text-gray-500">{ _.createdDate}</p>
              </div>
          </Link>
        })}
      </div>
      {/* <button className="bg-white border border-gray-200 rounded-lg shadow px-2 py-1">{lng==="ar"? "عرض كل المدونات": "View All Post"}</button> */}
    </div>

  </main>
}

export default page