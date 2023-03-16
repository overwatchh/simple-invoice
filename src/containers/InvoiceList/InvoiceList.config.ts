import { TOption } from "@/types/form";

export const sortOrders: TOption[] = [
  { name: "invoice_filter.sort_descending", value: "DESCENDING" },
  { name: "invoice_filter.sort_ascending", value: "ASCENDING" },
];

export const sortBy: TOption[] = [
  { name: "invoice_filter.sort_by_created_date", value: "CREATED_DATE" },
  { name: "invoice_filter.sort_by_invoice_date", value: "INVOICE_DATE" },
];
