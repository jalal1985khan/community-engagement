import Image from 'next/image'
import React from 'react'

const HealthAndWealth = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="text-ce-brown text-4xl text-center">
            Ensuring the Health and Wealth of <br /> Marginalised Communities
          </h2>
          <div className="border-2 border-ce-red w-20 mb-2" />
          <Image
            src="/whoWeAre/health.png"
            width={1000}
            height={1000}
            alt=""
            className="mt-5 w-4/5"
          />
        </div>
      </div>
    </div>
  )
}

export default HealthAndWealth
