import { qcData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const QC = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 px-5 sm:px-10 lg:px-24 mb-10">
      <div className="flex flex-col items-center gap-3">
        <h1
          className="text-xl sm:text-2xl lg:text-3xl text-ce-brown text-center font-semibold"
          data-aos="fade-up"
        >
          Quality Control (QC)
        </h1>
        <div className="border-2 border-ce-red w-20 mb-2" />
      </div>
      <p
        className="text-base sm:text-lg lg:text-xl text-ce-black text-center sm:w-5/6 lg:w-4/6"
        data-aos="fade-down"
      >
        Quality Control (QC) exercise constitutes routine technical activities
        that are in place to control errors in data collection. Since errors can
        occur at any stage in the process, QC will be strictly followed at each
        stage of the study. QC will include both internal and external measures.
        QC ensures ‘data confidence’ as it helps to validate the authenticity
        and robustness of the data collected by the enumerators.
      </p>
      <div className="flex justify-center mt-7">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {qcData.map((item) => {
            return (
              <li
                key={item.id}
                className="flex flex-col items-center gap-5"
                data-aos="zoom-in"
              >
                <Image
                  src={item.iconUrl}
                  width={140}
                  height={140}
                  alt={item.title}
                  className=""
                />
                <h3 className="text-xl text-ce-gray text-center font-semibold">
                  {item.title}
                </h3>
                <p className="text-lg text-ce-gray text-center">{item.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default QC
