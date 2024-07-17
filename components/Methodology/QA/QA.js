import Image from 'next/image'
import React from 'react'

const QA = () => {
  return (
    <div className="qa-con flex flex-col items-center gap-10 py-16 px-5 sm:px-10 lg:px-24">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-ce-brown text-center font-semibold">
          Quality Assurance (QA)
        </h1>
        <div className="border-2 border-ce-red w-20 mb-2" />
      </div>
      <p className="text-base sm:text-lg lg:text-xl text-ce-black text-center sm:w-5/6 lg:w-4/6">
        Quality Assurance (QA) encompasses the overall management system, which
        involves effective planning and selection of experienced local field
        enumerators. It includes training field researchers, implementing robust
        data collection processes and protocols, and applying quality control
        measures. Additionally, QA involves documentation systems and reporting
        activities for the assignment work. This system provides information
        that confirms the data's quality and evaluates whether it meets the
        project's requirements.
      </p>
      <Image
        src="/methodology/qa.png"
        width={1000}
        height={500}
        alt=""
        className="w-4/5 sm:w-3/5 lg:w-3/5"
      />
    </div>
  )
}

export default QA
