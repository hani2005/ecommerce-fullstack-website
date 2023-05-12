import React from "react"
import banner from "../public/banner-img.avif"
import Image from "next/image"

function Banner() {
  return (
    <div className="items-center justify-center flex flex-col relative">
      <Image src={banner} alt="" className="rounded-xl" />
      <div className="absolute bottom-0 lg:bottom-2 flex flex-col items-center">
        <h1 className="text-[3.5rem] lg:text-[2.5rem] lg:leading-[3.8rem] md:text-[1.95rem] md:leading-[3rem] sm:hidden font-pacifico text-gray-100 tracking-[3px] leading-[5.5rem] text-center">
          Level up your style with our
          <br /> summer collections
        </h1>
      </div>
    </div>
  )
}

export default Banner
