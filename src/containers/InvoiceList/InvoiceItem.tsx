import { Invoice } from "@/types/invoice";
import { Descriptions } from "antd";
import { useTranslation } from "react-i18next";

export type InvoiceItemProps = {
  invoice: Invoice;
};

const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
  const { t } = useTranslation();
  return (
    <Descriptions
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      title={`${t("invoice_info.invoice")} ${invoice.invoiceNumber}`}
    >
      {invoice?.customer && (
        <Descriptions.Item label={t("invoice_info.customer_name")}>
          {invoice.customer.firstName + invoice.customer.lastName}
        </Descriptions.Item>
      )}
      <Descriptions.Item label={t("invoice_info.created_date")}>
        {invoice.createdAt}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice_info.invoice_date")}>
        {invoice.invoiceDate}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice_info.due_date")}>
        {invoice.dueDate}
      </Descriptions.Item>
      <Descriptions.Item label="Status">
        {invoice.status[0].key}:{invoice.status[0].value}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice_info.description")}>
        {invoice.description}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice_info.total_amount")}>
        {invoice.totalAmount}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default InvoiceItem;
