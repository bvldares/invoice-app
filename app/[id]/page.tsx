"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"
import useInvoiceStore from '@/store'
import { useSession } from 'next-auth/react'
import supabase from '@/supabase'
import InvoiceHeader from '../components/DynamicSegmentInvoice/InvoiceHeader'
import { SlArrowLeft } from "react-icons/sl"
import InvoiceBody from '../components/DynamicSegmentInvoice/InvoiceBody'
import EditBtn from '../components/DynamicSegmentInvoice/DynamicSegmentButtons/EditBtn'
import DeleteBtn from '../components/DynamicSegmentInvoice/DynamicSegmentButtons/DeleteBtn'
import MarkAsPaid from '../components/DynamicSegmentInvoice/DynamicSegmentButtons/MarkAsPaid'
import { AnimatePresence } from 'framer-motion'
import DeleteModal from '../components/DynamicSegmentInvoice/DynamicSegmentModals/DelteModal'

export default function InvoiceDetails({ params }: { params: { id: string } }) {
    const [deleteModal, setDeleteModal] = useState(false)
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

    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    };


    return (
        <main className={`w-full h-screen ${isDark ? "bg-deepPurple transition duration-500 text-paleGray" : "bg-gray-200 transition duration-500 text-black"} relative`}>
            <div className={`p-6 py-10 md:p-10 mx-auto max-w-[1000px] h-screen flex flex-col `}>
                <button
                    onClick={() => router.back()}
                    className={`flex items-center mb-8 gap-5 px-4 py-2  w-fit rounded-lg transition-colors duration-500 ${!isDark ? "hover:bg-white" : "hover:bg-deepBlue"}`}
                >
                    <SlArrowLeft size={15} className='text-intensePurple' />
                    <span className='mt-[1.5px] font-bold'>Go back</span>
                </button>

                <InvoiceHeader isPaid={invoice.isPaid} invoiceId={invoice.id} toggleDeleteModal={toggleDeleteModal} />
                <InvoiceBody {...invoice} />


                <div className={`flex justify-center gap-4 rounded-lg  p-4 items-center sm:hidden 
                ${isDark ? "bg-deepBlue" : "bg-white"} -mb-4 mt-4`}>
                    <EditBtn />
                    <DeleteBtn toggleDeleteModal={toggleDeleteModal} />
                    <MarkAsPaid invoiceId={invoice.id} />
                </div>
            </div>

            {deleteModal && <DeleteModal id={invoice.id} toggleDeleteModal={toggleDeleteModal} />}
        </main>
    )

}