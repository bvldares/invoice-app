"use client"
import useInvoiceStore from "@/store"
import InvoiceStatus from "@/app/components/Invoice/InvoiceStatus"
import EditBtn from "./DynamicSegmentButtons/EditBtn"
import DeleteBtn from "./DynamicSegmentButtons/DeleteBtn"
import MarkAsPaid from "./DynamicSegmentButtons/MarkAsPaid"

type paid = {
    isPaid: boolean
    invoiceId: number
    toggleDeleteModal: () => void

}

const InvoiceHeader: React.FC<paid> = ({ isPaid, invoiceId, toggleDeleteModal }) => {
    const { isDark } = useInvoiceStore()

    return (
        <div
            className={`${isDark ? "bg-deepBlue" : "bg-white"}  gap-6 px-8 py-9 
        bg-deepBlue flex flex-row sm:items-center justify-between rounded-lg sm:gap-4`}>
            <div className="flex items-center justify-between w-full sm:w-fit gap-4 sm:gap-10 ">
                <p className=" font-semibold">Status</p>
                <InvoiceStatus isPaid={isPaid} />
            </div>
            <div className="hidden sm:flex items-center gap-2">
                <EditBtn />
                <DeleteBtn toggleDeleteModal={toggleDeleteModal} />
                <MarkAsPaid invoiceId={invoiceId} />
            </div>
        </div>
    )
}

export default InvoiceHeader