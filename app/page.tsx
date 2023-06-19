"use client"
import Image from 'next/image'
import MainHeader from './components/MainHeader'
import useInvoiceStore from '@/store'
import InvoiceForm from './components/InvoiceForm'

export default function Home() {

  const { isDark } = useInvoiceStore()
  return (

    <main className={`w-full h-screen ${isDark ? "bg-deepPurple text-paleGray" : "bg-white text-black"}`}>
      <div className='p-6 py-10 md:p-10 mx-auto max-w-[730px]'>
        <MainHeader />
        <InvoiceForm />
      </div>
    </main>
  )
}
