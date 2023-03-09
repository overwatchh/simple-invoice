import BaseLayout from "@/layouts/BaseLayout";
import InvoiceCreateContainer from "@/containers/InvoiceCreate";

const InvoiceCreate = () => {
  console.log("Invoice create");
  return (
    <BaseLayout>
      <InvoiceCreateContainer />
    </BaseLayout>
  );
};

export default InvoiceCreate;
