import Image from 'next/image'
import React from 'react'

const FieldConnect = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-16">
      <h2 className="text-ce-brown text-4xl">Field Connect</h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <div>
        <Image src="/home/placeholder.png" width={940} height={518} alt="" />
      </div>
    </div>
  )
}

export default FieldConnect
