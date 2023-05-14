import Layout from "@/components/Layout"
import Product from "@/components/Product"
import { connectMongoose } from "@/lib/mongoose"
import { useState } from "react"
import { findAllProducts } from "./api/products"
import { AiOutlineSearch } from "react-icons/ai"
import Banner from "@/components/Banner"
import Brands from "@/components/Brands"
import Value from "@/components/Value"
import Category from "@/components/Category"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import OfferSection from "@/components/OfferSection"
import Footer from "@/components/Footer"

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
      <div className="max-w-[77.6rem]">
        <Brands />
        <Value />
        <Category />
        {/* <div className="mt-20">
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
      </div> */}
        <div className="p-5">
          <h2 className="font-semibold text-[1.6rem] md:text-[2rem] sm:text-[1.5rem]">
            Featured Products
          </h2>
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={30}
            breakpoints={{
              500: {
                width: 500,
                slidesPerView: 1.5
              }
            }}
            scrollbar={{ draggable: true }}
          >
            {products.map((productInfo) => (
              <SwiperSlide key={productInfo._id} className="mb-8 mt-5">
                <Product {...productInfo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <OfferSection />
        <Footer />
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

{
  /* <div className="gap-10 rounded-[10px]">
            <div className="flex justify-between items-center rounded-[20px] gap-[10px] py-[25px] px-[10px] sm:py-[15px] sm:px-[5px] shadow-lg">
              <div className="flex gap-2 items-center px-[20px]" >
                <AiOutlineSearch className="text-[25px] icon" />
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent focus:outline-none"
                  placeholder="Search for products..."
                />
              </div>
            </div>
          </div> */
}
