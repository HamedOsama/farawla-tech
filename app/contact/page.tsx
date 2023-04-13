"use client"
import Navbar from '@/components/Navbar'
import ParticleBg from '@/components/ParticleBg'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'
import { FC } from 'react'
import { toast } from 'react-hot-toast'

import contactBackground from '@assets/contact-background.png'
import Footer from '@/components/Footer'

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const page: FC = ({ }) => {
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
      toast.error("الرجاء ملئ جميع الحقول");
      return;
    }

    const phoneRegexEG = /^(\+?2)?01[0125][0-9]{8}$/;
    if (!phoneRegexEG.test(phone)) {
      toast.error("رقم الهاتف غير صحيح");
      return;
    }

    try {
      const req = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      console.log(res);
      if (res === "sent") {
        toast.success("تم إرسال الرسالة بنجاح");
      }
    } catch (e: any) {
      toast.error(e?.message || "حدث خطأ ما");
    }


  }
  return <main>
    <div className="relative">
      <Navbar />
      <ParticleBg />
    </div>
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

          <SectionTitle>تواصل معنا</SectionTitle>
          <div className="mt-12">
            <form onSubmit={submitFormHandler} className="grid grid-cols-1 gap-y-6 sm:gap-x-8 max-w-md mx-auto">
              <div className=''>
                <label htmlFor="name" className="block text-base sm:text-2xl lg:text-3xl font-medium text-gray-900 ">
                  الاسم
                </label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" autoComplete="given-name" className="block w-full border-2 border-red-400 shadow-sm text-md sm:text-lg focus:ring-indigo-500 focus:border-indigo-500 rounded-md duration-300" />
                </div>
              </div>
              <div className="">
                <label htmlFor="phone" className="block text-base sm:text-2xl lg:text-3xl font-medium text-gray-900 ">
                  رقم الهاتف
                </label>
                <div className="mt-1">
                  <input type="number" name="phone" id="phone" autoComplete="given-name" className="block w-full border-2 border-red-400 shadow-sm text-md sm:text-lg focus:ring-indigo-500 focus:border-indigo-500 rounded-md duration-300 " />
                </div>
              </div>
              <div className="">
                <label htmlFor="message" className="block text-base sm:text-2xl lg:text-3xl font-medium text-gray-900 ">
                  الرسالة
                </label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="block w-full border-2 border-red-400 shadow-sm text-md sm:text-lg focus:ring-indigo-500 focus:border-indigo-500 rounded-md duration-300" defaultValue={""} />
                </div>
              </div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-md sm:text-lg font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
    <Footer />
  </main>
}

export default page