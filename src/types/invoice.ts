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
  customer: {
    id: string;
    addresses: [];
  };
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
