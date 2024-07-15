import ContactUsForm from '@/components/ContactUs/ContactUsForm/ContactUsForm'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[100vh] bg-[url('/contactUs/banner.png')] bg-cover bg-center mb-16">
        <Header />
        {/* <div className="text-end mt-16">
        <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
          Contact Us
        </button>
      </div> */}
      </div>
      <div className="-mt-40 mb-16">
        <div className="max-w-screen-xl mx-auto px-12 flex flex-col items-center gap-6">
          <h1 className="text-6xl text-ce-brown text-center font-semibold">
            Contact Us
          </h1>
          <div className="border-2 border-ce-red w-40 mb-2" />
          <p className="text-4xl text-[#6E180C] text-center mt-5">
            Lets Start a Conversation
          </p>
          <div className="border-2 border-ce-carmine w-20 mb-2" />
        </div>
      </div>
      <ContactUsForm />
    </>
  )
}

export default page
