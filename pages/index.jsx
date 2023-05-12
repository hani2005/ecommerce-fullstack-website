import Layout from "@/components/Layout"
import Product from "@/components/Product"
import { connectMongoose } from "@/lib/mongoose"
import { useState } from "react"
import { findAllProducts } from "./api/products"
import { AiOutlineSearch } from "react-icons/ai"
import Banner from "@/components/Banner"
import Brands from "@/components/Brands"
import Value from "@/components/Value"

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
      <Banner />
      <Brands />
      <Value />
      <div className="mt-20">
        <div className="flex items-center justify-between mb-10 md:flex-col">
          <h2 className="font-bold text-[1.5rem] mb-5 md:text-[2rem] md:mb-8 sm:text-[1.5rem]">Featured Products</h2>
          <div className="gap-10 rounded-[10px]">
            <div className="flex justify-between items-center rounded-[20px] gap-[10px] py-[25px] px-[10px] sm:py-[15px] sm:px-[5px] shadow-lg">
              <div className="flex gap-2 items-center px-[20px] ">
                <AiOutlineSearch className="text-[25px] icon" />
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent focus:outline-none"
                  placeholder="Search for products..."
                />
              </div>
            </div>
          </div>
        </div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName} className="">
            {products.find((p) => p.category === categoryName) && (
              <>
                <h2 className="text-[2rem] py-5 font-pacifico font-bold capitalize">
                  {categoryName}
                </h2>
                <div className="grid grid-cols-grid1 gap-4 mb-10 mmd:gap-6">
                  {products
                    .filter((p) => p.category === categoryName)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="">
                        <Product {...productInfo} />
                      </div>
                    ))}
                </div>
              </>
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
