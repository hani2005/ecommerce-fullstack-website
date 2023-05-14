import React from "react"
import { BsArrowRight } from "react-icons/bs"

function Banner() {
  return (
    <div className="items-center justify-center flex flex-col relative p-5">
      <img
        src="https://hodinkee.imgix.net/uploads/images/b0ff71bf-9f87-4780-9638-584683a54685/HowToWearIt_Patrimony_HERO.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=1200"
        alt=""
        className="rounded-xl"
      />
      <div className="absolute bottom-50 lg:bottom-2 flex flex-col items-center">
        <h1 className="text-[4rem] lg:text-[2.5rem] lg:leading-[3.8rem] md:text-[1.95rem] md:leading-[3rem] sm:hidden text-gray-100 font-semibold text-center">
          VALOR
        </h1>
        <div className="flex items-center bg-gray-100 p-3 rounded-lg gap-3 cursor-pointer">
          <button className="text-[0.9rem] font-semibold text-gray-700">Shop Now</button>
          <BsArrowRight className="text-[1.1rem] mt-[0.1rem] text-gray-700" />
        </div>
      </div>
    </div>
  )
}

export default Banner
