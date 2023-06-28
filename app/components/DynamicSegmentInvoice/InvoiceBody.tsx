import Inputs from "@/types/formTypes";
import useInvoiceStore from "@/store";
const InvoiceBody = (invoice: Inputs) => {
    const { isDark } = useInvoiceStore()

    return (
        <div
            className={`${isDark ? "text-white bg-deepBlue" : "text-palePurple bg-white"}
            p-8 rounded-lg mt-8`}>

            <div>
                <div>
                    <h2 className="font-bold">
                        <span className="text-palePurple">#</span>
                        {invoice.id}
                    </h2>
                    <p>{invoice.projectDescription}</p>
                </div>

                <div>
                    <p>{invoice.drawerAddress}</p>
                    <p>{invoice.drawerCity}</p>
                    <p>{invoice.drawerPostCode}</p>
                    <p>{invoice.drawerCountry}</p>
                </div>

                {/*DATE*/}
                <div>
                    <div>
                        <small>Invoice Date</small>
                        <h3>CREATED AT</h3>
                    </div>
                    <div>
                        <small>Payment Due</small>
                        <h3>CREATED AT</h3>
                    </div>
                </div>

                {/*Bill to section*/}
                <div>
                    <small>Bill To</small>
                    <p className="font-bold capitalize">{invoice.clientAddress}</p>
                    <p>{invoice.clientCity}</p>
                    <p>{invoice.clientPostCode}</p>
                    <p>{invoice.clientCountry}</p>
                </div>

                {/*Contact Section*/}
                <div>
                    <small>Sent to</small>
                    <h3>{invoice.clientEmail}</h3>
                </div>

                {/*REVIEW SECTION */}
                <div className={`${isDark ? "bg-[#252945] text-white" : "text-black bg-transparent"}`}>
                    <div></div>
                    <div></div>
                </div>


            </div>

        </div>
    )
}

export default InvoiceBody;