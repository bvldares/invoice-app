"use client"
import Image from 'next/image'
import MainHeader from './components/MainHeader'
import useInvoiceStore from '@/store'
import InvoiceForm from './components/invoiceForm/InvoiceForm'
import { motion, AnimatePresence } from 'framer-motion'
export default function Home() {

  const { isDark, showNewForm } = useInvoiceStore()
  return (

    <main className={`w-full h-screen ${isDark ? "bg-deepPurple transition duration-500 text-paleGray" : "bg-white transition duration-500 text-black"} relative`}>
      <div className='p-6 py-10 md:p-10 mx-auto max-w-[730px]'>
        <MainHeader />
      </div>
      <AnimatePresence>
        {showNewForm && <InvoiceForm />}
      </AnimatePresence>

    </main>

  )
}
