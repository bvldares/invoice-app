"use client"

import { IoIosArrowDown } from "react-icons/io"
import useInvoiceStore from "@/store"
import FilteringDropDown from "./FilteringDropDown"

const StatusFilter = () => {
    const { toggleDropDown, dropDownOpen } = useInvoiceStore()
    const { isDark } = useInvoiceStore()

    return (
        <div className="relative ml-auto mr-10">
            <h3
                className={`flex gap-2 items-center font-bold `}
                onMouseEnter={() => toggleDropDown()}
            >
                Filter
                <IoIosArrowDown size={18} className="text-intensePurple" />
            </h3>

            {dropDownOpen && <FilteringDropDown isDark={isDark} />}
        </div>
    )
}

export default StatusFilter