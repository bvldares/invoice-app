"use client"

import useInvoiceStore from "@/store"

type inputElements = {
    register: any
    text: string
    field: string
    type: string
    defaultValue: string
}

const EditFormInput: React.FC<inputElements> = ({ register, text, type, field, defaultValue }) => {
    const { isDark } = useInvoiceStore()
    return (
        <div className="flex flex-col">
            <label htmlFor={field} className="mt-4 mb-2 text-palePurple font-semibold">{text}</label>
            <input
                type={type}
                id={field}
                required
                className={`
                    border rounded-md px-5 py-4 text-[15px] 
                    font-bold  outline-none shadow-sm
                    focus:shadow-lg
                    ${isDark ? "bg-deepBlue border-deepBlue text-white" : "bg-white text-black "}
                    `}
                defaultValue={defaultValue}
                {...register(field)}
            />
        </div>
    )
}


export default EditFormInput