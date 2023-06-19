"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import useInvoiceStore from "@/store"

type Inputs = {
    drawerAddress: string
    draewerCity: string
    drawerPostCode: string
    drawerCountry: string
    clientName: string
    clientEmail: string
    clientAddress: string
    clientCity: string
    clientPostCode: string
    clientCountry: string
    invoiceDate: string
    paymentTerms: string
    projectDescription: string
    item: Service[]
}

type Service = {
    name: string;
    quantity: number
    price: number
    totalPrice: number
}

const InvoiceForm = () => {
    const { isDark } = useInvoiceStore()
    const { register, handleSubmit, watch } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
    return (
        <div className="
            fixed 
            top-[84px] left-0 bottom-0 right-0 
            md:right-0 lg:left-[80px] lg:top-0
            bg-red/80
            ">
            <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-brillantPurple text-[15px]">Bill from</h3>

                <label htmlFor="drawerAddress" className="mb-2 text-palePurple">Street Address</label>
                <input
                    id="drawerAddress"
                    className=
                    {`border rounded-sm px-5 py-4 
                    font-bold text-black outline-none 
                    invalid:border-red active:border-purple`}
                    defaultValue="" {...register("drawerAddress")}
                />

            </form>
        </div>
    )
}

export default InvoiceForm