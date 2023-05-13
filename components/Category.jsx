import React from "react"

function Category() {
  return (
    <div className="mt-28">
      <h2 className="font-bold text-[1.5rem] mb-5 md:text-[2rem] md:mb-8 sm:text-[1.5rem]">
        Curated Picks
      </h2>
      <div className="grid grid-cols-grid1 gap-4 mb-10 mmd:gap-6">
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Rolex-GMT-Master-II-126710-10-10-ROL-A6CBDZ-45dbc428984d_2048x2048.jpg?v=1682429483&auto=format&ixlib=react-9.3.0&w=1446"
            alt=""
            className="rounded-xl object-cover w-full h-full"
          />
          <button className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-700 text-[0.9rem] font-semibold">Shop Rolex</button>
        </div>
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/Omega30-Wrist_2048x2048.jpg?auto=format&dpr=1&fit=max&fm=jpg&ixjsv=2.2.4&usm=12&v=1573673543&ixlib=react-9.3.0&q=88&w=530"
            alt=""
            className="rounded-xl object-cover w-full h-full"
          />
          <button className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-700 text-[0.9rem] font-semibold">Shop Omega</button>
        </div>
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/L3.812.4.53.6_WS_A3_SQ_ISA_2048x2048.jpg?auto=format&dpr=1&fit=max&fm=jpg&ixjsv=2.2.4&usm=12&v=1678295912&ixlib=react-9.3.0&q=88&w=530"
            alt=""
            className="rounded-xl object-cover w-full h-full"
          />
          <button className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-700 text-[0.9rem] font-semibold">Shop Longines</button>
        </div>
        <div className="relative">
          <img
            src="https://hodinkee-shopify.imgix.net/s/files/1/0146/0732/products/TimexLE-08_2048x2048.png?auto=format&dpr=1&fit=max&fm=jpg&ixjsv=2.2.4&usm=12&v=1637250735&ixlib=react-9.3.0&q=88&w=530"
            alt=""
            className="rounded-xl object-cover w-full h-full"
          />
          <button className="absolute bottom-4 left-4 bg-white rounded-lg p-3 text-gray-700 text-[0.9rem] font-semibold">Shop Timex</button>
        </div>
      </div>
    </div>
  )
}

export default Category
