'use client'

import React, { useState } from 'react'

const ContactUs = () => {
  const [clientele, setClientele] = useState({
    firstname: '',
    lastname: '',
    emailId: '',
    organisationName: '',
    message: '',
  })

  const handleForm = (e) => {
    e.preventDefault()
    console.log(clientele)
    setClientele({
      firstname: '',
      lastname: '',
      emailId: '',
      organisationName: '',
      message: '',
    })
  }

  const renderFirstname = () => (
    <div className="flex flex-col w-full">
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        className="border-0 py-2 px-3 rounded text-ce-black focus:outline-none focus:ring-0"
        value={clientele.firstname}
        onChange={(e) =>
          setClientele({ ...clientele, firstname: e.target.value })
        }
      />
    </div>
  )

  const renderLastname = () => (
    <div className="flex flex-col w-full">
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        className="border-0 py-2 px-3 rounded text-ce-black focus:outline-none focus:ring-0"
        value={clientele.lastname}
        onChange={(e) =>
          setClientele({ ...clientele, lastname: e.target.value })
        }
      />
    </div>
  )

  const renderEmailId = () => (
    <div className="flex flex-col w-full">
      <label htmlFor="email">Email ID</label>
      <input
        type="email"
        id="email"
        className="border-0 py-2 px-3 rounded text-ce-black focus:outline-none focus:ring-0"
        value={clientele.emailId}
        onChange={(e) =>
          setClientele({ ...clientele, emailId: e.target.value })
        }
      />
    </div>
  )

  const renderOrganisationName = () => (
    <div className="flex flex-col w-full">
      <label htmlFor="organisationName">Organisation</label>
      <input
        type="text"
        id="organisationName"
        className="border-0 py-2 px-3 rounded text-ce-black focus:outline-none focus:ring-0"
        value={clientele.organisationName}
        onChange={(e) =>
          setClientele({ ...clientele, organisationName: e.target.value })
        }
      />
    </div>
  )

  const renderMessage = () => (
    <div className="flex flex-col w-full">
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="2"
        className="w-full border-0 rounded text-ce-black px-3 py-2 focus:outline-none focus:ring-0"
        value={clientele.message}
        onChange={(e) =>
          setClientele({ ...clientele, message: e.target.value })
        }
      ></textarea>
    </div>
  )

  return (
    <div className="bg-ce-carmine text-white py-10 px-4 sm:px-10 mb-16">
      <div className="max-w-screen-xl flex flex-col items-center mx-auto gap-3">
        <h1 className="text-3xl sm:text-4xl">Contact Us</h1>
        <div className="border-2 border-white w-16" />
        <p className="text-lg sm:text-2xl font-light text-center w-11/12 sm:w-3/5">
          Reach out to explore how our services can turn insights into impact
        </p>
        <p className="text-sm sm:text-base font-light mb-3 text-center w-11/12 sm:w-auto">
          Connect with us for your data requirements
        </p>
        <form className="w-full max-w-screen-lg" onSubmit={handleForm}>
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {renderFirstname()}
              {renderLastname()}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {renderEmailId()}
              {renderOrganisationName()}
            </div>
            <div className="w-full">{renderMessage()}</div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-white rounded text-ce-brown text-lg sm:text-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
