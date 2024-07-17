import { coreTeamData, qcData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const CoreTeam = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-12 px-5 mb-5">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl sm:text-3xl text-ce-brown text-center font-semibold">
          Core Team
        </h1>
        <div className="border-2 border-ce-red w-20 sm:w-32 mb-2" />
      </div>

      <div className="flex justify-center mt-7">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-16">
          {coreTeamData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex flex-col items-center gap-5">
                  <div className="bg-[#FFF3DE] w-[303px] h-[298px] rounded-3xl">
                    <Image
                      src={item.iconUrl}
                      width={303}
                      height={298}
                      alt={item.name}
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="flex flex-col items-center px-5 sm:px-10">
                    <h3 className="text-xl sm:text-2xl text-ce-brown text-center font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-base sm:text-lg text-ce-black text-center">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CoreTeam
