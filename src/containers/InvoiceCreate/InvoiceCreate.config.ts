import { InvoicePayload } from "@/types/invoice";

export const invoice: InvoicePayload = {
  invoices: [
    {
      bankAccount: {
        bankId: "",
        sortCode: "09-01-01",
        accountNumber: "12345678",
        accountName: "John Terry",
      },
      customer: {
        firstName: "Nguyen",
        lastName: "Dung 2",
        contact: {
          email: "nguyendung2@101digital.io",
          mobileNumber: "+6597594971",
        },
        addresses: [
          {
            premise: "CT11",
            countryCode: "VN",
            postcode: "1000",
            county: "hoangmai",
            city: "hanoi",
          },
        ],
      },
      documents: [
        {
          documentId: "96ea7d60-89ed-4c3b-811c-d2c61f5feab2",
          documentName: "Bill",
          documentUrl: "http://url.com/#123",
        },
      ],
      invoiceReference: "#123456",
      invoiceNumber: "INV20230311",
      currency: "GBP",
      invoiceDate: "2021-05-27",
      dueDate: "2021-06-04",
      description:
        "Invoice is issued to Akila Jayasinghe and created by Tony 2023-03-11",
      customFields: [
        {
          key: "invoiceCustomField",
          value: "value",
        },
      ],
      extensions: [],
      items: [
        {
          itemReference: "itemRef",
          description: "Honda RC150",
          quantity: 1,
          rate: 1000,
          itemName: "Honda Motor",
          itemUOM: "KG",
          customFields: [],
          extensions: [],
        },
      ],
    },
  ],
};
