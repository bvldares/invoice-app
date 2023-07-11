"use client"
import useInvoiceStore from "@/store"

const EditBtn = () => {
    const { setEditModal } = useInvoiceStore()
    return (
        <button
            onClick={setEditModal}
            className="btn-invoice bg-deepPurple">
            Edit
        </button>

    )
}

export default EditBtn