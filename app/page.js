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
      <div className="-mt-40 mb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-ce-brown text-center font-semibold">
            Building Stronger Communities through{' '}
            <br className="hidden sm:block" /> Insight and Engagement
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-ce-gray text-center mt-5">
            Transforming market and consumer intelligence into actionable
            insights empowers individuals to make informed decisions, driving
            success and fostering strategic change. Our expertise lies in
            engaging with diverse communities, utilising advanced technology and
            methods to discover valuable perspectives. Our presence spans every
            corner of the nation and extends across the globe. In collaboration
            with <br />
            <Link
              href="https://cms.org.in"
              target="_blank"
              className="text-ce-black underline"
            >
              Catalyst Management Services
            </Link>
            ,{' '}
            <Link
              href="https://swasti.org"
              target="_blank"
              className="text-ce-black underline"
            >
              Swasti
            </Link>
            ,{' '}
            <Link
              href="https://vruttiimpactcatalysts.org"
              target="_blank"
              className="text-ce-black underline"
            >
              Vrutti
            </Link>
            ,{' '}
            <Link
              href="https://upfront.global"
              target="_blank"
              className="text-ce-black underline"
            >
              Upfront
            </Link>
            ,{' '}
            <Link
              href="https://greenfoundation.in"
              target="_blank"
              className="text-ce-black underline"
            >
              Green Foundation
            </Link>
            , and{' '}
            <Link
              href="https://fuzhio.org"
              target="_blank"
              className="text-ce-black underline"
            >
              Fuzhio
            </Link>
            , we ensure high-quality, accurate <br /> data collection and
            analysis.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-ce-gray text-center">
            Choosing Community Engagement means selecting a partner committed to
            empowerment and precision, ensuring your strategies are
            well-informed and capable of driving lasting, impactful change.
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
