import Layout from "@/components/Layout"
import { connectMongoose } from "@/lib/mongoose"
import React, { useState } from "react"
import { findAllProducts } from "./api/products"
import Product from "@/components/Product"
import OfferSection from "@/components/OfferSection"
import { IoIosArrowDown } from "react-icons/io"
import Link from "next/link"
import { MdArrowForwardIos } from "react-icons/md"

function Categories({ products }) {
  const [data, setData] = useState(products)

  const setCategory = (catItem) => {
    const result = products.filter((categoryData) => {
      return categoryData.category === catItem
    })
    setData(result)
  }

  return (
    <Layout>
      <div className="flex items-center mt-10 gap-5">
        <Link
          href={"/"}
          className="text-gray-400 text-[1.2rem] font-medium tracking-[-1px]"
        >
          Home
        </Link>
        <MdArrowForwardIos className="text-gray-400" />
        <span className="font-semibold tracking-[-1px] text-[1.2rem]">
          Browse Categories
        </span>
        <MdArrowForwardIos />
        <Link
          href={"/checkout"}
          className="text-gray-400 text-[1.2rem] font-medium tracking-[-1px]"
        >
          Cart
        </Link>
        <MdArrowForwardIos className="text-gray-400" />
      </div>
      <div className="flex items-center justify-center gap-10 my-10">
        <div
          className="flex items-center cursor-pointer gap-2  px-4 py-2 rounded-lg"
          onClick={() => setData(products)}
        >
          <span className="font-semibold text-gray-500">All</span>
          <IoIosArrowDown />
        </div>
        <div
          className="flex items-center cursor-pointer gap-2 bg-gray-100 px-4 py-2 rounded-lg"
          onClick={() => setCategory("rolex")}
        >
          <span className="font-semibold text-gray-500">Rolex</span>
          <IoIosArrowDown />
        </div>
        <div
          className="flex items-center cursor-pointer gap-2 bg-gray-100 px-4 py-2 rounded-lg"
          onClick={() => setCategory("seiko")}
        >
          <span className="font-semibold text-gray-500">Seiko</span>
          <IoIosArrowDown />
        </div>
        <div
          className="flex items-center cursor-pointer gap-2 bg-gray-100 px-4 py-2 rounded-lg"
          onClick={() => setCategory("longines")}
        >
          <span className="font-semibold text-gray-500">Longines</span>
          <IoIosArrowDown />
        </div>
        <div
          className="flex items-center cursor-pointer gap-2 bg-gray-100 px-4 py-2 rounded-lg"
          onClick={() => setCategory("omega")}
        >
          <span className="font-semibold text-gray-500">Omega</span>
          <IoIosArrowDown />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-10 mb-5 screen2:grid grid-cols-grid1 p-2 screen2:gap-5">
          {data.map((item) => (
            <div key={item._id} className="w-64 screen2:w-full">
              <Product {...item} />
            </div>
          ))}
        </div>
      </div>
      <OfferSection />
    </Layout>
  )
}

export async function getServerSideProps() {
  await connectMongoose()
  const products = await findAllProducts()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default Categories
