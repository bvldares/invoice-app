"use client"

import NewInvoice from "./buttons/NewInvoice"
import StatusFilter from "./filter/StatusFilter"
import useInvoiceStore from "@/store"

const MainHeader = () => {
    const { isDark } = useInvoiceStore()

    return (
        <section className="flex justify-between items-center ">
            {/*Title */}
            <div>
                <h2 className={`text-2xl md:text-4xl font-bold`}>Invoices</h2>
                <p className={`${!isDark ? "text-gray-400" : "text-paleGray"} font-semibold`}>No invoices</p>
            </div>

            <StatusFilter />
            <NewInvoice />

        </section>
    )
}

export default MainHeader