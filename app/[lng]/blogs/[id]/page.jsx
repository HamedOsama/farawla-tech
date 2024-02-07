"use client"
import Image from 'next/image'
import react from 'react'
import load from '../../../api/load'
import { usePathname } from 'next/navigation'
 
import { FC } from 'react'

import img2 from '../../../../public/assets/blogs/2.png'

const page = ({params}) => {
  const pathname = usePathname()
  const lng = params.lng || 'en';
  const id = params.id || '0';
  const [posts, setPosts] = react.useState([
    {id: "1", topic: "Technology", arTopic: "تكنولوجيا",
    title: "The Impact of Technology on the Workplace: How Technology is Changing", arTitle: "تأثير التكنولوجيا على مكان العمل: كيف تتغير التكنولوجيا",
    conclusion: "", arConclusion: "", subTitle: "", arSubTitle: "", desc: "", arDesc: "", photo: null, slug: "", alt: "", alt: "",
    createdDate: "August 20, 2023"},
  ])
  const [post, setPost] = react.useState({})
 
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
            createdDate: _.get("createdDate"), slug: _.get("slug"), alt: _.get("alt"), tags: _.get("tags")
          }
        }) 
        console.log('info', info)
        setPosts(info)
      }
    }
    loadData()
  }, [])

  react.useEffect(()=>{
    if(posts[0].photo){
      const thisBlog = posts?.find(_=>_?.slug === pathname.split('/')[3]) || posts?.find(_=>_?.slug === decodeURI(pathname.split('/')[3]))
      setPost(thisBlog)
      console.log(pathname.split('/')[2], pathname.split('/')[3])
      console.log('posts[0]?.slug', posts[0]?.slug)
      console.log('thisBlog', thisBlog)
    }
  }, [posts])
  
  return <section className='flex flex-col py-8 sm:py-16 bg-white relative'>

    {typeof window !== undefined && post?.photo && <div className="w-10/12 mx-auto flex flex-col items-center justify-center gap-5">
      <div className='flex flex-col gap-5 w-full'>
        <p className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded w-fit">{lng === 'ar'? post?.arTopic: post?.topic}</p>
        <p className=" text-gray-900 text-2xl">{lng === 'ar'? post?.arTitle: post?.title}</p>
        <p className=" text-gray-500">{post?.createdDate}</p>
        <Image className="rounded-t-lg mx-auto w-full max-h-96 mt-4 object-cover min-w-full" src={post?.photo || img2} alt={post?.topic} 
        width={post?.photo?.width || 1000} height={post?.photo?.height || 500} />
        <p></p>
        <div className="flex flex-col gap-5 w-full tiptab-document">
          <p className='text-xl'>{lng === 'ar'? post?.arSubTitle : post?.subTitle}</p>
          <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: lng === 'ar'? post?.arDesc : post?.desc }}></p>
        </div>
        <div className="flex flex-col gap-5 max-w-2xl mx-auto w-full">
          <p className="text-xl">{lng === "ar" ? "الملخص:":"conclusion:"}</p>
          <p className="text-gray-800">{lng === "ar" ? post?.arConclusion: post?.conclusion}</p>
        </div>
      </div>
    </div>}

  </section>
}

export default page