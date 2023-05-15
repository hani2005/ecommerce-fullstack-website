import React, { useContext, useEffect, useState } from "react"
import logo from "../public/nostra.png"
import Image from "next/image"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Link from "next/link"
import { ProductsContext } from "./ProductsContext"
import { BiMenu } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import Aos from "aos"
import "aos/dist/aos.css"

function Navbar() {
  const { selectedProducts } = useContext(ProductsContext)
  const [backDrop, setBackDrop] = useState("backdrop")
  const [aside, setAside] = useState("aside")

  const openMenu = () => {
    setBackDrop("backdrop active")
    setAside("aside active")
  }

  const closeMenu = () => {
    setBackDrop("backdrop")
    setAside("aside")
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <div className="flex msm:flex-col msm:gap-4 mt-[-0.1rem] items-center fixed justify-between w-full shadow-lg bg-white z-10 py-6 px-10">
        <Link href={"/"}>
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            className="text-[1.7rem] font-semibold"
          >
            VALOR
          </h1>
        </Link>
        <ul
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="2000"
          className="navbar flex justify-between items-center text-[0.8rem] md:hidden"
        >
          <li>
            <Link
              href="/categories"
              className="text-[1rem] flex items-center gap-3 font-semibold"
            >
              Shop
              <IoIosArrowDown className="text-[1.2rem]" />
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[1rem] font-semibold">
              Brands
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[1rem] font-semibold">
              Why Us
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[1rem] font-semibold">
              Contact
            </Link>
          </li>
        </ul>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="3000"
          className="flex items-center gap-5 msm:gap-10"
        >
          <Link href={"/checkout"} className="flex items-center gap-2">
            <AiOutlineShoppingCart className="text-[1.5rem]" />
            <span className="text-[0.95rem] mt-1 font-semibold">
              Cart {selectedProducts.length}
            </span>
          </Link>
          <div
            className="menu hidden md:text-[1.8rem] md:block"
            onClick={openMenu}
          >
            <BiMenu />
          </div>
        </div>
      </div>
      <div className={backDrop}></div>
      <aside className={aside}>
        <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
        <Link href={"/"}>Shop</Link>
        <Link href={"/"}>Brands</Link>
        <Link href={"/"}>Why Us</Link>
        <Link href={"/"}>Contact</Link>
      </aside>
    </>
  )
}

export default Navbar
