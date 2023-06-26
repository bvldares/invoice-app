"use client"
import MainHeader from './components/MainHeader'
import useInvoiceStore from '@/store'
import { AnimatePresence } from 'framer-motion'
import EmptyList from './components/EmptyList'
import supabase from '@/supabase'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from "react"
import FetchedInvoice from './components/Invoice/FetchedInvoice'
import Image from 'next/image'
import lightLoader from "@/public/sunnyLoader.gif"
import darkloader from "@/public/darkLoader.gif"
import Inputs from '@/types/formTypes'
import InvoiceForm from './components/invoiceForm/InvoiceForm'

export default function Home() {
  const [fetchedInvoices, setFetchedInvoices] = useState<any>([])
  const { isDark, showNewForm, filter, setAvailableInvoices } = useInvoiceStore()
  const { data: session, status } = useSession()




  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        let { data, error } = await supabase
          .from("Invoice")
          .select()
          .eq('user_id', session?.user?.id)

        if (filter === 'Pending') {
          data = data!.filter(item => item.deliveryStatus === true);
        } else if (filter === 'Draft') {
          data = data!.filter(item => item.deliveryStatus === false);
        } else if (filter === 'Paid') {
          data = data!.filter(item => item.isPaid === true);
        }

        if (data) {
          console.log(data)
          setFetchedInvoices(data)
          setAvailableInvoices(data.length)
        }
        if (error) console.log(error)

      }
      fetchData()
    }
  }, [session, filter])

  const invoiceElements = fetchedInvoices.map((item: any) => <FetchedInvoice {...item} key={item.id} />)

  return (
    <main className={`w-full h-screen ${isDark ? "bg-deepPurple transition duration-500 text-paleGray" : "bg-white transition duration-500 text-black"} relative`}>
      <div className='p-6 py-10 md:p-10 mx-auto max-w-[1000px] h-screen flex flex-col'>
        <MainHeader />
        {status == "loading" && <Image className='m-auto' width={250} height={250} src={isDark ? darkloader : lightLoader} alt='loader' />}

        <AnimatePresence>
          {
            status == "authenticated" &&
              fetchedInvoices.lenght == 0 ?
              <EmptyList /> :
              <div className='mt-10 flex flex-col gap-5'>{invoiceElements}</div>
          }
        </AnimatePresence>


      </div>
      <AnimatePresence>
        {showNewForm && <InvoiceForm />}
      </AnimatePresence>
    </main>

  )
}
