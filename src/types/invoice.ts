import { ResponseStatus } from "@/types/api";
export type Invoice = {
  invoiceId: string;
  invoiceNumber: string;
  type: string;
  currency: string;
  invoiceDate: string;
  createdAt: string;
  dueDate: string;
  status: {
    key: string;
    value: boolean;
  }[];
  subStatus: [];
  numberOfDocuments: number;
  totalTax: number;
  totalAmount: number;
  balanceAmount: number;
  description: string;
  totalPaid: string;
  invoiceSubTotal: string;
  customFields: {
    key: string;
    value: string;
  }[];
  totalDiscount: number;
  extensions: [];
  version: string;
  customer: CustomerInfo;
  merchant: {
    id: string;
  };
  purchaseOrderMatched: boolean;
  isRegulated: boolean;
  isInsured: boolean;
};

export type Paginate = {
  totalRecords: number;
  pageSize: number;
  pageNumber: number;
};

export type InvoiceData = {
  data: Invoice[];
  paging: Paginate;
  status: ResponseStatus;
};
export type InvoiceFilter = {
  pageNum: number;
  pageSize: number;
  dateType: "INVOICE_DATE";
  sortBy: "CREATED_DATE";
  ordering: "ASCENDING" | "DESCENDING";
  fromDate: string;
  toDate: string;
  keyword: string;
};

//type definition for create invoice

//BankInfo
export type BankInfo = {
  bankId?: string;
  sortCode?: string;
  accountNumber?: string;
  accountName?: string;
};
//CustomerInfo
export type Address = {
  premise: string;
  countryCode: string;
  postcode: string;
  county: string;
  city: string;
};

export type CustomerInfo = {
  firstName: string;
  lastName: string;
  contact: {
    email: string;
    mobileNumber: string;
  };
  addresses: Address[];
};

export type Document = {
  documentId: string;
  documentName: string;
  documentUrl: string;
};

export type CustomField = {
  key: string;
  value: string;
};

export type Extension = {
  addDeduct: string;
  value: number;
  type: string;
  name: string;
};

export type Product = {
  itemReference: string;
  description: string;
  quantity: number;
  rate: number;
  itemName: string;
  itemUOM: string;
  customFields: CustomField[];
  extensions: Extension[];
};

export type InvoicePayload = {
  invoices: [
    {
      bankAccount: BankInfo;
      customer: CustomerInfo;
      documents: Document[];
      invoiceReference: string;
      invoiceNumber: string;
      currency: string;
      invoiceDate: string;
      dueDate: string;
      description: string;
      customFields: CustomField[];
      extensions: Extension[];
      items: Product[];
    }
  ];
};

export type InvoiceCreateResponse = {
  data: [
    {
      bankAccount: BankInfo;
      currency: string;
      currencySymbol: string;
      customer: CustomerInfo;
      description: string;
      dueDate: string;
      extensions: Extension[];
      invoiceDate: string;
      invoiceId: string;
      invoiceNumber: string;
      invoiceSubTotal: number;
      totalDiscount: number;
      totalTax: number;
      totalAmount: number;
      totalPaid: number;
      balanceAmount: number;
      numberOfDocuments: number;
      documents: Document[];
      items: [
        {
          itemReference: string;
          description: string;
          quantity: number;
          rate: number;
          amount: number;
          orderIndex: number;
          itemName: number;
          itemUOM: number;
          customFields: {
            key: string;
            value: string;
          }[];
          extensions: {
            id: string;
            addDeduct: "ADD" | "DEDUCT";
            name: string;
            total: number;
            type: "FIXED_VALUE" | "PERCENTAGE";
            value: number;
          }[];
          netAmount: number;
        }
      ];
      merchant: {
        id: string;
        addresses: Address[];
      };
      payments: [];
      referenceNo: string;
      invoiceReference: string;
      status: {
        key: string;
        value: boolean;
      }[];
      subStatus: [];
      type: string;
      version: string;
      invoiceGrossTotal: number;
      customFields: CustomField[];
    }
  ];
};
