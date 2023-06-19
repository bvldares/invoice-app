"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import useInvoiceStore from "@/store"
import FormInput from "./FormInput"
import FormSubmitter from "./FormSubmitter"

type Inputs = {
    drawerAddress: string
    drawerCity: string
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
}

type Service = {
    name: string;
    quantity: number
    price: number
    totalPrice: number
}

const InvoiceForm = () => {
    const { isDark } = useInvoiceStore()
    const { register, handleSubmit, watch, reset } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    }

    return (
        <div className="absolute inset-0 lg:left-[82px] top-0 lg:top-0  bg-black/60 z-10">
            <div
                className={`absolute top-0 left-0 bottom-0 right-0
                        md:w-[615px] lg:left-0 lg:top-0 
                        ${!isDark ? "bg-white" : "bg-deepPurple"}
            `}>
                <form
                    className="flex flex-col  overflow-y-scroll h-full form p-12"
                    onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-brillantPurple text-[15px] capitalize">Bill from</h3>
                    <FormInput register={register} field="drawerAddress" text="Street Address" />
                    <div className="md:grid grid-cols-3 gap-3">
                        <FormInput register={register} field="drawerCity" text="City" />
                        <FormInput register={register} field="drawerPostCode" text="Post Code" />
                        <FormInput register={register} field="drawerCountry" text="Country" />
                    </div>

                    <h3 className="font-bold text-brillantPurple text-[15px] mt-10 capitalize">Bill to</h3>
                    <FormInput register={register} field="clientName" text="Client's Name" />
                    <FormInput register={register} field="clientEmail" text="Client's Email" />
                    <FormInput register={register} field="clientAddress" text="Street Address" />
                    <div>
                        <FormInput register={register} field="clientCity" text="City" />
                        <FormInput register={register} field="clientPostCode" text="Post Code" />
                        <FormInput register={register} field="clientCountry" text="Country" />
                    </div>
                    <div className="md:grid grid-cols-2 gap-3">
                        <FormInput register={register} field="invoiceDate" text="Invoice Date" />
                        <FormInput register={register} field="paymentTerms" text="Payment Terms" />
                    </div>
                    <FormInput register={register} field="projectDescription" text="Project Description" />
                    <FormSubmitter onSubmit={() => onSubmit} />




                </form>
            </div>
        </div>
    )
}

export default InvoiceForm