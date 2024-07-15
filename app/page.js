import Footer from '@/components/Footer/Footer'
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
      <div className="h-[100vh] bg-[url('/home/Banner/banner01.png')] bg-cover bg-center mb-16">
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
          <h1 className="text-5xl text-ce-brown text-center font-semibold">
            Building Stronger Communities through <br /> Insight and Engagement
          </h1>
          <p className="text-2xl text-ce-gray text-center">
            Transforming market and consumer intelligence into actionable
            insights empowers individuals to make more informed and impactful
            decisions, driving success and fostering meaningful change in their
            strategies and initiatives. Our expertise lies in immersing
            ourselves in diverse communities, leveraging advanced technology and
            comprehensive methodologies to uncover valuable perspectives and
            achieve transformative outcomes.
          </p>
          <p className="text-2xl text-ce-gray text-center">
            We are dedicated to more than just data collection; we emphasise
            capacity building, seamless community onboarding, and fostering
            meaningful engagement for program and decision-making excellence.
            Collaborating with Catalyst Management Services, Swasti, Vrutti,
            Upfront, Green Foundation, and Fuzhio, we ensure high-quality,
            accurate data collection and analysis.
          </p>
          <p className="text-2xl text-ce-gray text-center">
            Choosing CE means selecting a partner committed to empowerment and
            precision, ensuring your strategies are not only well-informed but
            also capable of driving lasting change.
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
