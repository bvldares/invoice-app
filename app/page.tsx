"use client"
import MainHeader from './components/MainHeader'
import useInvoiceStore from '@/store'
import InvoiceForm from './components/invoiceForm/InvoiceForm'
import { AnimatePresence } from 'framer-motion'
import EmptyList from './components/EmptyList'
import supabase from '@/supabase'
import { useSession } from 'next-auth/react'
import { useState } from "react"
import Inputs from '@/types/formTypes'
import FetchedInvoice from './Invoice/FetchedInvoice'
export const revalidate = 20

export default function Home() {
  const [fetchedInvoices, setFetchedInvoices] = useState<any>([])
  const { isDark, showNewForm } = useInvoiceStore()
  const { data: session, status } = useSession()

  if (session) {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Invoice")
        .select()
        .eq('user_id', session?.user?.id)

      if (data) setFetchedInvoices(data)
      if (error) console.log(error)

    }
    fetchData()
  }




  return (
    <main className={`w-full h-screen ${isDark ? "bg-deepPurple transition duration-500 text-paleGray" : "bg-white transition duration-500 text-black"} relative`}>
      <div className='p-6 py-10 md:p-10 mx-auto max-w-[1000px] h-screen flex flex-col'>
        <MainHeader />
        {fetchedInvoices.length == 0 && <EmptyList />}
        {fetchedInvoices.length > 0 &&
          fetchedInvoices.map((item: any) => <FetchedInvoice key={item.id} {...item} />)
        }

      </div>
      <AnimatePresence>
        {showNewForm && <InvoiceForm />}
      </AnimatePresence>

    </main>

  )
}
