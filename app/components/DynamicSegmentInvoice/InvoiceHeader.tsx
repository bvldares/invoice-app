"use client"
import useInvoiceStore from "@/store"
import InvoiceStatus from "@/app/components/Invoice/InvoiceStatus"
import EditBtn from "../buttons/DynamicSegmentButtons/EditBtn"
import DeleteBtn from "../buttons/DynamicSegmentButtons/DeleteBtn"
import MarkAsPaid from "../buttons/DynamicSegmentButtons/MarkAsPaid"

type paid = {
    isPaid: boolean
}

const InvoiceHeader: React.FC<paid> = ({ isPaid }) => {
    const { isDark } = useInvoiceStore()

    return (
        <div className={`${isDark ? "bg-deepBlue" : "bg-white"}  flex-col gap-6
        px-2 sm:px-8 py-9 bg-deepBlue flex sm:flex-row sm:items-center justify-between rounded-lg sm:gap-4`}>
            <div className="flex items-center gap-4 sm:gap-10">
                <p className=" font-semibold">Status</p>
                <InvoiceStatus isPaid={isPaid} />
            </div>
            <div className="flex items-center gap-2">
                <EditBtn />
                <DeleteBtn />
                <MarkAsPaid />
            </div>
        </div>
    )
}

export default InvoiceHeader