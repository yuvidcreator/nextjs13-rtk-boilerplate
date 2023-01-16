import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-center items-center min-h-screen">
        <h1 className="font-extrabold text-2xl">Hello From Yuvraj</h1>
      </div>
    </>
  )
}
