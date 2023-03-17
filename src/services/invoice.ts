// Need to use the React-specific entry point to import createApi
import { Auth } from "@/types/auth";
import {
  InvoiceCreateResponse,
  InvoiceData,
  InvoiceFilter,
  InvoicePayload,
} from "@/types/invoice";
import { Membership } from "@/types/profile";
import { getItem } from "@/utils/localStorage";
import { ELocalItem } from "@/utils/localStorage/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const invoiceApi = createApi({
  reducerPath: "invoice",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/invoice-service`,
    prepareHeaders: (headers) => {
      const orgToken = getItem<Membership>(ELocalItem.Membership)?.token;
      const accessToken = getItem<Auth>(ELocalItem.Auth)?.access_token;
      if (orgToken && accessToken) {
        headers.set("org-token", orgToken);
        headers.set("Authorization", `Bearer ${accessToken}`);
        headers.set("Access-Control-Allow-Origin", "*");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getInvoice: builder.query<InvoiceData, InvoiceFilter>({
      query: (filter) => ({
        url: "/1.0.0/invoices",
        method: "get",
        params: filter,
      }),
    }),
    createInvoice: builder.mutation<InvoiceCreateResponse, InvoicePayload>({
      query: (invoicePayload) => ({
        url: "/2.0.0/invoices",
        method: "post",
        headers: {
          "Operation-Mode": "SYNC",
        },
        body: invoicePayload,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetInvoiceQuery, useCreateInvoiceMutation } = invoiceApi;
