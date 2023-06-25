type Inputs = {
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
  isPaid: boolean;
  projectDescription: string;
  services?: Service[];
  user_id: string;
  deliveryStatus: boolean;
};

type Service = {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

export default Inputs;
