import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme";
import SignInComponent from "../../src/modules/signIn";
import Router from "next/router";

jest.mock("next/router");

describe("SignInComponent", () => {
  beforeEach(() => {
    routerSpy = jest.spyOn(Router, "push");
  });
  it("renders SiginComponent content", () => {
    render(
      <ThemeProvider theme={theme}>
        <SignInComponent />{" "}
      </ThemeProvider>
    );
    const typographyH6 = screen.getByTestId("signin-typo-h6");

    expect(typographyH6).toHaveTextContent(/sign in/i);
  });
});
