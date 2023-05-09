import React, { useContext } from "react"
import { ProductsContext } from "./ProductsContext"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiDollar } from "react-icons/bi"
import Link from "next/link"

function Product({ _id, name, price, description, picture }) {
  const { setSelectedProducts } = useContext(ProductsContext)

  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id])
  }

  return (
    <div className="w-56">
      <Link href={`/products/${_id}`}>
        <img src={picture} alt="" className="rounded-xl object-cover" />
      </Link>
      <div className="mt-4 mb-[-0.5rem]">
        <h3 className="font-medium text-[0.9rem] text-gray-600">{name}</h3>
      </div>
      <div className="flex items-center mt-4">
        <div className="text-[1.1rem] font-bold grow text-gray-600 flex items-center ml-[-0.2rem]">
          <div>
            <BiDollar className="text-[1.3rem] text-gray-700 mr-[-0.2rem] mb-[0.2rem]" />
          </div>
          <div>
            <span>{price}</span>
          </div>
        </div>
        <button
          onClick={addProduct}
          className="bg-darkBlue text-white py-3 px-3 rounded-xl"
        >
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  )
}

export default Product
