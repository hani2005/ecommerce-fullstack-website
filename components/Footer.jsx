import Image from "next/image"
import React from "react"
import logo from "../public/nostra.png"

function Footer() {
  return (
    <footer className="bg-gray-200 rounded-lg p-10 items-center flex flex-col">
      <div className="flex gap-[6rem]">
        <div>
          <Image src={logo} alt="" className="w-24 mb-[-1.5rem] mt-[-2rem]"/>
          <span className="text-[0.9rem] text-gray-700">Specializes in providing high-quality watches</span>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-darkBlue">Shop</h3>
          <span className="text-[0.9rem] mb-1 text-gray-700">All Collections</span>
          <span className="text-[0.9rem] mb-1 text-gray-700">Winter Edition</span>
          <span className="text-[0.9rem] mb-1 text-gray-700">Discount</span>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-darkBlue">Company</h3>
          <span className="text-[0.9rem] mb-1 text-gray-700">About Us</span>
          <span className="text-[0.9rem] mb-1 text-gray-700">Contact</span>
          <span className="text-[0.9rem] mb-1 text-gray-700">Affiliates</span>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-darkBlue">Support</h3>
          <span className="text-[0.9rem] mb-1 text-gray-700">FAQs</span>
          <span className="text-[0.9rem] mb-1 text-gray-700">Cookie Policy</span>
          <span className="text-[0.9rem] mb-1 text-gray-700">Terms of Use</span>
        </div>
      </div>
      <div className="mt-[2rem] text-[0.9rem] text-gray-700 mb-[-1rem]">Copyright &#169; Built & Designed by Hani Mohammed</div>
    </footer>
  )
}

export default Footer
