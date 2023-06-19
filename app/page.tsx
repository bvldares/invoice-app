"use client"
import Image from 'next/image'
import MainHeader from './components/MainHeader'
import useInvoiceStore from '@/store'
import InvoiceForm from './components/invoiceForm/InvoiceForm'

export default function Home() {

  const { isDark } = useInvoiceStore()
  return (

    <main className={`w-full h-screen ${isDark ? "bg-deepPurple text-paleGray" : "bg-white text-black"} relative`}>
      <div className='p-6 py-10 md:p-10 mx-auto max-w-[730px]'>
        <MainHeader />
      </div>
      <InvoiceForm />
    </main>
  )
}
