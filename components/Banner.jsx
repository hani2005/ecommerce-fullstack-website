import Link from "next/link"
import React, { useEffect } from "react"
import { BsArrowRight } from "react-icons/bs"
import Aos from "aos"
import "aos/dist/aos.css"

function Banner() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="items-center justify-center flex flex-col relative mt-5 msm:mt-20">
      <img
        src="https://hodinkee.imgix.net/uploads/images/b0ff71bf-9f87-4780-9638-584683a54685/HowToWearIt_Patrimony_HERO.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=1200"
        alt=""
        className="rounded-xl"
      />
      <div className="absolute flex flex-col items-center">
        <h1 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" className="text-[4rem] mmd:text-[3rem] text-gray-100 font-semibold text-center">
          VALOR
        </h1>
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" className="flex items-center bg-gray-100 p-3 rounded-lg gap-3 cursor-pointer">
          <Link href={"/categories"} className="text-[0.9rem] mmd:text-[0.75rem] outline-none font-semibold text-gray-700">Shop Now</Link>
          <BsArrowRight className="text-[1.1rem] mmd:text-[0.9rem] mt-[0.1rem] text-gray-700" />
        </div>
      </div>
    </div>
  )
}

export default Banner
