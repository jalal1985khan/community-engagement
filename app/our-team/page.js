import CoreTeam from '@/components/FieldConnect/CoreTeam/CoreTeam'
import MentorAndAdvisors from '@/components/FieldConnect/MentorAndAdvisors/MentorAndAdvisors'
import Mentors from '@/components/FieldConnect/Mentors/Mentors'
import PortfolioManager from '@/components/FieldConnect/PortfolioManager/PortfolioManager'
import Header from '@/components/Header/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[700px] bg-[url('/webBanner/banner10.png')] bg-cover mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-40 mb-12">
        <CoreTeam />
        <Mentors />
        <MentorAndAdvisors />
      </div>
    </>
  )
}

export default page
