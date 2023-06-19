"use client"
import Image from 'next/image'
import MainHeader from './components/MainHeader'
import useInvoiceStore from '@/store'

export default function Home() {

  const { isDark } = useInvoiceStore()
  return (

    <main className={`w-full  h-screen ${isDark ? "bg-deepBlue text-white" : "bg-white text-black"}`}>
      <div className='p-4 md:p-10 mx-auto max-w-[730px] '>

        <MainHeader />
      </div>
    </main>
  )
}
