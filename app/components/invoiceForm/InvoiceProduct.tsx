"use client"



import { MdDeleteOutline } from "react-icons/md"
import useInvoiceStore from "@/store"
import { motion, AnimatePresence } from "framer-motion"

type itemElement = {
    register: any,
    index: any
    watch: any
    remove: any
}

const InvoiceProduct: React.FC<itemElement> = ({ index, remove, watch, register, }) => {
    const { isDark } = useInvoiceStore()
    const labelClass = `${isDark ? "text-white" : "text-palePurple"}`
    const inputClass = `
    border rounded-md px-5 py-4 text-[15px]  
    font-bold  outline-none shadow-sm md:w-[90%] 
    active:border-purple focus:shadow-lg w-full
    ${isDark ? "bg-deepBlue border-deepBlue text-white" : "bg-white text-black "} `

    const totalPrice = (watch(`services.${index}.price`) * watch(`services.${index}.quantity`)).toFixed(2)

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, translateX: "300px" }}
            transition={{ duration: .4 }}
            className="flex flex-wrap md:flex-nowrap transition gap-y-3 mb-6"
        >
            <div className="w-full">
                <p className={labelClass}>Item Name</p>
                <input
                    defaultValue=""
                    type="text"
                    placeholder="Logo Design"
                    required
                    {...register(`services.${index}.name`)}
                    className={inputClass}
                />
            </div>

            <div className="flex items-center gap-3 ">
                <div>
                    <p className={labelClass}>Quantity</p>
                    <input
                        defaultValue="1"
                        placeholder="1"
                        required
                        {...register(`services.${index}.quantity`)}
                        className={inputClass}
                        type="number"
                        min={1}
                    />
                </div>

                <div>
                    <p className={labelClass}>Price</p>
                    <input
                        defaultValue=""
                        placeholder="300"
                        required
                        {...register(`services.${index}.price`)}
                        className={inputClass}
                        type="number"
                    />
                </div>

                <div>
                    <p className={labelClass}>Total</p>
                    <p className="p-3 text-palePurple font-semibold">
                        {totalPrice != undefined ? totalPrice : 0}
                    </p>

                </div>

                <div className="py-5">
                    <MdDeleteOutline
                        onClick={() => remove(index)}
                        size="24"
                        className={`mt-4 ${isDark ? "text-palePurple hover:text-white" : "text-deepPurple hover:text-palePurple"}`}
                    />
                </div>

            </div>

        </motion.div>
    )
}

export default InvoiceProduct