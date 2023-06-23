"use client"

import useInvoiceStore from "@/store"
type DiscardButton = {
    reset: () => void
}

const DiscardButton: React.FC<DiscardButton> = ({ reset }) => {
    const { toggleNewForm } = useInvoiceStore()
    const discard = () => {
        toggleNewForm()
        reset()
    }
    return (
        <button
            type="button"
            className={`text-black/70  bg-white rounded-3xl px-[22px] shadow-md py-4 font-bold hover:shadow-xl w-full sm:w-fit`}
            onClick={() => discard()}
        >Discard</button>
    )
}

export default DiscardButton