import React, { useContext, useEffect, useState } from "react"
import Footer from "./Footer"
import { ProductsContext } from "./ProductsContext"
import Navbar from "./Navbar"

function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedProducts([])
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
  }, [])
  return (
    <div className="flex flex-col w-[65rem]">
      <Navbar />
      <div className="p-5">
        {success && (
          <div className="mb-5 bg-darkBlue text-white font-medium text-lg p-5 rounded-xl text-center">
            Thank you for your order!
          </div>
        )}
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
