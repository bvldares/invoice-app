import Image from "next/image"
import emptyIllustration from "@/public/illustration-empty.svg"
import useInvoiceStore from "@/store"
const EmptyList = () => {
    const { isDark } = useInvoiceStore()

    return (
        <div className="m-auto flex flex-col text-center gap-4">
            <Image width={300} height={300} alt='illustration' src={emptyIllustration} />
            <h3 className={`text-2xl ${isDark ? "text-white" : "text-black"}`}>There are no invoice </h3>
        </div >
    )
}

export default EmptyList