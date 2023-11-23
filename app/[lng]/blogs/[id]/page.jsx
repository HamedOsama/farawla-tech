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
    // setPosts([
    //   {id, topic: "Technology", arTopic: "تكنولوجيا",
    //   title: "The Impact of Technology on the Workplace: How Technology is Changing", arTitle: "تأثير التكنولوجيا على مكان العمل: كيف تتغير التكنولوجيا",
    //   body: [
    //     {title: "", desc: ["Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.", "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect."]},
    //     {title: "Research Your Destination", desc: ["Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus."]},
    //     {title: "Plan Your Itinerary", desc: ["While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.", "Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet."]},
    //     {title: "Pack Lightly and Smartly", desc: ["Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles."]},
    //     {title: "Stay Safe and Healthy", desc: ["Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times."]},

    //   ],
    //   arBody:  [{title: "_", desc: ["_"]}],
    //   conclusion: "Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.", arConclusion: "_",
    //   createdDate: "August 20, 2023", img: img2,},
    // ])
  
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

    {typeof window !== undefined && <div className="w-10/12 mx-auto flex flex-col items-center justify-center gap-5">
      <div className='flex flex-col gap-5'>
        <p className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded w-fit">{lng === 'ar'? posts[id].arTopic: posts[id].topic}</p>
        <p className=" text-gray-900 text-2xl">{lng === 'ar'? posts[id].arTitle: posts[id].title}</p>
        <p className=" text-gray-500">{posts[id].createdDate}</p>
        <img className="rounded-t-lg mx-auto w-full max-h-96 mt-4" src={posts[id].photo || img2} alt={posts[id].topic} />
        <p></p>
        <div className="flex flex-col gap-5">
          <p className='text-xl'>{lng === 'ar'? posts[id].arSubTitle : posts[id].subTitle}</p>
          <p className="text-gray-500">{lng === 'ar'? posts[id].arDesc : posts[id].desc}</p>
        </div>
        <div className="flex flex-col gap-5 max-w-2xl mx-auto">
          <p className="text-xl">{lng === "ar" ? "الملخص:":"conclusion:"}</p>
          <p className="text-gray-500">{lng === "ar" ? posts[id].arConclusion: posts[id].conclusion}</p>
        </div>
      </div>
    </div>}

  </section>
}

export default page