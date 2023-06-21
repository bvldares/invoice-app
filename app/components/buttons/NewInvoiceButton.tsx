"use client"

import { IoAddCircle } from "react-icons/io5"
import useInvoiceStore from "@/store"
const NewInvoice = () => {
    const { toggleNewForm } = useInvoiceStore()
    return (
        <button
            onClick={toggleNewForm}
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