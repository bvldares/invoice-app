"use client"

import useInvoiceStore from "@/store"
const SaveAndSend = () => {
    const { setDeliveryStatus } = useInvoiceStore()
    return (
        <button
            onClick={() => setDeliveryStatus(true)}
            className={`text-white capitalize bg-intensePurple hover:bg-purple-600 transition  rounded-3xl px-[22px] shadow-md py-4 font-bold hover:shadow-xl w-full sm:w-fit`}
        >
            save and Send
        </button>
    )
}

export default SaveAndSend