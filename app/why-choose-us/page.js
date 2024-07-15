import Header from '@/components/Header/Header'
import Expertise from '@/components/WhyChooseUs/Expertise/Expertise'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[100vh] bg-[url('/whyChooseUs/banner.png')] bg-cover bg-center mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-40 mb-16">
        <div className="max-w-screen-xl mx-auto px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-6xl text-ce-brown text-center font-semibold">
              Why Choose Us
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
          </div>
          <p className="text-2xl text-ce-gray text-center">
            We excel in accessing and understanding the critical mile where
            impact is targeted—in diverse communities and local ecosystems—which
            is crucial for making informed decisions, implementing
            interventions, and delivering services. Each community’s unique
            setting requires specialised knowledge, experience, and a tailored
            approach to engagement. The need for community engagement varies
            widely in duration and urgency based on stakeholder requirements,
            and cannot be effectively handled by casually contracted, short-term
            teams.
          </p>
        </div>
      </div>
      <Expertise />
    </>
  )
}

export default page
