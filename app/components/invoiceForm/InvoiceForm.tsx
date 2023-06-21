"use client"

import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"
import useInvoiceStore from "@/store"
import FormInput from "./FormInput"
import FormSubmitter from "./FormSubmitter"
import InvoiceProduct from "./InvoiceProduct"
import Inputs from "@/types/formTypes"
import { AnimatePresence, motion } from "framer-motion"

const InvoiceForm = () => {
    const { isDark, toggleNewForm } = useInvoiceStore()
    const { register, handleSubmit, reset, control, watch } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    }

    const { fields, append, remove } = useFieldArray({
        control,
        name: "services"
    })

    return (
        <motion.div
            key="modal"
            className="absolute inset-0 lg:left-[82px] top-0 lg:top-0  bg-black/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleNewForm}
        >

            <motion.div
                onClick={(e) => e.stopPropagation()}
                key="form"
                initial={{ translateX: "-615px", opacity: 0 }}
                transition={{ duration: .4 }}
                animate={{ translateX: "0px", opacity: 1 }}
                exit={{ translateX: "-615px" }}
                className={`absolute top-0 left-0 bottom-0 right-0 md:w-[615px] lg:left-0 lg:top-0 ${!isDark ? "bg-white" : "bg-deepPurple"}`}>
                <form
                    className="flex flex-col  overflow-y-scroll h-full form p-12"
                    onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-brillantPurple text-[15px] capitalize">Bill from</h3>
                    <FormInput type="text" register={register} field="drawerAddress" text="Street Address" />
                    <div className="md:grid grid-cols-3 gap-3">
                        <FormInput type="text" register={register} field="drawerCity" text="City" />
                        <FormInput type="text" register={register} field="drawerPostCode" text="Post Code" />
                        <FormInput type="text" register={register} field="drawerCountry" text="Country" />
                    </div>

                    <h3 className="font-bold text-brillantPurple text-[15px] mt-10 capitalize">Bill to</h3>
                    <FormInput type="text" register={register} field="clientName" text="Client's Name" />
                    <FormInput type="email" register={register} field="clientEmail" text="Client's Email" />
                    <FormInput type="text" register={register} field="clientAddress" text="Street Address" />
                    <div>
                        <FormInput type="text" register={register} field="clientCity" text="City" />
                        <FormInput type="text" register={register} field="clientPostCode" text="Post Code" />
                        <FormInput type="text" register={register} field="clientCountry" text="Country" />
                    </div>
                    <div className="md:flex gap-3 w-full ">
                        <FormInput type="date" register={register} field="invoiceDate" text="Invoice Date" />
                        <div>
                            <label htmlFor="paymentTerms" className="mt-4 mb-2 inline-block text-palePurple font-semibold">Payment Terms</label>
                            <select id="paymentTerms" {...register("paymentTerms")}
                                className={`border rounded-md px-5 py-4 text-[15px] h-[58.5px] w-full  font-bold  outline-none shadow-sm focus:shadow-lg
                            ${isDark ? "bg-deepBlue border-deepBlue text-white" : "bg-white text-black "}`}>
                                <option value="15">15 Days</option>
                                <option value="30">1 Month</option>
                                <option value="60">2 Month</option>
                            </select>
                        </div>

                    </div>
                    <FormInput type="text" register={register} field="projectDescription" text="Project Description" />

                    <h3 className="text-[#777F98] font-bold tracking-[-0.43px] mt-10" >Item List</h3>

                    <AnimatePresence>
                        {fields.map((field, index) => {
                            return (
                                <InvoiceProduct
                                    key={field.id}
                                    index={index}
                                    register={register}
                                    watch={watch}
                                    remove={remove}
                                />
                            )
                        })}
                    </AnimatePresence>


                    <button
                        type="button"
                        onClick={() => append({
                            name: "",
                            price: 0,
                            quantity: 1,
                            totalPrice: 0
                        })}
                        className={`
                        ${isDark ? "bg-deepBlue text-white" : "bg-paleGray text-palePurple"} 
                        font-bold py-4 w-full rounded-full mt-4`} >
                        + Add New Item
                    </button>

                    <FormSubmitter reset={reset} save={() => onSubmit} />
                </form>
            </motion.div>

        </motion.div>
    )
}

export default InvoiceForm