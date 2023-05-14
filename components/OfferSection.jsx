import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"

function OfferSection() {
  return (
    <div className="my-20">
      <div className="flex bg-darkBlue rounded-lg items-center">
        <div>
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Rolex-Sea-Dweller-126600-10-10-ROL-AHL2KQ-aaa68d85b881_2048x2048.jpg?v=1683639924&auto=format&ixlib=react-9.3.0&w=689"
            alt=""
            className="w-[35rem] rounded-lg mr-10"
          />
        </div>
        <div>
          <span className="text-gray-300 font-medium">LIMITED OFFER</span>
          <h1 className="text-white text-[2.9rem] my-5 font-semibold leading-[3.5rem]">
            35% off only this friday
            <br /> and get special gift
          </h1>
          <div className="flex items-center p-4 bg-white w-fit rounded-lg gap-2">
            <button className="text-gray-700 font-semibold">Grab it now</button>
            <BsArrowRight className="text-[1.1rem]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-14">
        <h2 className="text-center text-[1.9rem] tracking-[-0.5px] font-semibold text-darkBlue">
          Subscribe to our newsletter to get updates
          <br /> to our latest collections
        </h2>
        <span className="tracking-[-0.5px] text-[1.05rem] text-gray-500 font-semibold my-5">
          Get 20% off on your first order just by subscribing to our newsletter
        </span>
        <div className="flex items-center gap-1">
          <div className="border-gray-300 border flex items-center p-4 gap-3 rounded-lg bg-gray-100">
            <AiOutlineMail className="text-gray-400 text-[1.4rem]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none"
            />
          </div>
          <button className="p-4 text-[white] bg-darkBlue rounded-lg">
            Subscribe
          </button>
        </div>
        <span className="mt-8 tracking-[-0.5px] font-medium text-gray-500">You will be able to unsubscribe at any time.</span>
      </div>
    </div>
  )
}

export default OfferSection
