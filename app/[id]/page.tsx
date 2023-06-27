"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"
import useInvoiceStore from '@/store'
import { useSession } from 'next-auth/react'
import supabase from '@/supabase'
import InvoiceHeader from '../components/DynamicSegmentInvoice/InvoiceHeader'
import { SlArrowLeft } from "react-icons/sl"

export default function InvoiceDetails({ params }: { params: { id: string } }) {
    const [invoice, setInvoice] = useState<any>([])
    const router = useRouter()
    const { isDark } = useInvoiceStore()
    const { data: session } = useSession()
    useEffect(() => {
        const fetchInvoice = async () => {
            if (params.id && session) {
                const { data, error } = await supabase
                    .from('Invoice')
                    .select("*")
                    .eq("id", parseInt(params.id))

                if (data) setInvoice(data[0])
                if (error) console.log(error)
            }
        }
        fetchInvoice()
    }, [session])



    return (
        <main className={`w-full h-screen ${isDark ? "bg-deepPurple transition duration-500 text-paleGray" : "bg-white transition duration-500 text-black"} relative`}>
            <div className={`p-6 py-10 md:p-10 mx-auto max-w-[1000px] h-screen flex flex-col `}>
                <button
                    onClick={() => router.back()}
                    className={`flex items-center mb-8 gap-5 px-4 py-2  w-fit rounded-lg ${!isDark ? "hover:bg-gray-200" : "hover:bg-deepBlue"}`}
                >
                    <SlArrowLeft size={15} className='text-intensePurple' />
                    <span className='mt-[1.5px] font-bold'>Go back</span>
                </button>


                <InvoiceHeader isPaid={invoice.isPaid} />
            </div>
        </main>
    )

}