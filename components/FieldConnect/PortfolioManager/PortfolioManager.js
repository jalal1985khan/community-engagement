import Image from 'next/image'
import React from 'react'

const PortfolioManager = () => {
  return (
    <>
      <div className="qa-con flex flex-col items-center gap-10 py-24 px-5">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/fieldConnect/portfolio.png"
          width={1000}
          height={500}
          alt=""
          className="w-full md:w-4/6"
          data-aos="fade-up"
        />
      </div>
      {/* <svg width="1000" height="20">
        <line
          x1="0"
          y1="10"
          x2="200"
          y2="10"
          stroke="black"
          stroke-width="2"
          transform="rotate(-2 100 10)"
        />
      </svg> */}
    </>
  )
}

export default PortfolioManager
