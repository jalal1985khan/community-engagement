'use client'

import { AppContext } from '@/context/AppContext'
import { servicesData } from '@/utils/data'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const Services = () => {
  const { activeServiceId } = useContext(AppContext)
  const [activeTab, setActiveTab] = useState(activeServiceId)

  const getActiveService = () => {
    const filteredActiveService = servicesData.find(
      (item) => item.id === activeTab
    )
    return filteredActiveService
  }

  const isValidCard = getActiveService().data.card.length >= 1
  return (
    <>
      <div className="flex justify-center mb-5">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-screen-xl mx-auto">
          {servicesData.map((item) => (
            <li key={item.id}>
              <button
                className={`${
                  activeTab === item.id
                    ? 'bg-ce-brown text-white'
                    : 'bg-white text-ce-brown'
                } px-4 py-2 sm:px-6 sm:py-2 border border-ce-orange rounded-md text-sm sm:text-base`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-5 mt-8 px-3 max-w-screen-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl text-ce-brown font-semibold text-center">
            {getActiveService().data.title}
          </h1>
          <div className="border-2 border-ce-red w-20 mb-2" />
          <p className="text-ce-gray text-center text-base sm:text-lg w-full sm:w-3/4">
            {getActiveService().data.desc}
          </p>
        </div>
      </div>

      <div className="flex justify-center my-8 sm:my-10">
        {isValidCard ? (
          <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16 px-3">
            {getActiveService().data.card.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center gap-5 w-full"
              >
                <div className="flex flex-col items-center gap-5 w-full">
                  <Image
                    src={item.iconUrl}
                    width={158}
                    height={158}
                    alt={item.title}
                    className=""
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-xl sm:text-2xl text-ce-brown text-center font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-ce-gray text-center">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Services
