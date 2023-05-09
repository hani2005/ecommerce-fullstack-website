import React from "react"
import { TbReportMoney } from "react-icons/tb"
import {
  MdOutlineShoppingCartCheckout,
  MdSentimentVerySatisfied
} from "react-icons/md"
import { FaShippingFast } from "react-icons/fa"

function Value() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="mb-8 mt-[4rem] font-bold leading-7 text-[1.5rem] border-r-4 border-black pr-[25rem]">
          We provide best
          <br /> customer experiences
        </h2>
        <span className="text-[0.8rem] text-gray-400 mt-8 ml-2">
          We ensure our customers have the best customer experience
        </span>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col">
          <div className="bg-gray-200 w-fit p-3 rounded-lg mb-4">
            <TbReportMoney className="text-[1rem]" />
          </div>
          <h4 className="text-black text-[0.9rem] font-bold">
            Original Products
          </h4>
          <span className="text-[0.75rem] text-gray-500 mt-1">
            We provide money back gurante if the product is not original.
          </span>
        </div>
        <div className="flex flex-col">
          <div className="bg-gray-200 w-fit p-3 rounded-lg mb-4">
            <MdSentimentVerySatisfied className="text-[1rem]" />
          </div>
          <h4 className="text-black text-[0.9rem] font-bold">
            Satisfaction Guarantee
          </h4>
          <span className="text-[0.75rem] text-gray-500 mt-1">
            Exchange the product you've purchased if it doesn't fit you.
          </span>
        </div>
        <div className="flex flex-col">
          <div className="bg-gray-200 w-fit p-3 rounded-lg mb-4">
            <MdOutlineShoppingCartCheckout className="text-[1rem]" />
          </div>
          <h4 className="text-black text-[0.9rem] font-bold">
            New Arrival Everyday
          </h4>
          <span className="text-[0.75rem] text-gray-500 mt-1">
            We update our collections almost everyday.
          </span>
        </div>
        <div className="flex flex-col">
          <div className="bg-gray-200 w-fit p-3 rounded-lg mb-4">
            <FaShippingFast className="text-[1rem]" />
          </div>
          <h4 className="text-black text-[0.9rem] font-bold">
            Fast & Free Shipping
          </h4>
          <span className="text-[0.75rem] text-gray-500 mt-1">
            We offer fast and free shipping to our loyal customers.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Value