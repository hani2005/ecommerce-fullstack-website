import { connectMongoose } from "@/lib/mongoose"
import React, { useContext } from "react"
import Product from "@/models/Product"
import Layout from "@/components/Layout"
import { BiDollar } from "react-icons/bi"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { ProductsContext } from "@/components/ProductsContext"
import Link from "next/link"

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
      <div className="flex gap-6">
        <div className="">
          <div className="w-[20.5rem]">
            <img src={product.picture} alt="" className="rounded-lg" />
          </div>
          <div className="flex gap-2 mt-2">
            <img
              src={product.thumb1}
              alt=""
              className="w-[6.5rem] rounded-lg"
            />
            <img
              src={product.thumb2}
              alt=""
              className="w-[6.5rem] rounded-lg"
            />
            <img
              src={product.thumb3}
              alt=""
              className="w-[6.5rem] rounded-lg"
            />
          </div>
        </div>
        <div className="mt-5">
          <span className="capitalize text-[1.1rem]">{product.category}</span>
          <h2 className="text-[1.5rem] font-medium tracking-[-0.5px] mb-5">
            {product.name}
          </h2>
          <h4 className="font-bold mb-2">Description:</h4>
          <p className="font-normal tracking-[-0.5px]">{product.description}</p>
          <span className="text-darkBlue font-bold text-[1.4rem] flex items-center mt-2">
            <BiDollar className="mr-[-0.3rem] ml-[-0.2rem]" />
            {product.price}
          </span>
          <div className="flex mt-7 items-center">
            <div className="flex items-center border-gray-200 border-[1px] p-[0.7rem] rounded-lg">
              <button
                onClick={() => lessOfThisProduct(product._id)}
                className=""
              >
                <AiOutlineMinus className="text-[1.2rem]" />
              </button>
              <span className="px-5 text-[1.1rem]">
                {selectedProducts.filter((id) => id === product._id).length}
              </span>
              <button
                onClick={() => moreOfThisProduct(product._id)}
                className=""
              >
                <AiOutlinePlus className="text-[1.2rem]" />
              </button>
            </div>
            <Link href={"/checkout"} className="ml-6 px-8 bg-darkBlue p-[0.7rem] rounded-lg">
              <button className="text-white text-[0.9rem]">Go to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  await connectMongoose()
  const { id } = context.query
  console.log(context.query)
  const product = await Product.findById(id)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

export default ProductDetails
