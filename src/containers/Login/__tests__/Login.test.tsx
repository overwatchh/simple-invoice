// import { renderWithProviders } from "../../../utils/test-utils";
import { render } from "@testing-library/react";
import LoginContainer from "../Login";

const setup = () => render(<LoginContainer />);

describe("Login container", () => {
  it("Display all title correctly", () => {
    setup();
  });
});
