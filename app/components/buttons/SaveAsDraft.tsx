"use client"

import useInvoiceStore from "@/store"

const SaveAsDraft = () => {

    const { setDeliveryStatus } = useInvoiceStore()
    return (
        <button
            onClick={() => setDeliveryStatus(false)}
            className={`text-paleGray bg-[#373B53] hover:bg-[#5763a9] transition capitalize rounded-3xl px-[22px] shadow-md py-4 font-bold hover:shadow-xl w-full sm:w-fit`}
        >
            save as draft
        </button>
    )
}

export default SaveAsDraft