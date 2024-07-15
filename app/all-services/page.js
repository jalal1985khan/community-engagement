'use client'

import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import { clientleData, servicesData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  const [activeTab, setActiveTab] = useState(1)

  const getActiveService = () => {
    const filteredActiveService = servicesData.find(
      (item) => item.id === activeTab
    )
    return filteredActiveService
  }

  const isValidCard = getActiveService().data.card.length >= 1

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
              Services
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <ul className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto">
          {servicesData.map((item) => {
            return (
              <li key={item.id}>
                <button
                  className={`${
                    activeTab === item.id
                      ? 'bg-ce-brown text-white'
                      : 'bg-white text-ce-brown'
                  } px-6 py-2 border border-ce-orange rounded-md`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.tab}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-5 mt-16 px-3 max-w-screen-xl mx-auto">
          <h1 className="text-5xl text-ce-brown font-semibold text-center">
            {getActiveService().data.title}
          </h1>
          <div className="border-2 border-ce-red w-32 mb-2" />
          <p className="text-ce-gray text-center text-2xl w-3/4">
            {getActiveService().data.desc}
          </p>
        </div>
      </div>

      <div className="flex justify-center my-16">
        {isValidCard ? (
          <ul className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-16">
            {getActiveService().data.card.map((item) => {
              return (
                <li key={item.id}>
                  <div className="flex flex-col items-center gap-5 w-[311px]">
                    <Image
                      src={item.iconUrl}
                      width={158}
                      height={158}
                      alt={item.tiile}
                      className=""
                    />
                    <h3 className="text-2xl text-ce-gray text-center font-semibold">
                      {item.tiile}
                    </h3>
                    <p className="text-xl text-ce-gray text-center">
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default page
