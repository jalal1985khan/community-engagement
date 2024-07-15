import { qcData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const QC = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 px-5 mb-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl text-ce-brown text-center font-semibold">
          Quality Control (QC)
        </h1>
        <div className="border-2 border-ce-red w-32 mb-2" />
      </div>
      <p className="text-2xl text-ce-black text-center w-4/6">
        Quality Control (QC) exercise constitutes routine technical activities
        that are in place to control errors in data collection. Since errors can
        occur at any stage in the process, QC will be strictly followed at each
        stage of the study. QC will include both internal and external measures.
        QC ensures ‘data confidence’ as it helps to validate the authenticity
        and robustness of the data collected by the enumerators.
      </p>
      <div className="flex justify-center mt-7">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-16">
          {qcData.map((item) => {
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
      </div>
    </div>
  )
}

export default QC
