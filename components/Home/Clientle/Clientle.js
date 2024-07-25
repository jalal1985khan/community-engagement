'use client'

import { clientleData } from '@/utils/data'
import Image from 'next/image'
import React, { useState } from 'react'

const Clientle = () => {
  const [activeTab, setActiveTab] = useState(1)

  const getActivePartners = () => {
    const filteredActivePartners = clientleData.find(
      (item) => item.id === activeTab
    )

    return filteredActivePartners.partners
  }

  return (
    <div className="mb-16">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-4">
        <h2 className="text-ce-brown text-3xl" data-aos="fade-up">
          Clientele
        </h2>
        <div className="border-2 border-ce-red w-20 mb-2" />
        <p
          className="text-center text-ce-gray text-lg w-10/12"
          data-aos="fade-down"
        >
          Our expertise spans across various sectors, serving a diverse array of
          clients committed to making a difference. From governmental bodies to
          non-profits and beyond, our data-driven insights light the way for
          transformative actions.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <ul className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto">
          {clientleData.map((item) => {
            return (
              <li key={item.id} data-aos="fade-right">
                <button
                  className={`${
                    activeTab === item.id
                      ? 'bg-ce-orange text-white'
                      : 'bg-white text-ce-orange'
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

      <div className="flex justify-center mt-10">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-3">
          {getActivePartners().map((item, index) => {
            return (
              <li key={index} data-aos="fade-left">
                <Image src={item} width={219} height={70} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Clientle
