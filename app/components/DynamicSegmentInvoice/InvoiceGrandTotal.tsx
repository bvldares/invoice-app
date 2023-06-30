import useInvoiceStore from "@/store"
import priceFormatter from "@/util/priceFormatter"
import { nanoid } from "nanoid"
import React from "react"

const InvoiceGrandTotal: React.FC<any> = ({ services }) => {
    const parsedServices = services?.map((item: any) => JSON.parse(item))

    const serviceElements = parsedServices?.map((item: any) => {

        return (
            <React.Fragment key={nanoid()}>
                <p className="capitalize justify-self-start font-bold">{item?.name}</p>
                <p className="text-palePurple">{item?.quantity}</p>
                <p className="text-palePurple">{priceFormatter.format(item?.price)}</p>
                <p>{priceFormatter.format(item.price * item.quantity)}</p>
            </React.Fragment>
        )
    })

    const grandTotal = parsedServices?.reduce((acc: number, current: any) => {
        acc += current.price * current.quantity
        return acc
    }, 0)

    const { isDark } = useInvoiceStore()
    return (
        <div className={`${isDark ? "text-white bg-darkBlue" : "text-black bg-gray-100"} rounded-t-lg `}>
            <div className={`${isDark ? "text-white" : "text-black"} p-8 grid grid-cols-4  gap-y-4 gap-x-3 justify-items-end `}>
                <p className="col-start-1 justify-self-start  row-start-1 text-palePurple">Item Name</p>
                <p className="col-start-2 row-start-1 text-palePurple">QTY.</p>
                <p className="col-start-3 row-start-1 text-palePurple">Price</p>
                <p className="col-start-4 row-start-1 text-palePurple">Total</p>
                {serviceElements}
            </div>
            <div className={`flex items-center justify-between ${isDark ? "bg-black text-white" : "bg-deepBlue text-white"} rounded-b-lg py-6 px-8`}>
                <h3>Amount Due</h3>
                <strong className="text-2xl">{priceFormatter.format(grandTotal)}</strong>
            </div>
        </div>
    )
}

export default InvoiceGrandTotal