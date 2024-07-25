'use client'
import CoreTeam from '@/components/FieldConnect/CoreTeam/CoreTeam'
import MentorAndAdvisors from '@/components/FieldConnect/MentorAndAdvisors/MentorAndAdvisors'
import Mentors from '@/components/FieldConnect/Mentors/Mentors'
import PortfolioManager from '@/components/FieldConnect/PortfolioManager/PortfolioManager'
import Header from '@/components/Header/Header'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = () => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div className="h-[700px] bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/webBanner/banner05.png')] bg-cover mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-24 mb-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold"
              data-aos="fade-up"
            >
              Field Connect
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
            <h2
              className="text-lg sm:text-xl lg:text-2xl text-ce-brown text-center"
              data-aos="fade-down"
            >
              Data Quality Assurance and Control Process
            </h2>
          </div>
          <p
            className="text-base sm:text-lg lg:text-xl text-ce-gray text-center"
            data-aos="fade-up"
          >
            Social research is on the rise, driven by the need to understand
            complex social dynamics beyond mere consumer preferences. This surge
            highlights a crucial gap: the need for well-trained fieldworkers who
            can gather high-quality data, essential for informed decision-making
            and positive social impact.
          </p>
          <p
            className="text-base sm:text-lg lg:text-xl text-ce-gray text-center"
            data-aos="fade-down"
          >
            To address this, the Community Engagement unit of the Catalyst Group
            has launched Field Connect. This initiative aims to build a
            passionate, future-ready, committed, trained, and ethically
            certified team. The team comprises over 2,681 skilled field
            researchers spread across India, including remote areas. This
            ensures our partners can reach diverse communities and drive
            impactful solutions.
          </p>
        </div>
      </div>
      <PortfolioManager />
      {/* <CoreTeam />
      <Mentors />
      <MentorAndAdvisors /> */}
    </>
  )
}

export default Page
