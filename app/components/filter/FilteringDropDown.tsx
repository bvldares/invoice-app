import FilterButton from "./FilterButton"
import { MdPendingActions } from "react-icons/md"
import { RiDraftLine } from "react-icons/ri"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiCircle } from "react-icons/bi"
import useInvoiceStore from "@/store"
type FilteringProps = {
    isDark: boolean
}


const FilteringDropDown: React.FC<FilteringProps> = ({ isDark }) => {
    const { toggleDropDown } = useInvoiceStore()
    return (
        <div className={` 
            rounded-lg p-6 shadow-md
            absolute top-10 right-0
            ${isDark ? "text-white bg-deepBlue" : " bg-white  text-black"}
            `}
            onMouseLeave={() => toggleDropDown()}
        >
            <FilterButton isDark={isDark} label="All" icon={<BiCircle size={18} />} />
            <FilterButton isDark={isDark} label="Paid" icon={<AiOutlineCheckCircle size={18} />} />
            <FilterButton isDark={isDark} label="Draft" icon={<RiDraftLine size={18} />} />
            <FilterButton isDark={isDark} label="Pending" icon={<MdPendingActions size={18} />} />
        </div>
    )
}

export default FilteringDropDown