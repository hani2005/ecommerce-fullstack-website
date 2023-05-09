import React from "react"
import banner from "../public/banner-img.avif"
import Image from "next/image"

function Banner() {
  return (
    <div className="items-center justify-center flex flex-col relative">
      <Image
        src={banner}
        alt=""
        className="rounded-xl"
      />
      <div className="absolute bottom-0 flex flex-col items-center">
        <h1 className="text-[3.5rem] font-pacifico text-gray-100 tracking-[3px] leading-[5.5rem] text-center">
          Level up your style with our
          <br /> summer collections
        </h1>
        {/* <span className="text-black py-3  px-4 mt-2 cursor-pointer w-fit bg-white rounded-xl font-bold text-[1.2rem]">
          Shop Now
        </span> */}
      </div>
    </div>
  )
}

export default Banner
