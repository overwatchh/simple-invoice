import dayjs from "dayjs";
describe("Create invoice", () => {
  beforeAll(async () => {
    //login
    //Login with correct credentials
    await page.goto("http://localhost:3000/login");
    await expect(page).toFillForm('form[name="loginForm"]', {
      userName: "dung+octopus4@101digital.io",
      password: "Abc@123456",
    });
    await expect(page).toClick("button", { text: "Login" });
    //Logged in successfully text is displayed
    await expect(page).toMatchTextContent("Logged in successfully");
    await page.goto("http://localhost:3000/invoice_create");
  });

  it("Should create invoice successfully", async () => {
    //invoice payload
    const invoice = {
      firstName: "",
      lastName: "Nguyen",
      mobileNumber: "+123456789",
      email: "teste2e@gmail.com",
      productName: "Test e2e product name",
      description: `Nguyen Tuan e2e test at ${dayjs().format(
        "YYYY-MM-DD HH:MM"
      )}`,
      price: "1000",
      quantity: "1",
    };
    await expect(page).toFillForm('form[name="createInvoiceForm"]', invoice);
    await expect(page).toClick("button", { text: "Create invoice" });

    //Create successfully message
    await expect(page).toMatchTextContent("Create invoice successfully");
  });
});
