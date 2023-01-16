import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Bathing and swimming clothes
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Shop bathing clothes and swimming suites and others secure and easy
        </p>
        <UnderlineLink href="/store">Discover Products</UnderlineLink>
      </div>
      <div className="bg-black w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1498747946579-bde604cb8f44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
          layout="fill"
          loading="eager"
          priority={true}
          quality={90}
          objectFit="cover"
          alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
          className="inset-0 absolute inset-0 opacity-30"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default Hero
