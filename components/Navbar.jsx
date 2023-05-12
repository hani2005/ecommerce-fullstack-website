import React, { useContext, useState } from "react"
import logo from "../public/nostra.png"
import Image from "next/image"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Link from "next/link"
import { ProductsContext } from "./ProductsContext"
import { BiMenu } from "react-icons/bi"

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

  return (
    <>
      <div className="text-black font-medium text-[1.7rem] px-[1.2rem] flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} alt="" className="w-24" />
        </Link>
        <ul className="flex justify-between text-[0.8rem] gap-5 sm:hidden">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Brands</Link>
          </li>
          <li>
            <Link href="/">Why Us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <Link href={"/checkout"} className="flex items-center gap-2">
            <AiOutlineShoppingCart className="w-5" />
            <span className="text-[0.8rem] mt-1">
              Cart {selectedProducts.length}
            </span>
          </Link>
          <div className="menu hidden sm:block" onClick={openMenu}>
            <BiMenu />
          </div>
        </div>
      </div>
      <div className={backDrop}></div>
      <aside className={aside}>
        <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
        <Link href={"/"}>Model S</Link>
        <Link href={"/"}>Model 3</Link>
        <Link href={"/"}>Model X</Link>
        <Link href={"/"}>Model Y</Link>
      </aside>
    </>
  )
}

export default Navbar
