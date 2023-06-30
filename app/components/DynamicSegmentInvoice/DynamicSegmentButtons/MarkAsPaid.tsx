"use client"
import { useState, useEffect } from "react"
import supabase from "@/supabase"

type invoiceId = {
    invoiceId: number
}

const MarkAsPaid: React.FC<invoiceId> = ({ invoiceId }) => {
    const [hasMounted, setHasMounted] = useState(0)

    useEffect(() => {
        setHasMounted(invoiceId)
        console.log(hasMounted)
    }, [invoiceId])


    const handleClick = async () => {
        if (hasMounted != 0) {
            const { data, error } = await supabase
                .from("Invoice")
                .update({ isPaid: true })
                .eq('id', invoiceId);

            if (data) console.log("ciao")
            if (error) console.log(error)
        }
    }


    return (
        <button
            onClick={() => handleClick()}
            className="btn-invoice bg-intensePurple">
            Mark As Paid
        </button>

    )
}

export default MarkAsPaid