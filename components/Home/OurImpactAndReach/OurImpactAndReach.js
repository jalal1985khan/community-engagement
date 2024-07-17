import Image from 'next/image'

const OurImpactAndReach = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-16">
      <h2 className="text-ce-brown text-3xl">Our Impact and Reach</h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <Image
        src="/home/ourImpactAndReach/image.png"
        width={700}
        height={420}
        alt=""
        className="mt-5"
      />
    </div>
  )
}

export default OurImpactAndReach
