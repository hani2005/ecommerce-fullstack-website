import Image from "next/image"
import React from "react"
import logo from "../public/nostra.png"

function Footer() {
  return (
    <footer className="bg-gray-200 rounded-lg p-10">
      <div className="flex justify-between gap-[2rem] mmd:grid grid-cols-2">
        <div>
          <h1 className="text-[1.7rem] text-gray-700 font-semibold">VALOR</h1>
          <span className="text-[0.9rem] text-gray-500">
            Specializes in providing high-quality watches.
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-gray-700">Shop</h3>
          <span className="text-[0.9rem] mb-1 text-gray-500">
            All Collections
          </span>
          <span className="text-[0.9rem] mb-1 text-gray-500">
            Winter Edition
          </span>
          <span className="text-[0.9rem] mb-1 text-gray-500">Discount</span>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-gray-700">Company</h3>
          <span className="text-[0.9rem] mb-1 text-gray-500">About Us</span>
          <span className="text-[0.9rem] mb-1 text-gray-500">Contact</span>
          <span className="text-[0.9rem] mb-1 text-gray-500">Affiliates</span>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-gray-700">Support</h3>
          <span className="text-[0.9rem] mb-1 text-gray-500">FAQs</span>
          <span className="text-[0.9rem] mb-1 text-gray-500">
            Cookie Policy
          </span>
          <span className="text-[0.9rem] mb-1 text-gray-500">Terms of Use</span>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-gray-700">Payment Methods</h3>
          <div className="flex gap-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/196/196566.png"
              alt=""
              className="w-12"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/196/196578.png"
              alt=""
              className="w-12"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/5977/5977576.png"
              alt=""
              className="w-12"
            />
          </div>
        </div>
      </div>
      <div className="mt-[3rem] text-[0.9rem] text-gray-500 flex justify-center mb-[-1rem]">
        Copyright &#169; Built & Designed by Hani Mohammed
      </div>
    </footer>
  )
}

export default Footer
