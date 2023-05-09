import React, { useContext } from "react"
import logo from "../public/nostra.png"
import Image from "next/image"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Link from "next/link"
import { ProductsContext } from "./ProductsContext"

function Navbar() {
  const { selectedProducts } = useContext(ProductsContext)
  return (
    <div className="text-black font-medium text-[1.7rem] flex items-center justify-between">
      <Link href={"/"}>
        <Image src={logo} alt="" className="w-24" />
      </Link>
      <ul className="flex justify-between text-[0.8rem] gap-5">
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Most wanted</a>
        </li>
        <li>
          <a href="/">New arrival</a>
        </li>
        <li>
          <a href="/">Brands</a>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Link href={"/checkout"} className="flex items-center gap-2">
          <AiOutlineShoppingCart className="w-5" />
          <span className="text-[0.8rem] mt-1">
            Cart {selectedProducts.length}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
