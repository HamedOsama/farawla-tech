"use client"
import Image from 'next/image'
import react from 'react'
import load from '../../../api/load'
 
import { FC } from 'react'

import img1 from '../../../../public/assets/blogs/1.png'
import img2 from '../../../../public/assets/blogs/2.png'

const page = ({params}) => {
  const lng = params.lng || 'en';
  const id = params.id || '0';
  const [posts, setPosts] = react.useState([
    {id: "1", topic: "Technology", arTopic: "تكنولوجيا",
    title: "The Impact of Technology on the Workplace: How Technology is Changing", arTitle: "تأثير التكنولوجيا على مكان العمل: كيف تتغير التكنولوجيا",
    conclusion: "", arConclusion: "", subTitle: "", arSubTitle: "", desc: "", arDesc: "", photo: img2,
    createdDate: "August 20, 2023"},
  ])
 
  react.useEffect(() => {
  
    const loadData = async()=>{
      const data = await load()
      if(data && data[0]) {
        const info = data.map((_, i)=>{
          return {
            id: i, topic: _.get("topic"), arTopic: _.get("arTopic"),
            title: _.get("title"), arTitle: _.get("arTitle"),
            conclusion: _.get("conclusion"), arConclusion: _.get("arConclusion"), subTitle: _.get("subTitle"), arSubTitle: _.get("arSubTitle"), desc: _.get("desc"),
             arDesc: _.get("arDesc"), photo: _.get("photo"),
            createdDate: _.get("createdDate")
          }
        }) 
        setPosts(info)
      }
      }
      loadData()
  }, [])
  
  return <section className='flex flex-col py-8 sm:py-16 bg-white relative'>

    {typeof window !== undefined && posts[id] && <div className="w-10/12 mx-auto flex flex-col items-center justify-center gap-5">
      <div className='flex flex-col gap-5'>
        <p className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded w-fit">{lng === 'ar'? posts[id]?.arTopic: posts[id]?.topic}</p>
        <p className=" text-gray-900 text-2xl">{lng === 'ar'? posts[id]?.arTitle: posts[id]?.title}</p>
        <p className=" text-gray-500">{posts[id]?.createdDate}</p>
        <Image className="rounded-t-lg mx-auto w-full max-h-96 mt-4 object-cover" src={posts[id]?.photo || img2} alt={posts[id]?.topic} 
        width={posts[id]?.photo?.width || 1000} height={posts[id]?.photo?.height || 500} />
        <p></p>
        <div className="flex flex-col gap-5">
          <p className='text-xl'>{lng === 'ar'? posts[id]?.arSubTitle : posts[id]?.subTitle}</p>
          <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: lng === 'ar'? posts[id]?.arDesc : posts[id]?.desc }}></p>
        </div>
        <div className="flex flex-col gap-5 max-w-2xl mx-auto">
          <p className="text-xl">{lng === "ar" ? "الملخص:":"conclusion:"}</p>
          <p className="text-gray-800">{lng === "ar" ? posts[id]?.arConclusion: posts[id]?.conclusion}</p>
        </div>
      </div>
    </div>}

  </section>
}

export default page