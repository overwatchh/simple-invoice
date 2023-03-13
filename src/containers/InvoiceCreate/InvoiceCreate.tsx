import "./InvoiceCreate.scss";
import { Form, Input, InputNumber } from "@/components/Form";
import { useCreateInvoiceMutation } from "@/services/invoice";
import { FieldValues } from "react-hook-form";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { DATE_FORMAT } from "@/constants";
import { InvoicePayload } from "@/types/invoice";
import { Row, Col, Space, Button, Spin } from "antd";

const InvoiceCreate = () => {
  const [createInvoice, { isLoading }] = useCreateInvoiceMutation();
  const invoiceDate = dayjs(
    faker.date.between("2023/01/01", "2023/12/31")
  ).format(DATE_FORMAT);
  const invoiceDueDate = dayjs(
    faker.date.between("2023/01/01", "2024/12/31")
  ).format(DATE_FORMAT);
  const handleCreateInvoice = (fieldValues: FieldValues) => {
    const invoice: InvoicePayload = {
      invoices: [
        {
          bankAccount: {},
          customer: {
            firstName: fieldValues.firstName,
            lastName: fieldValues.lastName,
            contact: {
              email: fieldValues.email,
              mobileNumber: fieldValues.mobileNumber,
            },
            addresses: [],
          },
          documents: [],
          invoiceReference: "#123456",
          invoiceNumber: `INV${faker.datatype.number({
            min: 1000,
            max: 100000,
          })}`,
          currency: "USD",
          invoiceDate,
          dueDate: invoiceDueDate,
          description: fieldValues.description,
          customFields: [],
          extensions: [],
          items: [
            {
              itemReference: `itemRef${faker.datatype.number({
                min: 1000,
                max: 100000,
              })}`,
              description: fieldValues.description,
              quantity: fieldValues.quantity,
              rate: fieldValues.price,
              itemName: fieldValues.productName,
              itemUOM: "KG",
              customFields: [],
              extensions: [],
            },
          ],
        },
      ],
    };

    createInvoice(invoice);
  };

  return (
    <div className="CreateInvoiceForm">
      <Form name="createInvoiceForm" onSubmit={handleCreateInvoice}>
        <div className="CreateInvoiceForm__customerInfo">
          <div className="CreateInvoiceForm__sectionTitle">Customer info</div>
          <Row className="CreateInvoiceForm__row" gutter={[16, 16]}>
            <Col md={12}>
              <Space direction="vertical">
                <div>First name:</div>
                <Input
                  defaultValue={faker.name.firstName()}
                  name="firstName"
                  type="text"
                />
              </Space>
            </Col>
            <Col md={12}>
              <Space direction="vertical">
                <div>Last name:</div>
                <Input
                  defaultValue={faker.name.lastName()}
                  name="lastName"
                  type="text"
                />
              </Space>
            </Col>
          </Row>
          <Row className="CreateInvoiceForm__row" gutter={[16, 16]}>
            <Col md={12}>
              <Space direction="vertical">
                <div>Email:</div>
                <Input
                  defaultValue={faker.internet.email()}
                  type="email"
                  name="email"
                />
              </Space>
            </Col>
            <Col md={12}>
              <Space direction="vertical">
                <div>Mobile number:</div>
                <Input
                  defaultValue={faker.phone.number("+1#########")}
                  type="text"
                  name="mobileNumber"
                />
              </Space>
            </Col>
          </Row>
        </div>
        <div className="CreateInvoiceForm__invoiceInfo">
          <div className="CreateInvoiceForm__sectionTitle">Invoice Info</div>
          <Row className="CreateInvoiceForm__row" gutter={[16, 16]}>
            <Col md={12}>
              <Space>
                <div>Invoice Date: {invoiceDate}</div>
              </Space>
            </Col>
            <Col md={12}>
              <Space>
                <div>Due date: {invoiceDueDate}</div>
              </Space>
            </Col>
          </Row>
          <Row className="CreateInvoiceForm__row" gutter={[16, 16]}>
            <Col md={12}>
              <Space direction="vertical">
                <div>Product name:</div>
                <Input
                  defaultValue={faker.commerce.productName()}
                  name="productName"
                  type="text"
                />
              </Space>
            </Col>
            <Col md={12}>
              <Space direction="vertical">
                <div>Description:</div>
                <Input
                  defaultValue={faker.commerce.productAdjective()}
                  name="description"
                  type="text"
                />
              </Space>
            </Col>
          </Row>
          <Row className="CreateInvoiceForm__row" gutter={[16, 16]}>
            <Col md={12}>
              <Space direction="vertical">
                <div>Price:</div>
                <InputNumber
                  defaultValue={faker.datatype.number({
                    min: 50,
                    max: 100,
                  })}
                  name="price"
                />
              </Space>
            </Col>
            <Col md={12}>
              <Space direction="vertical">
                <div>Quantity:</div>
                <InputNumber
                  defaultValue={faker.datatype.number({ min: 1, max: 10 })}
                  name="quantity"
                />
              </Space>
            </Col>
          </Row>
        </div>

        <Button disabled={isLoading} htmlType="submit" type="primary">
          {isLoading ? <Spin /> : <span>Create invoice</span>}
        </Button>
      </Form>
    </div>
  );
};

export default InvoiceCreate;
