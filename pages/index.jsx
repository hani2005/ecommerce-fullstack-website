import Image from "next/image"
import Layout from "@/components/Layout"
import Product from "@/components/Product"
import { connectMongoose } from "@/lib/mongoose"
import { useState } from "react"
import { findAllProducts } from "./api/products"
import { AiOutlineSearch } from "react-icons/ai"
import logo from "../public/ecom-logo.png"
import banner from "../public/hero-banner.webp"

export default function Home({ products }) {
  const [search, setSearch] = useState("")

  const categoriesNames = [...new Set(products.map((p) => p.category))]

  if (search) {
    products = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  return (
    <Layout>
      <div className="text-black font-medium text-[1.7rem] pb-10 flex justify-between">
        <h1>
          <strong className="text-[2rem] text-blueColor">Ecom</strong> Project
        </h1>
        <Image src={logo} alt="" className="w-11" />
      </div>
      <div className="bg-blueColor rounded-xl h-[13rem] mb-[6rem] flex">
        <div className="pl-[1.5rem] pt-[1rem]">
          <span className="text-black font-bold text-[0.85rem]">Shop The</span>
          <h1 className="text-[4.5rem] font-bold font-oswald text-white md:text-[3.5rem] md:py-4 sm:text-[1.8rem]">
            LATEST ARRIVALS
          </h1>
          <span className="text-black font-bold text-[1.2rem] sm:text-[0.95rem]">Best Tech Products</span>
        </div>
        <Image src={banner} alt="" className="w-[19rem] h-[19rem] sm:w-[13rem] sm:h-[13rem]" />
      </div>
      <div className="gap-10 bg-greyIsh-500 rounded-[10px]">
        <div className="flex justify-between items-center rounded-[100px] gap-[10px] bg-white py-[40px] px-[10px] shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center px-[20px] ">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-blue-500 focus:outline-none w-[500px] "
              placeholder="Search for products..."
            />
          </div>
        </div>
      </div>
      <div className="pb-5">
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {products.find((p) => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 pt-12 font-bold capitalize">
                  {categoryName}
                </h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products
                    .filter((p) => p.category === categoryName)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product {...productInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
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
