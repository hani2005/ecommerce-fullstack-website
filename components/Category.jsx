import Link from "next/link"
import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Category() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="mt-[6rem] mb-[4rem] p-5">
      <h2 data-aos="fade-up" data-aos-once="true" className="font-semibold  text-[1.6rem] tracking-[-0.5px] mb-5 md:text-[2rem] md:mb-8 sm:text-[1.5rem]">
        Curated Picks
      </h2>
      <div className="grid grid-cols-grid1 gap-4 mb-10 mmd:gap-6">
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Rolex-GMT-Master-II-126710-10-10-ROL-A6CBDZ-45dbc428984d_2048x2048.jpg?v=1682429483&auto=format&ixlib=react-9.3.0&w=1446"
            alt=""
            className="rounded-xl object-cover w-full h-[18rem]"
          />
          <Link href={"/categories"} data-aos="fade-up" data-aos-once="true" className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-800 text-[0.9rem] font-semibold">Shop Rolex</Link>
        </div>
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Omega30-Wrist_2048x2048.jpg?auto=format&dpr=1&fit=max&fm=jpg&ixjsv=2.2.4&usm=12&v=1573673543&ixlib=react-9.3.0&q=88&w=530"
            alt=""
            className="rounded-xl object-cover w-full h-[18rem]"
          />
          <Link href={"/categories"} data-aos="fade-up" data-aos-once="true" className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-800 text-[0.9rem] font-semibold">Shop Omega</Link>
        </div>
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/L3.812.4.53.6_WS_A3_SQ_ISA_2048x2048.jpg?auto=format&dpr=1&fit=max&fm=jpg&ixjsv=2.2.4&usm=12&v=1678295912&ixlib=react-9.3.0&q=88&w=530"
            alt=""
            className="rounded-xl object-cover w-full h-[18rem]"
          />
          <Link href={"/categories"} data-aos="fade-up" data-aos-once="true" className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-800 text-[0.9rem] font-semibold">Shop Longines</Link>
        </div>
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/TimexLE-08_2048x2048.png?auto=format&dpr=1&fit=max&fm=jpg&ixjsv=2.2.4&usm=12&v=1637250735&ixlib=react-9.3.0&q=88&w=530"
            alt=""
            className="rounded-xl object-cover w-full h-[18rem]"
          />
          <Link href={"/categories"} data-aos="fade-up" data-aos-once="true" className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-800 text-[0.9rem] font-semibold">Shop Timex</Link>
        </div>
      </div>
    </div>
  )
}

export default Category
