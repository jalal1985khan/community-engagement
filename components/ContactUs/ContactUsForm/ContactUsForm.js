'use client'

import React, { useState } from 'react'

const ContactUsForm = () => {
  const [contactUs, setContactUs] = useState({
    firstname: '',
    lastname: '',
    phoneNo: '',
    emailId: '',
    organisationName: '',
    message: '',
  })

  const handleForm = (e) => {
    e.preventDefault()
    console.log(contactUs)
    setClientele({
      firstname: '',
      lastname: '',
      phoneNo: '',
      emailId: '',
      organisationName: '',
      message: '',
    })
  }

  const renderFirstname = () => (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        className="border-0 py-2 px-3 rounded text-ce-black shadow focus:outline-none focus:ring-0"
        value={contactUs.firstname}
        onChange={(e) =>
          setContactUs({ ...contactUs, firstname: e.target.value })
        }
      />
    </div>
  )

  const renderLastname = () => (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        className="border-0 py-2 px-3 rounded text-ce-black shadow focus:outline-none focus:ring-0"
        value={contactUs.lastname}
        onChange={(e) =>
          setContactUs({ ...contactUs, lastname: e.target.value })
        }
      />
    </div>
  )

  const renderPhoneNumber = () => (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="lastname">Phone Number</label>
      <input
        type="text"
        id="lastname"
        className="border-0 py-2 px-3 rounded text-ce-black shadow focus:outline-none focus:ring-0"
        value={contactUs.phoneNo}
        onChange={(e) =>
          setContactUs({ ...contactUs, phoneNo: e.target.value })
        }
      />
    </div>
  )

  const renderEmailId = () => (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="email">Email ID</label>
      <input
        type="email"
        id="email"
        className="border-0 py-2 px-3 rounded text-ce-black shadow focus:outline-none focus:ring-0"
        value={contactUs.emailId}
        onChange={(e) =>
          setContactUs({ ...contactUs, emailId: e.target.value })
        }
      />
    </div>
  )

  const renderOrganisationName = () => (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="organisationName">Organisation</label>
      <input
        type="text"
        id="organisationName"
        className="border-0 py-2 px-3 rounded text-ce-black shadow focus:outline-none focus:ring-0"
        value={contactUs.organisationName}
        onChange={(e) =>
          setContactUs({ ...contactUs, organisationName: e.target.value })
        }
      />
    </div>
  )

  const renderMessage = () => (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="2"
        className="w-full border-0 shadow rounded text-ce-black px-3 py-2 focus:outline-none focus:ring-0"
        value={contactUs.message}
        onChange={(e) =>
          setContactUs({ ...contactUs, message: e.target.value })
        }
      ></textarea>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row justify-between p-10 gap-20 max-w-screen-2xl mx-auto mb-10">
      <div className="w-1/2">
        <h3 className="text-ce-gray text-2xl mb-4">
          See our platform in action
        </h3>
        <h4 className="text-[#1C1C1C] mb-2">
          Contact us with any questions or comments. Our dedicated team is ready
          to assist you.
        </h4>
        {/* <p className="text-[#1C1C1C]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p> */}
      </div>
      <div className="w-1/2 shadow p-4">
        <form className="w-full" onSubmit={handleForm}>
          <div className="space-y-7">
            {renderFirstname()}
            {renderLastname()}
            {renderPhoneNumber()}
            {renderEmailId()}
            {renderOrganisationName()}
            {renderMessage()}
            <button
              type="submit"
              className="px-4 py-2 bg-ce-vivid-md-green rounded text-white text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUsForm
