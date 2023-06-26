"use client"

import NewInvoiceButton from "./buttons/NewInvoiceButton"
import StatusFilter from "./filter/StatusFilter"
import useInvoiceStore from "@/store"

const MainHeader = () => {
    const { isDark, availableInvoices } = useInvoiceStore()
    return (
        <section className="flex justify-between items-center ">
            <div>
                <h2 className={`text-2xl md:text-4xl font-bold`}>Invoices</h2>
                <p className={`${!isDark ? "text-gray-400" : "text-paleGray"} font-semibold`}>
                    {availableInvoices == 0 ? "No invoices" : `${availableInvoices} Available invoices`}
                </p>
            </div>

            <StatusFilter />
            <NewInvoiceButton />

        </section>
    )
}

export default MainHeader