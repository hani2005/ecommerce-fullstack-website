import Layout from "../components/Layout"
import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../components/ProductsContext"
import Link from "next/link"
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai"
import { MdArrowForwardIos } from "react-icons/md"
import Aos from "aos"
import "aos/dist/aos.css"

export default function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const [productsInfos, setProductsInfos] = useState([])
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)]
    fetch("/api/products?ids=" + uniqIds.join(","))
      .then((response) => response.json())
      .then((json) => setProductsInfos(json))
  }, [selectedProducts])

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

  const deliveryPrice = 5
  let subtotal = 0
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find((p) => p._id === id)?.price || 0
      subtotal += price
    }
  }
  const total = subtotal + deliveryPrice

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Layout>
      <div className="flex items-center mt-10 msm:mt-20 gap-5 p-3">
        <Link
          href={"/"}
          className="text-gray-400 text-[1.2rem] font-medium tracking-[-1px]"
        >
          Home
        </Link>
        <MdArrowForwardIos className="text-gray-400" />
        <span className="font-semibold tracking-[-1px] text-[1.2rem]">
          Cart
        </span>
      </div>
      <div className="flex lg:flex-col my-16 justify-between p-3">
        <div className="flex-[3]">
          {!productsInfos.length && (
            <h1>No products in your shopping cart</h1>
          )}
          {productsInfos.length &&
            productsInfos.map((productInfo) => {
              const amount = selectedProducts.filter(
                (id) => id === productInfo._id
              ).length
              if (amount === 0) return
              return (
                <div className="flex sm:flex-col mb-10 pb-10 border-b border-gray-300" key={productInfo._id}>
                  <div className="shrink-0">
                    <img
                      className="w-40 rounded-lg sm:mb-6"
                      src={productInfo.picture}
                      alt=""
                    />
                  </div>
                  <div className="pl-4 sm:pl-0">
                    <h3 className="font-semibold text-gray-700 text-[1.5rem] sm:text-[1.2rem] mb-1">
                      {productInfo.name}
                    </h3>
                    <p className="capitalize text-[1.2rem] text-gray-500">
                      {productInfo.category}
                    </p>
                    <div className="flex mt-8 sm:mt-4 gap-10 items-center">
                      <div className="flex items-center rounded-lg border border-gray-200 px-4 py-3">
                        <button
                          onClick={() => lessOfThisProduct(productInfo._id)}
                          className=""
                        >
                          <AiOutlineMinus className="text-gray-900 text-[1.3rem] sm:text-[1rem]" />
                        </button>
                        <span className="px-6 sm:px-5 font-semibold text-[1.2rem]">
                          {
                            selectedProducts.filter(
                              (id) => id === productInfo._id
                            ).length
                          }
                        </span>
                        <button
                          onClick={() => moreOfThisProduct(productInfo._id)}
                          className=""
                        >
                          <AiOutlinePlus className="text-gray-900 text-[1.3rem] sm:text-[1rem]" />
                        </button>
                      </div>
                      <div className="text-[1.4rem] text-gray-700 font-semibold">
                        ${productInfo.price}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="flex-[2] pl-4">
          <form action="/api/checkout" method="POST" className="flex flex-col">
            <div className="">
              <input
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-gray-100 w-full rounded-lg px-4 py-4 mb-2"
                type="text"
                placeholder="Street address, number"
              />
              <input
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-gray-100 w-full rounded-lg px-4 py-4 mb-2"
                type="text"
                placeholder="City and postal code"
              />
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-100 w-full rounded-lg px-4 py-4 mb-2"
                type="text"
                placeholder="Your name"
              />
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 w-full rounded-lg px-4 py-4 mb-2"
                type="email"
                placeholder="Email address"
              />
            </div>
            <div className="mt-8">
              <div className="flex my-3">
                <h3 className="grow font-semibold text-gray-500">Subtotal</h3>
                <h3 className="font-bold text-gray-700">${subtotal}</h3>
              </div>
              <div className="flex my-3">
                <h3 className="grow font-semibold text-gray-500">Delivery</h3>
                <h3 className="font-bold text-gray-700">${deliveryPrice}</h3>
              </div>
              <div className="flex my-3 border-t pt-3 border-gray-500">
                <h3 className="grow text-[1.2rem] font-semibold text-gray-700">
                  Grand Total
                </h3>
                <h3 className="font-bold text-[1.2rem] text-gray-700">
                  ${total}
                </h3>
              </div>
            </div>
            <input
              type="hidden"
              name="products"
              value={selectedProducts.join(",")}
            />
            <button
              type="submit"
              className="bg-darkBlue w-full px-5 py-4 text-[1.2rem] rounded-xl font-normal text-gray-50 my-4"
            >
              Checkout Now
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
