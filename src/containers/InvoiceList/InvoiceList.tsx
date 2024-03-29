import "./InvoiceList.scss";
import { useState } from "react";
import { DateRangePicker, Form, Input, RadioGroup } from "@/components/Form";
import { useGetInvoiceQuery } from "@/services/invoice";
import {
  Row,
  Col,
  Button,
  Pagination,
  PaginationProps,
  Spin,
  Space,
  Badge,
} from "antd";
import InvoiceItem from "./InvoiceItem";
import Bubble from "@/components/Bubble";
import dayjs from "dayjs";
import { FieldValues } from "react-hook-form";
import { InvoiceFilter } from "@/types/invoice";
import { DATE_FORMAT } from "@/constants";
import { useTranslation } from "react-i18next";
import { sortBy, sortOrders } from "./InvoiceList.config";

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
  const { t } = useTranslation();
  const [filter, setFilter] = useState<InvoiceFilter>(defaultFilter);
  const { data, isFetching } = useGetInvoiceQuery(filter, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  const handleFilterInvoice = (fieldValues: FieldValues) => {
    const newFilter: Pick<
      InvoiceFilter,
      "keyword" | "fromDate" | "toDate" | "sortBy" | "ordering"
    > = {
      keyword: fieldValues.keyword,
      fromDate: dayjs(fieldValues.dateRange[0]).format(DATE_FORMAT),
      toDate: dayjs(fieldValues.dateRange[1]).format(DATE_FORMAT),
      sortBy: fieldValues.sortBy,
      ordering: fieldValues.sortOrder,
    };
    setFilter({ ...filter, ...newFilter });
  };
  const handlePaginationChange: PaginationProps["onChange"] = (
    pageNumber,
    pageSize
  ) => {
    setFilter({ ...filter, pageNum: pageNumber, pageSize });
  };
  return (
    <div className="InvoiceList">
      <div className="InvoiceList__filter">
        <Form name="filterInvoiceForm" onSubmit={handleFilterInvoice}>
          <Row gutter={[16, 16]}>
            <Col md={12}>
              <Space direction="vertical">
                <label htmlFor="keyword">
                  {t("invoice_filter.keyword_title")}
                </label>
                <Input
                  id="keyword"
                  required={false}
                  type="text"
                  name="keyword"
                />
              </Space>
            </Col>
            <Col md={12}>
              <Space direction="vertical">
                <label htmlFor="dateRange">
                  {t("invoice_filter.date_title")}
                </label>
                <DateRangePicker
                  id="dateRange"
                  defaultValue={[dayjs().subtract(1, "month"), dayjs()]}
                  name="dateRange"
                />
              </Space>
            </Col>
            <Col md={12}>
              <Space direction="vertical">
                <label htmlFor="sortBy">{t("invoice_filter.sort_by")}</label>
                <RadioGroup name="sortBy" id="sortBy" options={sortBy} />
              </Space>
            </Col>
            <Col md={12}>
              <Space direction="vertical">
                <label htmlFor="sortOder">
                  {t("invoice_filter.sort_order")}
                </label>
                <RadioGroup
                  name="sortOrder"
                  id="sortOrder"
                  options={sortOrders}
                />
              </Space>
            </Col>
          </Row>

          <Button
            className="InvoiceList__submitFilterBtn"
            disabled={isFetching}
            type="primary"
            htmlType="submit"
          >
            {isFetching ? (
              <Spin />
            ) : (
              <span>{t("invoice_filter.submit_btn")}</span>
            )}
          </Button>
        </Form>
      </div>
      {data && (
        <div className="InvoiceList__numberRecords">
          <Badge.Ribbon
            color="red"
            placement="start"
            text={`${t("invoice_list.found")} ${data?.paging.totalRecords} ${t(
              "invoice_list.invoices"
            )}`}
          ></Badge.Ribbon>
        </div>
      )}
      <div className="InvoiceList__results">
        <Row gutter={[16, 16]}>
          {data?.data.map((invoice) => (
            <Col key={invoice.invoiceId} md={24}>
              <Bubble variant="info">
                <InvoiceItem invoice={invoice} />
              </Bubble>
            </Col>
          ))}
        </Row>
      </div>
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
