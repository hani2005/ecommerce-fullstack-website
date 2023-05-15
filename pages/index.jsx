import Layout from "@/components/Layout"
import Product from "@/components/Product"
import { connectMongoose } from "@/lib/mongoose"
import { findAllProducts } from "./api/products"
import Banner from "@/components/Banner"
import Brands from "@/components/Brands"
import Value from "@/components/Value"
import Category from "@/components/Category"
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import OfferSection from "@/components/OfferSection"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home({ products }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Layout>
      <Banner />
      <Brands />
      <Value />
      <Category />
      <div className="p-5">
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          className="font-semibold text-[1.6rem] md:text-[2rem] sm:text-[1.5rem]"
        >
          Featured Products
        </h2>
        <Swiper
          // data-aos="fade-left"
          // data-aos-once="true"
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
