import { sdgData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const SDGs = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-16">
      <h2 className="text-ce-brown text-4xl">SDGs We Are Aligned With</h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <div className="flex justify-center mt-5">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16">
          {sdgData.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <Image src={item.iconUrl} width={163} height={163} alt="" />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SDGs
