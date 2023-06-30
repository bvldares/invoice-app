"use client"

import Inputs from "@/types/formTypes";
import useInvoiceStore from "@/store";
import InvoiceGrandTotal from "./InvoiceGrandTotal";
const InvoiceBody = (invoice: Inputs) => {
    const { isDark } = useInvoiceStore()

    const dateFormatter = (data: string, days: number) => {
        const dailyMs = 24 * 60 * 60 * 1000
        const date = new Date(data)
        const milliseconds = date.getTime() + (days * dailyMs)

        const finalDate = new Date(milliseconds)
        const month = finalDate.getMonth()
        const day = finalDate.getDay()
        const year = finalDate.getFullYear();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return (
            <p className="font-bold">{day} {months[month]} {year}</p>
        )
    }

    return (
        <div
            className={`${isDark ? "text-white bg-deepBlue" : "text-palePurple bg-white"}
            p-8 rounded-lg mt-8 overflow-y-scroll noscroll`}>

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-baseline">
                    <div>
                        <h2 className={`${isDark ? "" : "text-black"} font-bold`}>
                            <span className="text-palePurple">#</span>
                            {invoice.id}
                        </h2>
                        <p >{invoice.projectDescription}</p>
                    </div>

                    <div>
                        <p>{invoice.drawerAddress}</p>
                        <p>{invoice.drawerCity}</p>
                        <p>{invoice.drawerPostCode}</p>
                        <p>{invoice.drawerCountry}</p>
                    </div>
                </div>

                <div className="md:flex justify-between items-baseline">
                    <div className="flex justify-between md:w-[50%]">
                        {/*DATE*/}
                        <div>
                            <div className="mb-4">
                                <small className="inline-block mb-2 text-sm text-palePurple">Invoice Date</small>
                                <h3 className={`${isDark ? "text-white" : "text-black"} font-bold`}>
                                    {dateFormatter(invoice.invoiceDate, 0)}
                                </h3>
                            </div>
                            <div>
                                <small className="inline-block mb-2 text-sm text-palePurple">Payment Due</small>
                                <h3 className={`${isDark ? "text-white" : "text-black"} font-bold`}>
                                    {dateFormatter(invoice.invoiceDate, parseInt(invoice.paymentTerms))}
                                </h3>
                            </div>
                        </div>

                        {/*Bill to section*/}
                        <div>
                            <small className="inline-block mb-2 text-sm text-palePurple">Bill To</small>
                            <p><strong>{invoice.clientName}</strong></p>
                            <p className="capitalize">{invoice.clientAddress}</p>
                            <p>{invoice.clientCity}</p>
                            <p>{invoice.clientPostCode}</p>
                            <p>{invoice.clientCountry}</p>
                        </div>
                    </div>

                    {/*Contact Section*/}
                    <div className="md:w-1/3">
                        <small className="inline-block mb-2 text-sm text-palePurple">Sent to</small>
                        <h3 className={`${isDark ? "text-white" : "text-black"} font-bold`}>
                            {invoice.clientEmail}
                        </h3>
                    </div>
                </div>

                {/*REVIEW SECTION */}
                <InvoiceGrandTotal services={invoice.services} />


            </div>

        </div>
    )
}

export default InvoiceBody;