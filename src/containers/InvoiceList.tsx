import { useState } from "react";
import { DateRangePicker, Form, Input } from "@/components/Form";
import { useGetInvoiceQuery } from "@/services/invoice";
import { Button, Pagination, PaginationProps, Spin } from "antd";
import dayjs from "dayjs";
import { FieldValues } from "react-hook-form";
import { InvoiceFilter } from "@/types/invoice";
import { DATE_FORMAT } from "@/constants";

const defaultFilter: InvoiceFilter = {
  pageNum: 1,
  pageSize: 10,
  keyword: "",
  ordering: "DESCENDING",
  dateType: "INVOICE_DATE",
  sortBy: "CREATED_DATE",
  fromDate: dayjs().subtract(6, "month").format(DATE_FORMAT),
  toDate: dayjs().format(DATE_FORMAT),
};

const InvoiceList = () => {
  const [filter, setFilter] = useState<InvoiceFilter>(defaultFilter);
  const { data, isFetching } = useGetInvoiceQuery(filter, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const handleFilterInvoice = (fieldValues: FieldValues) => {
    const newFilter: Pick<InvoiceFilter, "keyword" | "fromDate" | "toDate"> = {
      keyword: fieldValues.keyword,
      fromDate: dayjs(fieldValues.dateRange[0]).format(DATE_FORMAT),
      toDate: dayjs(fieldValues.dateRange[1]).format(DATE_FORMAT),
    };
    console.log("newFilter", newFilter);
    setFilter({ ...filter, ...newFilter });
  };
  const handlePaginationChange: PaginationProps["onChange"] = (
    pageNumber,
    pageSize
  ) => {
    setFilter({ ...filter, pageNum: pageNumber, pageSize });
  };
  return (
    <div>
      <div className="InvoiceFilter">
        <Form name="filterInvoiceForm" onSubmit={handleFilterInvoice}>
          <div>Search:</div>
          <Input required={false} type="text" name="keyword" />
          <div>Date:</div>
          <DateRangePicker
            defaultValue={[dayjs().subtract(1, "month"), dayjs()]}
            name="dateRange"
          />
          <Button disabled={isFetching} type="primary" htmlType="submit">
            {isFetching ? <Spin /> : <span>Search</span>}
          </Button>
        </Form>
      </div>
      {data && <div>Found: {data?.paging.totalRecords}</div>}
      <ul className="InvoiceList">
        {data?.data.map((invoice) => (
          <li key={invoice.invoiceId}>
            <div>Created date: {invoice.createdAt}</div>
            <div>Invoice date: {invoice.invoiceDate}</div>
            <div>Due date: {invoice.dueDate}</div>
            <div>
              Status: {invoice.status[0].key}:{invoice.status[0].value}
            </div>
            <div>Description: {invoice.description}</div>
            <div>Total: {invoice.totalAmount}</div>
          </li>
        ))}
      </ul>
      {data && data.paging.totalRecords > 0 && (
        <div className="InvoicePagination">
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            // current={currentPage}
            pageSize={data?.paging.pageSize}
            total={data?.paging.totalRecords}
            onChange={handlePaginationChange}
          />
        </div>
      )}
    </div>
  );
};

export default InvoiceList;
