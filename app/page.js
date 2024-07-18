import Header from '@/components/Header/Header'
import Clientle from '@/components/Home/Clientle/Clientle'
import ContactUs from '@/components/Home/ContactUs/ContactUs'
import FieldConnect from '@/components/Home/FieldConnect/FieldConnect'
import OurImpactAndReach from '@/components/Home/OurImpactAndReach/OurImpactAndReach'
import OurPartners from '@/components/Home/OurPartners/OurPartners'
import OurServices from '@/components/Home/OurServices/OurServices'
import SDGs from '@/components/Home/SDGs/SDGs'
import Snapshot from '@/components/Home/Snapshot/Snapshot'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="h-[400px] md:h-[700px] bg-[url('/webBanner/banner01.png')] bg-cover bg-center mb-16">
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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-ce-brown text-center font-semibold">
            Building Stronger Communities through{' '}
            <br className="hidden sm:block" /> Insight and Engagement
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-ce-gray text-center mt-5">
            Community Engagement stands at the forefront of field services,
            revolutionising market and consumer research across India and
            globally. Our network of expertly trained and ethically certified
            field personnel excels in delivering customized, insightful <br />
            engagements within diverse communities.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-ce-gray text-center">
            Committed to rapid response and meticulous data collection, we
            empower organisations to make informed, impactful decisions. With
            capabilities for swift deployment both domestically and
            internationally,we ensure every project achieves strategic success
            and data integrity, setting new standards in community engagement
            and actionable insights.
          </p>
        </div>
      </div>

      <OurServices />
      <OurImpactAndReach />
      <Snapshot />
      <SDGs />
      <FieldConnect />
      <OurPartners />
      <Clientle />
      <ContactUs />
    </>
  )
}
