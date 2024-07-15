import { ourServicesData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-16">
      <h2 className="text-ce-brown text-4xl">Our Services</h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <div className="flex justify-center">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-5">
          {ourServicesData.map((item) => {
            return (
              <li
                key={item.id}
                className="border-y-4 border-y-ce-brown rounded-3xl group shadow-lg"
              >
                <div className="flex flex-col items-center gap-2 p-4 rounded-3xl w-[303px] h-[302px] bg-[#FFF3DE] group-hover:bg-ce-orange transition-colors duration-300">
                  <h3 className="text-ce-brown text-2xl text-center font-semibold flex-grow group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xl text-ce-gray text-center mb-5 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                  <button className="px-5 py-2 bg-ce-orange text-white text-xl group-hover:text-ce-black group-hover:bg-white transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OurServices
