

type Inputs = {
    id: number
    created_at: string
    drawerAddress: string;
    drawerCity: string;
    drawerPostCode: string;
    drawerCountry: string;
    clientName: string;
    clientEmail: string;
    clientAddress: string;
    clientCity: string;
    clientPostCode: string;
    clientCountry: string;
    invoiceDate: string;
    paymentTerms: string;
    isPaid: boolean
    projectDescription: string;
    services?: Service[];
    user_id: string
    deliveryStatus: boolean

};

type Service = {
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
};

const FetchedInvoice: React.FC<Inputs> = (item) => {
    return (
        <div>
            <h3>{item.id}</h3>
        </div>
    )
}

export default FetchedInvoice