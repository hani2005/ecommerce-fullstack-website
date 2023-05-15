import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

function OfferSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="my-20">
      <div className="flex md:flex-col md:relative bg-darkBlue rounded-lg items-center screen2:hidden">
        <div className="flex flex-[2] mr-4">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Rolex-Sea-Dweller-126600-10-10-ROL-AHL2KQ-aaa68d85b881_2048x2048.jpg?v=1683639924&auto=format&ixlib=react-9.3.0&w=689"
            alt=""
            className="w-[35rem] lg:w-[25rem] md:w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-[2] md:absolute md:bottom-[4rem] md:items-center">
          <span data-aos="fade-up" data-aos-once="true" className="text-gray-300 lg:text-[0.8rem] font-medium">
            LIMITED OFFER
          </span>
          <h1 data-aos="fade-up" data-aos-once="true" className="text-white text-[2.9rem] screen1:text-[2.1rem] lg:text-[1.6rem] md:text-[2.1rem] md:leading-[2.7rem] md:text-center screen1:leading-[2.7rem] lg:leading-[2.3rem] my-5 screen1:my-8 lg:my-5 font-semibold leading-[3.5rem]">
            35% off only this friday
            <br /> and get special gift
          </h1>
          <div data-aos="fade-up" data-aos-once="true" className="flex items-center p-4 lg:p-3 bg-white w-fit rounded-lg gap-2">
            <button className="text-gray-700 lg:text-[0.85rem] font-semibold">
              Grab it now
            </button>
            <BsArrowRight className="text-[1.1rem] lg:text-[0.85rem]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-14 p-4">
        <h2 data-aos="fade-up" data-aos-once="true" className="text-center text-[1.9rem] lg:text-[1.6rem] sm:text-[1.3rem] tracking-[-0.5px] font-semibold screen2:font-bold text-darkBlue">
          Subscribe to our newsletter to get updates
          <br /> to our latest collections
        </h2>
        <span data-aos="fade-up" data-aos-once="true" className="tracking-[-0.5px] text-[1.05rem] lg:text-[1rem] sm:text-[0.95rem] sm:text-center text-gray-500 font-semibold screen2:font-bold my-5 screen2:my-9">
          Get 20% off on your first order just by subscribing to our newsletter
        </span>
        <div className="flex sm:flex-col items-center gap-1 sm:gap-3">
          <div data-aos="fade-up" data-aos-once="true" className="border-gray-300 border flex items-center p-4 lg:p-3 gap-3 rounded-lg bg-gray-100">
            <AiOutlineMail className="text-gray-400 text-[1.4rem]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none"
            />
          </div>
          <button data-aos="fade-up" data-aos-once="true" className="p-4 lg:p-3 text-[white] bg-darkBlue rounded-lg">
            Subscribe
          </button>
        </div>
        <span data-aos="fade-up" data-aos-once="true" className="mt-8 screen2:mt-12 tracking-[-0.5px] lg:text-[0.9rem] font-medium screen2:font-semibold text-gray-500">
          You will be able to unsubscribe at any time.
        </span>
      </div>
    </div>
  )
}

export default OfferSection
