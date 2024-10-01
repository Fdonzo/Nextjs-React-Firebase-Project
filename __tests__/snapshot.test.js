import { render } from "@testing-library/react";
import Home from "../src/pages/index";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
describe("Home", () => {
  it("Home", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />{" "}
      </ThemeProvider>
    );
    //const heading = screen.getByTestId("top-stack");

    //expect(heading).toHaveTextContent(/home/i);

    expect(container).toMatchSnapshot();
    //expect(heading).toBeInTheDocument();
  });
});
