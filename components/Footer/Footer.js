import { facebook, linkedIn, twitter } from '@/utils/icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-ce-brown text-4xl">Contact Information</h2>
        <div className="border-2 border-ce-red w-20 mb-2" />
        <div className="flex gap-2">
          <h3 className="text-2xl">
            <span className="text-ce-vivid-md-green">Call:</span> +91 9448176887
          </h3>
          <span className="text-2xl font-light text-ce-vivid-md-green">|</span>
          <h3 className="text-2xl">
            <span className="text-ce-vivid-md-green">Email:</span>{' '}
            contactfuzhio@catalysts.org <span className="font-light">|</span>{' '}
            latheef@catalysts.org
          </h3>
        </div>
      </div>
      <div className="footer-bg bg-ce-vivid-green px-5 pt-5 pb-8 text-white mt-7">
        <div className="max-w-screen-2xl px-5 mx-auto mt-24">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl">Community Engagement</h1>
            <Image
              src="/home/logo.png"
              width={200}
              height={111}
              alt="Fuzhio"
              className="mix-blend-luminosity"
            />
          </div>
          <hr className="w-full mb-6 mt-1 border-ce-light-green" />
          <div className="flex flex-wrap justify-between">
            <div className="text-xl">
              <h3 className="mb-2 hover:text-ce-gray">
                <Link href="/who-we-are">About Us</Link>
              </h3>
              <h3 className="hover:text-ce-gray">
                <Link href="/social-impact">Field Connect</Link>
              </h3>
            </div>
            <div>
              <h3 className="text-xl mb-2">Services</h3>
              <ul className="font-extralight space-y-2">
                <li className="hover:text-ce-gray">
                  <Link href="/">Project Start-up Support (BoT)</Link>
                </li>
                <li className="hover:text-ce-gray">
                  <Link href="/">Tech4Community (T4C)</Link>
                </li>
                <li className="hover:text-ce-gray">
                  <Link href="/">Skills4Communities (S4C)</Link>
                </li>
                <li className="hover:text-ce-gray">
                  <Link href="/">Data for Decisions and Insights (DDI)</Link>
                </li>
                <li className="hover:text-ce-gray">
                  <Link href="/">Data Management (DM)</Link>
                </li>
                <li className="hover:text-ce-gray">
                  <Link href="/">
                    Assessments, Due Diligence and Rating Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-2">Resources</h3>
              <ul className="font-extralight space-y-2">
                <li className="hover:text-ce-gray">
                  <Link href="/">Blogs</Link>
                </li>
                <li className="hover:text-ce-gray">
                  <Link href="/">Media</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-2">Follow Us:</h3>
              <ul className="flex flex-row justify-between space-x-4 mt-2">
                <li className="bg-ce-light-green p-2.5 text-xl text-ce-black flex justify-center items-center rounded-full hover:bg-white cursor-pointer">
                  <Link href="/">{facebook}</Link>
                </li>
                <li className="bg-ce-light-green p-2.5 text-xl text-ce-black flex justify-center items-center rounded-full hover:bg-white cursor-pointer">
                  <Link href="/">{twitter}</Link>
                </li>
                <li className="bg-ce-light-green p-2.5 text-xl text-ce-black flex justify-center items-center rounded-full hover:bg-white cursor-pointer">
                  <Link href="/">{linkedIn}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ce-light-green p-5">
        <div className="max-w-screen-2xl flex flex-wrap justify-between items-center text-ce-brown mx-auto">
          <span>©{currentYear} Fuzhio. All Rights Reserved.</span>
          <ul className="flex flex-wrap">
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <Link href="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <Link href="/sitemap" className="hover:underline">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
