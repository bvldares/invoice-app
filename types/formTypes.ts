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
  projectDescription: string;
  services?: Service[];
};

type Service = {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

export default Inputs;
