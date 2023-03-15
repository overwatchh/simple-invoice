import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/utils/test-utils";
import InvoiceCreate from "@/containers/InvoiceCreate";
import userEvent from "@testing-library/user-event";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe("Create invoice", () => {
  it("Render successfully", () => {
    renderWithProviders(<InvoiceCreate />);

    const createInvoiceButton = screen.getByRole("button", {
      name: "Create invoice",
    });
    userEvent.click(createInvoiceButton);
  });
});
