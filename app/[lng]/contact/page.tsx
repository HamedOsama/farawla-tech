"use client"
import Navbar from '@/components/Navbar'
import ParticleBg from '@/components/ParticleBg'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'
import { FC, useState } from 'react'
import { toast } from 'react-hot-toast'

import contactBackground from '@assets/contact-background.png'
// import { Loader2 } from 'lucide-react'

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const page = ({ params: { lng } }: IParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const data: FormData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const { name, phone, message } = data;

    if (!name || !phone || !message) {
      toast.error(
        lng === 'ar' ?
          'الرجاء ملئ جميع الحقول'
          :
          'Please fill all fields'
      );
      return;
    }

    const phoneRegexEG = /^(\+?2)?01[0125][0-9]{8}$/;
    if (!phoneRegexEG.test(phone)) {
      toast.error(
        lng === 'ar' ?
          'رقم الهاتف غير صحيح'
          :
          'Invalid phone number'
      );
      return;
    }

    try {
      setIsLoading(true);
      const req = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (req.ok) {
        toast.success(
          lng === 'ar' ?
            'تم ارسال الرسالة بنجاح'
            :
            'Message sent successfully'
        );
        // reset form
        (e.target as HTMLFormElement).reset()
      }
    } catch (e: any) {
      toast.error(e?.message ||
        lng === 'ar' ?
        'حدث خطأ ما'
        :
        'Something went wrong'
      );
    } finally {
      setIsLoading(false);
    }


  }
  return <main>
    <section className='min-h-screen relative bg-white'>
      <div className="absolute inset-0">
        <Image
          src={contactBackground.src}
          alt='contact us'
          blurDataURL={contactBackground.blurDataURL}
          placeholder='blur'
          className='w-full h-full object-cover'
          width={contactBackground.width}
          height={contactBackground.height}
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      <div className="relative w-full sm:w-4/5 mx-auto py-24  sm:py-32  rounded-md">
        <div className="bg-white px-4 sm:px-6 lg:px-8 pt-2 pb-4 sm:pb-8 rounded-md">

          <SectionTitle>
            {lng === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </SectionTitle>
          <div className="mt-12">
            <form onSubmit={submitFormHandler} className="grid grid-cols-1 gap-y-6 sm:gap-x-8 max-w-md mx-auto">
              <div className=''>
                <label htmlFor="name" className="block text-base sm:text-2xl lg:text-3xl font-medium text-gray-900 ">
                  {lng === 'ar' ? 'الاسم' : 'Name'}
                </label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" autoComplete="given-name" className="block w-full border-2 border-red-400 shadow-sm text-md sm:text-lg focus:ring-indigo-500 focus:border-indigo-500 rounded-md duration-300" />
                </div>
              </div>
              <div className="">
                <label htmlFor="phone" className="block text-base sm:text-2xl lg:text-3xl font-medium text-gray-900 ">
                  {lng === 'ar' ? 'رقم الهاتف' : 'Phone'}
                </label>
                <div className="mt-1">
                  <input type="number" name="phone" id="phone" autoComplete="given-name" className="block w-full border-2 border-red-400 shadow-sm text-md sm:text-lg focus:ring-indigo-500 focus:border-indigo-500 rounded-md duration-300 " />
                </div>
              </div>
              <div className="">
                <label htmlFor="message" className="block text-base sm:text-2xl lg:text-3xl font-medium text-gray-900 ">
                  {lng === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="block w-full border-2 border-red-400 shadow-sm text-md sm:text-lg focus:ring-indigo-500 focus:border-indigo-500 rounded-md duration-300" defaultValue={""} />
                </div>
              </div>
              <button disabled={isLoading} type="submit" className="w-full gap-4 flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-md sm:text-lg font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                {
                  isLoading ?
                    <>
                      {lng === 'ar' ? 'جاري الارسال' : 'Sending'}
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="24"
                      height="24" 
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-loader-2 animate-spin w-5 h-5">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                    </>
                    :
                    <>
                      {lng === 'ar' ? 'ارسال' : 'Send'}
                    </>
                }
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  </main>
}

export default page