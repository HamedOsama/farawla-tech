"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
// import { ArrowLeft } from 'lucide-react'
import SideImg from '../../../public/assets/admin/side.png'
import SideMobileImg from '../../../public/assets/admin/sideMobile.png'
import Form from './form'

const page =  ({params}) => {
  const lng = params.lng || 'en';
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isOk, setIsOk] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const submitForm = async (e) => {
    e.preventDefault();
    
    if ( userName !== '' && password !== '') {
      setIsLoading(true)
      if(userName === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) setIsOk(true)
      else alert(lng === 'ar'? 'خطأ في اسم المستخدم أو كلمة المرور':'username or password is incorrect')
      setIsLoading(false)
    }else{
      alert(lng === 'ar'? 'برجاء ادخال كلمة اسم المستخدم وكلمة المرور':'please enter the username and password')
    }
  };

  useEffect(() => {
    if(isOk) alert('login successfull')
  }, [isOk])
  
return <section className='flex items-center justify-center flex-wrap bg-white relative w-full h-full p-8 max-sm:p-4 gap-5'>
  {!isOk? <div className="flex items-center justify-center flex-wrap relative w-full h-full" style={isOk? {display: 'none'}: {}}>
      <div className="w-1/4 max-lg:hidden max-h-[75svh] overflow-hidden rounded-3xl">
        <Image src={SideImg} alt='farawla logo' className='w-full h-full object-contain -mt-12'/>
      </div>
      <div className="w-full hidden max-lg:block">
        <Image src={SideMobileImg} alt='farawla logo' className='w-full h-full'/>
      </div>
      <form className="w-1/2 h-fit max-lg:w-full max-sm:w-full bg-[#ff00220d] rounded-3xl text-gray-800 min-h-[75svh] flex flex-col items-center justify-center" 
      onSubmit={submitForm}>
        <p className="text-4xl text-center max-w-sm w-full">{lng === "ar"? "تسجيل الدخول": "Sing in"}</p>
        <div className="mb-5 max-w-sm">
          <label htmlFor="username" className="block mb-2 text-sm font-medium">{lng === "ar"? "اسم المستخدم":"User Name"}</label>
          <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#FF0020] focus:border-[#FF0020] block w-full p-2.5" placeholder="admin" 
          value={userName} onChange={(e)=>setUserName(e.target.value)} required />
        </div>
        <div className="mb-5 max-w-sm">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">{lng === "ar"? "كلمة المرور":"Password"}</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#FF0020] focus:border-[#FF0020] block w-full p-2.5" 
            value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={isLoading} className="text-white bg-[#FF0020] hover:bg-[#ff3700] focus:ring-4 focus:outline-none focus:ring-[#ff002247] font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center ">{isLoading? (lng === "ar"? "...جار الإرسال":"sending..."):(lng === "ar"? "ارسال":"Submit")}</button>
      </form>
    </div>
    : <Form lng={lng} ok={isOk} />}
  </section>
}

export default page