import { fireEvent, screen, act } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/utils/test-utils";
import LoginContainer from "../Login";
import { useLoginMutation } from "@/services/auth";
import { useLazyGetUserProfileQuery } from "@/services/profile";

jest.mock("@/services/auth", () => ({
  ...jest.requireActual("@/services/auth"),
  useLoginMutation: jest.fn(),
}));

jest.mock("@/services/profile", () => ({
  ...jest.requireActual("@/services/profile"),
  useLazyGetUserProfileQuery: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const setup = () => renderWithProviders(<LoginContainer />);

describe("Login container", () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    // (useLoginMutation as jest.Mock).mockReset();
    // (useLazyGetUserProfileQuery as jest.Mock).mockReset();
    jest.resetAllMocks();
  });
  it("Display correctly", () => {
    // Mock the response of the useLoginMutation hook
    const loginMutationMock = jest.fn();
    (useLoginMutation as jest.Mock).mockReturnValue([
      loginMutationMock,
      { data: [], isSuccess: true, isLoading: false },
    ]);
    const getUserProfile = jest.fn();
    (useLazyGetUserProfileQuery as jest.Mock).mockImplementation(() => [
      getUserProfile,
      { data: { data: { memberships: ["profile"] } } },
    ]);
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    setup();
    //101 digital logo
    const image = screen.getByAltText("101digital logo");
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
    //welcome text
    expect(screen.getByText("Welcome back!")).toBeVisible();
    //Username and password label and input
    //Username
    const userNameInput = screen.getByLabelText("Username");
    expect(userNameInput).toBeInTheDocument();
    expect(userNameInput).toBeVisible();
    //Password
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toBeVisible();
  });

  it("Fill in username and password and press login button -- login success", () => {
    // Mock the response of the useLoginMutation hook
    const loginMutationMock = jest.fn();
    (useLoginMutation as jest.Mock).mockImplementation(() => [
      loginMutationMock,
      { data: [], isSuccess: true, isLoading: false },
    ]);
    const getUserProfile = jest.fn();
    (useLazyGetUserProfileQuery as jest.Mock).mockImplementation(() => [
      getUserProfile,
      { data: { data: { memberships: ["profile"] } } },
    ]);
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    setup();

    // Username
    const userName = screen.getByLabelText("Username");
    userEvent.click(userName);
    userEvent.type(userName, "username");

    expect(userName).toHaveValue("username");

    //password
    const password = screen.getByLabelText("Password");
    userEvent.click(password);
    userEvent.type(password, "password");
    expect(password).toHaveValue("password");

    //click login button
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).not.toBeDisabled();
    fireEvent.click(loginButton);
    //navigate to "/"
    // expect(useNavigate).toHaveBeenCalledWith("/my-url");
    // expect(loginMutationMock).toHaveBeenCalledWith({
    //   username: "username",
    //   password: "password",
    // });
  });

  it("Fill in username and password and press login button -- isloading", async () => {
    // Mock the response of the useLoginMutation hook
    const loginMutationMock = jest.fn();
    (useLoginMutation as jest.Mock).mockReturnValue([
      loginMutationMock,
      { data: ["token"], isSuccess: undefined, isLoading: true },
    ]);
    const getUserProfile = jest.fn();
    (useLazyGetUserProfileQuery as jest.Mock).mockImplementation(() => [
      getUserProfile,
      { data: { data: { memberships: ["profile"] } } },
    ]);
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    await act(() => {
      setup();
    });
  });
});
