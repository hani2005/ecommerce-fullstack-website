import React, { useContext, useEffect, useState } from "react"
import Footer from "./Footer"
import { ProductsContext } from "./ProductsContext"

function Layout({ children }) {
  const {setSelectedProducts} = useContext(ProductsContext)
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedProducts([])
      setSuccess(true)
    }
  }, [])
  return (
    <div className="flex flex-col items-center sm:items-stretch md:items-stretch">
      <div className="p-5 sm:flex sm:flex-col sm:overflow-hidden">
        {success && (
          <div className="mb-5 bg-blueColor text-white text-lg p-5 rounded-xl">
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
