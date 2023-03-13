import { Invoice } from "@/types/invoice";
import { Descriptions } from "antd";

export type InvoiceItemProps = {
  invoice: Invoice;
};

const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
  return (
    <Descriptions
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      title={`Invoice ${invoice.invoiceNumber}`}
    >
      {invoice?.customer && (
        <Descriptions.Item label="Customer name:">
          {invoice.customer.firstName + invoice.customer.lastName}
        </Descriptions.Item>
      )}
      <Descriptions.Item label="Created date">
        {invoice.createdAt}
      </Descriptions.Item>
      <Descriptions.Item label="Invoice date">
        {invoice.invoiceDate}
      </Descriptions.Item>
      <Descriptions.Item label="Due date">{invoice.dueDate}</Descriptions.Item>
      <Descriptions.Item label="Status">
        {invoice.status[0].key}:{invoice.status[0].value}
      </Descriptions.Item>
      <Descriptions.Item label="Description">
        {invoice.description}
      </Descriptions.Item>
      <Descriptions.Item label="Tolta amount">
        {invoice.totalAmount}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default InvoiceItem;
