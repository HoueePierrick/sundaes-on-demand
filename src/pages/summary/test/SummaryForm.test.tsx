// Cheatsheet
// screen.getByRole("button", {name: ""})
// expect().toHaveStyle({backgroundColor: ""})
// expect().toHaveTextContent("xxx")
// expect().not.toBeChecked();
// expect().toBeEnabled
// describe("xxx", () => {tests})
// expect(function("A").toBe("result"))
// fireEvent.click(xxx)

import { render, screen } from "@testing-library/react";
import * as React from "react";
import SummarayForm from "../SummaryForm";

test("Checkbox enabling and disabling button", () => {
  render(<SummarayForm></SummarayForm>);

  // define button and checkbox

  // Checkbox is unchecked by default

  // Clicking on checkbox

  // Checking checkbox enables button

  // Clicking on checkbox

  // Unchecking checkbox again disables button
});
