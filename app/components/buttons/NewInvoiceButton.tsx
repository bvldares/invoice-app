"use client"
import { useSession, signIn } from "next-auth/react"
import { IoAddCircle } from "react-icons/io5"
import useInvoiceStore from "@/store"
const NewInvoice = () => {

    const { data: session, status } = useSession()
    const { toggleNewForm } = useInvoiceStore()

    const handleClick = () => {
        if (status === "authenticated") toggleNewForm()
        else signIn()
    }

    return (
        <button
            onClick={() => handleClick()}
            className="
            bg-intensePurple text-white flex 
            items-center gap-4 pl-2 pr-5 rounded-fullfont-bold rounded-full
          ">
            <IoAddCircle size={45} />
            <p className="mt-[3px] py-[15px]">New Invoice</p>
        </button>
    )
}

export default NewInvoice