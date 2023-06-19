"use client"
import useInvoiceStore from "@/store"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
const DarkModeToggler = () => {
    const { isDark, toggleDark } = useInvoiceStore()

    return (
        <div
            onClick={() => toggleDark()}
            className="text-lightPurple p-logo ml-auto lg:ml-0 lg:mt-auto text-[20px]">
            {!isDark ? <BsFillMoonFill /> : <BsFillSunFill />}
        </div>
    )
}

export default DarkModeToggler