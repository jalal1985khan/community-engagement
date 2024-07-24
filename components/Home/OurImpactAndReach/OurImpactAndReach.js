import Image from 'next/image'

const OurImpactAndReach = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-16">
      <h2 className="text-ce-brown text-3xl">Our Impact and Reach</h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <Image
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/home/ourImpactAndReach/image01.png"
        width={700}
        height={420}
        alt=""
        className="mt-5 hidden md:block"
      />
      <Image
        src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/home/ourImpactAndReach/image02.png"
        width={276}
        height={714}
        alt=""
        className="mt-5 block md:hidden"
      />
    </div>
  )
}

export default OurImpactAndReach
