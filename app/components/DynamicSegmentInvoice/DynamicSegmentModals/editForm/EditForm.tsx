"use client"
import Inputs from "@/types/formTypes"
import { AnimatePresence, motion } from "framer-motion"
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"
import InvoiceProduct from "../../../invoiceForm/InvoiceProduct"
import AddNewItem from "../../../buttons/AddNewItem"
import useInvoiceStore from "@/store"
import EditFormInput from "./EditFormInput"

const EditForm: React.FC<Inputs> = (invoice, toggleEditModal) => {
    const { register, handleSubmit, control, watch } = useForm<Inputs>()
    const { isDark } = useInvoiceStore()

    const { fields, append, remove } = useFieldArray({
        control,
        name: "services"
    })

    const onSubmit = () => {

    }


    return (
        <motion.div
            key="modal"
            className="absolute inset-0  top-0 lg:top-0  bg-black/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleEditModal}
        >

            <motion.div
                onClick={(e) => e.stopPropagation()}
                key="form"
                initial={{ translateX: "-615px", opacity: 0 }}
                transition={{ duration: .4 }}
                animate={{ translateX: 0, opacity: 1 }}
                exit={{ translateX: "-615px" }}
                className={`absolute top-0 left-0 bottom-0 right-0 md:w-[615px] lg:left-0 lg:top-0 ${!isDark ? "bg-white" : "bg-deepPurple"}`}>
                <form
                    className="flex flex-col  overflow-y-scroll h-full form p-12"
                    onSubmit={handleSubmit(onSubmit)}>


                    <h3 className="font-bold text-brillantPurple text-[15px] capitalize">Bill from</h3>
                    <EditFormInput type="text" defaultValue={invoice.drawerAddress} register={register} field="drawerAddress" text="Street Address" />
                    <div className="md:grid grid-cols-3 gap-3">
                        <EditFormInput type="text" defaultValue={invoice.drawerCity} register={register} field="drawerCity" text="City" />
                        <EditFormInput type="text" defaultValue={invoice.drawerPostCode} register={register} field="drawerPostCode" text="Post Code" />
                        <EditFormInput type="text" defaultValue={invoice.drawerCountry} register={register} field="drawerCountry" text="Country" />
                    </div>

                    <h3 className="font-bold text-brillantPurple text-[15px] mt-10 capitalize">Bill to</h3>
                    <EditFormInput type="text" defaultValue={invoice.clientName} register={register} field="clientName" text="Client's Name" />
                    <EditFormInput type="email" defaultValue={invoice.clientName} register={register} field="clientEmail" text="Client's Email" />
                    <EditFormInput type="text" defaultValue={invoice.clientAddress} register={register} field="clientAddress" text="Street Address" />
                    <div>
                        <EditFormInput type="text" defaultValue={invoice.clientCity} register={register} field="clientCity" text="City" />
                        <EditFormInput type="text" defaultValue={invoice.clientPostCode} register={register} field="clientPostCode" text="Post Code" />
                        <EditFormInput type="text" defaultValue={invoice.clientCountry} register={register} field="clientCountry" text="Country" />
                    </div>
                    <div className="md:flex gap-3 w-full ">
                        <EditFormInput type="date" defaultValue={invoice.invoiceDate} register={register} field="invoiceDate" text="Invoice Date" />
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
                    <EditFormInput type="text" defaultValue={invoice.projectDescription} register={register} field="projectDescription" text="Project Description" />

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
                    <AddNewItem append={append} isDark={isDark} label="+ Add New Item" key={"btn"} />



                </form>
            </motion.div>
        </motion.div>
    )
}

export default EditForm