// import Head from 'next/head'
// import Image from 'next/image'
import GradientText from '@/components/common/GradientText'
import Product from '@/components/HomePage/Product'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <>
      {/* <div className="flex justify-center text-center items-center min-h-screen">
        <h1 className="font-extrabold text-2xl">Welcome To <GradientText text={"InnerKomfort"} /></h1>
      </div> */}
      <div className="mt-16">
        <Product />
      </div>
    </>
  )
}


export default HomePage