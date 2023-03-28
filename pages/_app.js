import { ProductsContextProvider } from "@/components/ProductsContext"
import "@/styles/globals.css"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <Head>
        <title>Ecom Project</title>
        <link rel="shortcut icon" href="/ecom-logo.png" />
      </Head>
      <Component {...pageProps} />
    </ProductsContextProvider>
  )
}
