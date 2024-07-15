import Image from 'next/image'
import React from 'react'

const QA = () => {
  return (
    <div className="qa-con flex flex-col items-center gap-10 py-24 px-5">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl text-ce-brown text-center font-semibold">
          Quality Assurance (QA)
        </h1>
        <div className="border-2 border-ce-red w-32 mb-2" />
      </div>
      <p className="text-2xl text-ce-black text-center w-4/6">
        Quality Assurance (QA) is the overall management system that includes
        effective planning, selection of high quality experienced local field
        enumerators, training of field researchers, robust data collection
        processes and protocols, quality control measures, documentation
        systems, and reporting activities of the assignment work. QA provides
        information that ensures the quality of data and assesses if it meets
        the requirements of the project.
      </p>
      <Image
        src="/methodology/qa.png"
        width={1000}
        height={500}
        alt=""
        className="w-3/4"
      />
    </div>
  )
}

export default QA
