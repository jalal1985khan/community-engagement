import { snapshotData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Snapshot = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-16">
      <h2 className="text-ce-brown text-4xl">Snapshot</h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <ul className="flex flex-wrap justify-center gap-3 mt-5">
        {snapshotData.map((item) => {
          return (
            <li
              key={item.id}
              className="border-b-4 border-b-ce-green rounded-lg"
            >
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg w-[243px] h-[225px] bg-[#F5F6BA]">
                <div className="flex-grow-0">
                  <Image
                    src={item.iconUrl}
                    width={83}
                    height={80}
                    alt=""
                    className="h-20"
                  />
                </div>
                <div className="border-b-2 border-b-ce-black border-dashed w-full my-3" />
                <h3 className="text-ce-black text-4xl font-semibold">
                  {item.count}
                </h3>
                <p className="text-ce-brown">{item.title}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Snapshot
