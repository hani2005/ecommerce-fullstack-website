import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Brands() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="mt-[6rem] p-5">
      <h2 data-aos="fade-up" data-aos-once="true" className="mb-8 mt-[-2rem] font-semibold text-[1.5rem]">Brands</h2>
      <div data-aos="fade-up" data-aos-once="true" className="flex items-center justify-between px-5 md:grid grid-cols-4 md:pl-[15%] msm:pl-[1rem] sm:gap-3 sm:pl-[10%]">
        <img
          src="https://static.cdnlogo.com/logos/t/86/timex.svg"
          alt=""
          className="w-14"
        />
        <img
          src="https://static.cdnlogo.com/logos/h/96/hublot.svg"
          alt=""
          className="w-14"
        />
        <img
          src="https://static.cdnlogo.com/logos/b/96/blancpain.svg"
          alt=""
          className="w-14"
        />
        <img
          src="https://static.cdnlogo.com/logos/i/2/iwc-schaffhausen.svg"
          alt=""
          className="w-14"
        />
        <img
          src="https://static.cdnlogo.com/logos/s/25/seiko.svg"
          alt=""
          className="w-14"
        />
        <img
          src="https://static.cdnlogo.com/logos/c/63/cartier.svg"
          alt=""
          className="w-14"
        />
        <img
          src="https://static.cdnlogo.com/logos/c/1/chopard.svg"
          alt=""
          className="w-14"
        />
        <img
          src="https://static.cdnlogo.com/logos/l/69/longines.svg"
          alt=""
          className="w-14"
        />
      </div>
    </div>
  )
}

export default Brands
