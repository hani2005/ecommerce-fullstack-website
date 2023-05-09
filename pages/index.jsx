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
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-bold text-[1.5rem] mb-5">Featured Products</h2>
          <div className="gap-10 rounded-[10px]">
            <div className="flex justify-between items-center rounded-lg gap-[10px] py-[25px] px-[10px] shadow-lg">
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
          <div key={categoryName} className="flex flex-col items-center">
            {products.find((p) => p.category === categoryName) && (
              <div className="flex items-center flex-col mb-14">
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
