"use client"

import useInvoiceStore from "@/store"

type inputElements = {
    register: any
    text: string
    field: string
}

const FormInput: React.FC<inputElements> = ({ register, text, field }) => {
    const { isDark } = useInvoiceStore()
    return (
        <div className="flex flex-col">
            <label htmlFor={field} className="mt-4 mb-2 text-[#797C8F] font-semibold">{text}</label>
            <input id={field}
                className={`
                    border rounded-md px-5 py-4 text-[15px] 
                    font-bold  outline-none shadow-sm
                    invalid:border-red active:border-purple focus:shadow-lg
                    ${isDark ? "bg-deepBlue border-deepBlue text-white" : "bg-white text-black "}
                    `}
                defaultValue="" {...register(field)}
            />
        </div>
    )
}


export default FormInput
