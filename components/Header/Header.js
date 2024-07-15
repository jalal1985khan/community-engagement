import React from 'react'

const Header = () => {
  return (
    <nav className="">
      <div className="max-w-screen-2xl p-5 flex flex-wrap items-center justify-between mx-auto text-white">
        <h1 className="text-2xl">Community Engagement</h1>
        <div className="p-7 navbar-polygon">
          <ul className="flex text-lg space-x-8">
            <li>Home</li>
            <li>About Us</li>
            <li>Field Connect</li>
            <li>Services</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
