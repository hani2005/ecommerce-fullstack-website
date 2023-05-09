import Layout from "../components/Layout"
import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../components/ProductsContext"
import { HiArrowNarrowLeft } from "react-icons/hi"
import Link from "next/link"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"

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

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Link href={"/"} className="flex items-center mb-5 gap-2">
          <HiArrowNarrowLeft className="text-[1.5rem]" />
          <span className="text-[1.2rem] font-semibold">Home</span>
        </Link>
        {!productsInfos.length && <div>no products in your shopping cart</div>}
        {productsInfos.length &&
          productsInfos.map((productInfo) => {
            const amount = selectedProducts.filter(
              (id) => id === productInfo._id
            ).length
            if (amount === 0) return
            return (
              <div
                className="flex mb-5 items-center w-[53rem]"
                key={productInfo._id}
              >
                <div className="shrink-0">
                  <img
                    className="w-28 rounded-lg"
                    src={productInfo.picture}
                    alt=""
                  />
                </div>
                <div className="pl-4 items-center">
                  <h3 className="font-bold text-lg">{productInfo.name}</h3>
                  <p className="text-sm leading-4 text-gray-500">
                    {productInfo.description}
                  </p>
                  <div className="flex mt-1">
                    <div className="grow font-bold">${productInfo.price}</div>
                    <div className="flex items-center">
                      <button
                        onClick={() => lessOfThisProduct(productInfo._id)}
                        className=""
                      >
                        <AiOutlineMinusCircle className="text-[1.5rem]" />
                      </button>
                      <span className="px-2">
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
                        <AiOutlinePlusCircle className="text-[1.5rem]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        <form
          action="/api/checkout"
          method="POST"
          className="flex items-center flex-col"
        >
          <div className="mt-8">
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
          <div className="mt-8 w-[50rem]">
            <div className="flex my-3">
              <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
              <h3 className="font-bold text-darkBlue">${subtotal}</h3>
            </div>
            <div className="flex my-3">
              <h3 className="grow font-bold text-gray-400">Delivery:</h3>
              <h3 className="font-bold text-darkBlue">${deliveryPrice}</h3>
            </div>
            <div className="flex my-3 border-t pt-3 border-dashed border-darkBlue">
              <h3 className="grow font-bold text-gray-400">Total:</h3>
              <h3 className="font-bold text-darkBlue">${total}</h3>
            </div>
          </div>
          <input
            type="hidden"
            name="products"
            value={selectedProducts.join(",")}
          />
          <button
            type="submit"
            className="bg-darkBlue w-full px-5 py-4 text-[1.2rem] rounded-xl font-bold text-white my-4"
          >
            Pay ${total}
          </button>
        </form>
      </div>
    </Layout>
  )
}
