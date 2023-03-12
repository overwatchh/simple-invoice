import { useCreateInvoiceMutation } from "@/services/invoice";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const InvoiceCreateResetBtn = () => {
  const { reset } = useFormContext();
  const [createInvoice, { isSuccess }] = useCreateInvoiceMutation();
  const handleResetForm = () => {
    reset();
  };
  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);
  return <div onClick={handleResetForm}>reset</div>;
};

export default InvoiceCreateResetBtn;
