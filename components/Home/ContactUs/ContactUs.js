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
        className="border-0 outline-none py-2 px-3 rounded text-ce-black"
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
        className="border-0 outline-none py-2 px-3 rounded text-ce-black"
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
        className="border-0 outline-none py-2 px-3 rounded text-ce-black"
        value={clientele.emailId}
        onChange={(e) =>
          setClientele({ ...clientele, emailId: e.target.value })
        }
      />
    </div>
  )

  const renderOrganisationName = () => (
    <div className="flex flex-col w-full">
      <label htmlFor="organisationName">Organisation Name</label>
      <input
        type="text"
        id="organisationName"
        className="border-0 outline-none py-2 px-3 rounded text-ce-black"
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
        rows="6"
        className="w-full rounded text-ce-black outline-none px-3 py-2"
        value={clientele.message}
        onChange={(e) =>
          setClientele({ ...clientele, message: e.target.value })
        }
      ></textarea>
    </div>
  )

  return (
    <div className="bg-ce-carmine text-white py-16 px-10 mb-16">
      <div className="max-w-screen-xl flex flex-col items-center mx-auto gap-5">
        <h1 className="text-5xl">Contact Us</h1>
        <div className="border-2 border-white w-16 mb-2" />
        <p className="text-4xl font-light text-center w-3/5">
          Reach out to explore how our services can turn insights into impact.
        </p>
        <p className="mt-4 font-light">
          Connect with us for your data requirements.
        </p>
        <form className="w-full max-w-screen-lg" onSubmit={handleForm}>
          <div className="space-y-10">
            <div className="flex gap-3 w-full">
              {renderFirstname()}
              {renderLastname()}
            </div>
            <div className="flex gap-3 w-full">
              {renderEmailId()}
              {renderOrganisationName()}
            </div>
            <div className="w-full">{renderMessage()}</div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-white rounded text-ce-brown text-xl"
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
