import useInvoiceStore from "@/store"

type filterButtonType = {
    icon: any
    label: string
    isDark: boolean
}

const FilterButton: React.FC<filterButtonType> = ({ icon, label, isDark }) => {
    const { toggleDropDown, setFilter } = useInvoiceStore()

    const handleClick = () => {
        setFilter(label)
        toggleDropDown()
    }

    return (
        <button
            onClick={handleClick}
            className={`flex hover:shadow-sm hover:border hover:border-white box-content rounded-lg py-2 pl-2 pr-4 items-center gap-2  
                font-bold capitalize ${isDark ? "text-white" : "text-black "} w-min`}
        >
            {icon}
            {label}
        </button>
    )
}


export default FilterButton