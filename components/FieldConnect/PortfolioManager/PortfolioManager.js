import Image from 'next/image'
import React from 'react'

const PortfolioManager = () => {
  return (
    <div className="qa-con flex flex-col items-center gap-10 py-24 px-5">
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

export default PortfolioManager
