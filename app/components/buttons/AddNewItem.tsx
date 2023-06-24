"use client"

import React from "react"

type newItemBtn = {
    isDark: boolean
    append: (item: any) => void
    label: string
}

const AddNewItem: React.FC<newItemBtn> = ({ isDark, append, label }) => {
    return (
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
            font-bold py-4 w-full rounded-full mt-4
            hover:shadow-md
            `}
        >
            {label}
        </button>
    )
}

export default AddNewItem