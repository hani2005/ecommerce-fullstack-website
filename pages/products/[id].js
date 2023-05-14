import { connectMongoose } from "@/lib/mongoose"
import React, { useContext } from "react"
import Product from "@/models/Product"
import Layout from "@/components/Layout"
import { BiDollar } from "react-icons/bi"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { ProductsContext } from "@/components/ProductsContext"
import Link from "next/link"
import OfferSection from "@/components/OfferSection"
import { MdArrowForwardIos } from "react-icons/md"

const ProductDetails = ({ product }) => {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)

  function moreOfThisProduct(id) {
    setSelectedProducts((prev) => [...prev, id])
  }
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id)
    if (pos !== -1) {
      setSelectedProducts((prev) => {
        return prev.filter((value, index) => index !== pos)
      })
    }
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
          Product Page
        </span>
        <MdArrowForwardIos />
        <Link
          href={"/categories"}
          className="text-gray-400 text-[1.2rem] font-medium tracking-[-1px]"
        >
          Categories
        </Link>
        <MdArrowForwardIos className="text-gray-400" />
        <Link
          href={"/checkout"}
          className="text-gray-400 text-[1.2rem] font-medium tracking-[-1px]"
        >
          Cart
        </Link>
        <MdArrowForwardIos className="text-gray-400" />
      </div>
      <div className="flex gap-6 my-20">
        <div className="flex-[1.5]">
          <img src={product.picture} alt="" className="rounded-lg w-full" />
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img src={product.thumb1} alt="" className="w-full rounded-lg" />
            <img src={product.thumb2} alt="" className="w-full rounded-lg" />
            <img src={product.thumb3} alt="" className="w-full rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col flex-[2]">
          <h2 className="text-[1.8rem] font-semibold tracking-[-1px] mb-1">
            {product.name}
          </h2>
          <span className="capitalize text-[1.2rem] mb-5">
            {product.category}
          </span>
          <span className="text-darkBlue font-semibold text-[1.8rem]">
            ${product.price}
          </span>
          <h4 className="font-bold text-[1.2rem] mb-2 mt-5">Description:</h4>
          <p className="font-normal text-[1.2rem] tracking-[-0.5px] mb-8">
            {product.description}
          </p>
          <div className="flex mt-7 items-center">
            <div className="flex items-center border-gray-200 border-[1px] px-5 py-4 rounded-lg">
              <button
                onClick={() => lessOfThisProduct(product._id)}
                className=""
              >
                <AiOutlineMinus className="text-[1.3rem] text-black" />
              </button>
              <span className="px-5 text-[1.3rem] font-semibold">
                {selectedProducts.filter((id) => id === product._id).length}
              </span>
              <button
                onClick={() => moreOfThisProduct(product._id)}
                className=""
              >
                <AiOutlinePlus className="text-[1.3rem] text-black" />
              </button>
            </div>
            <Link
              href={"/checkout"}
              className="ml-6 px-6 py-[1.05rem] text-[1.15rem] bg-darkBlue rounded-lg font-normal text-gray-50"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
      <OfferSection />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  await connectMongoose()
  const { id } = context.query
  const product = await Product.findById(id)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

export default ProductDetails
