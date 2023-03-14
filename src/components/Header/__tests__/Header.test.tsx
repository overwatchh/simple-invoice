import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/utils/test-utils";
import Header from "../Header";

describe("Header", () => {
  it("Language option: English and Vietnamese is render correcly", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("English")).toBeVisible();
    expect(screen.getByText("Vietnamese")).toBeVisible();
  });

  it("101 digital logo is displayed", () => {
    renderWithProviders(<Header />);
    const image = screen.getByAltText("101 digital logo");
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });
});
