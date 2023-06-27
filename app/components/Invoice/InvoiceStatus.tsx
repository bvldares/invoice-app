"use client"
type props = {
    isPaid: boolean
}

const InvoiceStatus: React.FC<props> = ({ isPaid }) => {
    return (
        <div className={`flex items-center gap-2 bg-opacity-40 w-fit ${!isPaid ? "bg-[#FF8F00] text-[#FF8F00]" : "bg-[#33D69F] text-[#33D69F]"} px-[30px] py-3 rounded-lg`}>
            <span className={`w-2 h-2 rounded-full ${!isPaid ? "bg-[#FF8F00]" : "bg-[#33D69F]"} text-transparent`}></span>
            <p className="text-[15px] mt-[2px] font-bold">{isPaid ? "Paid" : "Pending"}</p>
        </div>
    )
}

export default InvoiceStatus