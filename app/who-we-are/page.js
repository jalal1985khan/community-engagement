import Header from '@/components/Header/Header'
import HealthAndWealth from '@/components/WhoWeAre/HealthAndWealth/HealthAndWealth'
import OurPresence from '@/components/WhoWeAre/OurPresence/OurPresence'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[100vh] bg-[url('/whoWeAre/banner.png')] bg-cover bg-center mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-28 mb-16">
        <div className="ps-40 flex flex-col items-start gap-6">
          <div className="w-auto flex flex-col items-center gap-4">
            <h1 className="text-6xl text-ce-brown font-semibold">Who We Are</h1>
            <div className="border-2 border-ce-red w-32" />
          </div>
          <h2 className="text-4xl text-ce-brown">
            Transforming Insights into Action
          </h2>
          <div className="flex flex-wrap justify-between">
            <p className="text-2xl text-ce-gray w-3/5">
              Transforming market and consumer intelligence into actionable
              insights empowers individuals to make more informed and impactful
              decisions, driving success and fostering meaningful change in
              their strategies and initiatives. Our expertise lies in immersing
              ourselves in diverse communities, leveraging advanced technology
              and comprehensive methodologies to uncover valuable perspectives
              and achieve transformative outcomes.
            </p>
            <div className="w-[400px] h-[400px] bg-ce-vivid-md-green"></div>
          </div>
        </div>
      </div>
      <HealthAndWealth />
      <OurPresence />
    </>
  )
}

export default page
