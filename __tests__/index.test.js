import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />{" "}
      </ThemeProvider>
    );
    const typographyH4 = screen.getByTestId("heading-h4");
    const typographyH5 = screen.getByTestId("heading-h5");

    expect(typographyH4).toHaveTextContent(/AR Conversion/i);
    expect(typographyH5).toHaveTextContent(/product overview/i);
  });
});
