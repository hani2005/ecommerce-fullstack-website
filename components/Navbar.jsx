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
      <div className="flex items-center fixed justify-between w-full bg-white z-10 py-6 px-10">
        <Link href={"/"}>
          <h1 className="text-[1.7rem] font-semibold">VALOR</h1>
        </Link>
        <ul className="navbar flex justify-between text-[0.8rem] sm:hidden">
          <li>
            <Link href="/" className="text-[1rem] font-semibold">
              Shop
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
        <div className="flex items-center gap-5">
          <Link href={"/checkout"} className="flex items-center gap-2">
            <AiOutlineShoppingCart className="text-[1.5rem]" />
            <span className="text-[0.95rem] mt-1 font-semibold">
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
        <Link href={"/"}>Shop</Link>
        <Link href={"/"}>Brands</Link>
        <Link href={"/"}>Why Us</Link>
        <Link href={"/"}>Contact</Link>
      </aside>
    </>
  )
}

export default Navbar
