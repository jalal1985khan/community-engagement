import Header from '@/components/Header/Header'
import QA from '@/components/Methodology/QA/QA'
import QC from '@/components/Methodology/QC/QC'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[700px] bg-[url('/webBanner/banner04.png')] bg-cover bg-center mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-16 mb-16">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-ce-brown text-center font-semibold">
              Methodology
            </h1>
            <div className="border-2 border-ce-red w-20 mb-2" />
            <h2 className="text-base sm:text-lg lg:text-xl text-ce-brown text-center">
              Data Quality Assurance and Control Process
            </h2>
          </div>
          <p className="text-base lg:text-xl text-ce-gray text-center">
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

      <QA />
      <QC />
    </>
  )
}

export default page
