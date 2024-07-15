import Header from '@/components/Header/Header'
import { successStoriesData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[100vh] bg-[url('/whyChooseUs/banner.png')] bg-cover bg-center mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-40 mb-16">
        <div className="max-w-screen-xl mx-auto px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-6xl text-ce-brown text-center font-semibold">
              Success Stories
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-16">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {successStoriesData.map((item) => {
            return (
              <li key={item.id} className="w-[522px] p-2 bg-[#F4F4F4]">
                <div className="w-full">
                  <Image
                    src={item.imageUrl}
                    width={496}
                    height={310}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col items-start gap-5 px-3 py-4">
                  <h3 className="text-3xl text-[#1C1C1C] font-bold">
                    {item.heading}
                  </h3>
                  <h4 className="text-2xl text-[#1C1C1C]">{item.tiile}</h4>
                  <p className="text-base text-[#1C1C1C]">{item.desc}</p>
                  <button className="bg-ce-vivid-md-green text-white px-6 py-2 rounded">
                    Know More
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default page
