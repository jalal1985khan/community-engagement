'use client'
import Header from '@/components/Header/Header'
import Expertise from '@/components/WhyChooseUs/Expertise/Expertise'
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
      <div
        className="h-[700px] bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/webBanner/banner03.png')] bg-cover mb-16"
        data-aos="zoom-in"
      >
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-24 mb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold"
              data-aos="fade-up"
            >
              Why Choose Us
            </h1>
            <div className="border-2 border-ce-red w-20 sm:w-32 mb-2" />
          </div>
          <p
            className="text-base sm:text-lg lg:text-xl text-ce-gray text-center"
            data-aos="fade-down"
          >
            Our deep field connection and engagement with diverse grassroots
            communities empower us to swiftly draw out authentic and actionable
            data and insights. We offer a rapid 72-hour deployment capabilities
            extending to Asia, the Middle East, and Africa. Our ethically
            certified, ultra-local field teams are rigorously trained to meet
            specific project needs, ensuring precise, gender-balanced insights.
            Our &apos;Data Quality Assurance and Control&apos; ensures every
            insight is authentic and actionable, making us your ideal partner
            for driving meaningful change.
          </p>
        </div>
      </div>

      <Expertise />
    </>
  )
}

export default Page
