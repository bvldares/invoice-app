"use client"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import FetchedInvoice from "@/types/FetchedInvoiceType"
import useInvoiceStore from "@/store"
import { motion } from "framer-motion"
import formattedPrice from "@/util/priceFormatter"
import Link from "next/link"
import InvoiceStatus from "./InvoiceStatus"
const FetchedInvoice: React.FC<FetchedInvoice> = (item) => {

    const { isDark } = useInvoiceStore()
    const date = new Date(item.invoiceDate)
    const month = date.getMonth()
    const day = date.getDay()
    const year = date.getFullYear();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const servicesElements = item.services?.map((service: any) => JSON.parse(service))
    const totalPrice = servicesElements?.reduce((acc, current) => {
        acc += parseInt(current.price) * parseInt(current.quantity)
        return acc
    }, 0)

    return (
        <Link href={`/${item.id}`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`px-6 py-[30px] cursor-pointer rounded-xl flex items-center  justify-between gap-3
            ${isDark ? "text-white bg-darkBlue" : "text-black shadow-md"}`}
            >
                <p className="font-bold"><span className="text-palePurple">#</span>{item.id}</p>
                <p className="font-semibold">Due {day} {months[month]} {year}</p>
                <p className="font-semibold">{item.clientName}</p>
                <h3 className="font-bold">{formattedPrice.format(totalPrice)}</h3>
                <div className="flex items-center gap-5">
                    <InvoiceStatus isPaid={item.isPaid} />
                    <MdOutlineArrowForwardIos className="text-intensePurple" />
                </div>


            </motion.div>
        </Link>
    )
}

export default FetchedInvoice