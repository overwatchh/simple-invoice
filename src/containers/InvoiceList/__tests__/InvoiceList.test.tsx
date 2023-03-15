import { renderWithProviders } from "@/utils/test-utils";
import InvoiceList from "@/containers/InvoiceList";
import userEvent from "@testing-library/user-event";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe("Invoice list", () => {
  it("Render successfully", () => {
    renderWithProviders(<InvoiceList />);

    // const searchButton = screen.getByRole("button", {
    //   name: "Search",
    // });
    // userEvent.click(searchButton);
  });
});
