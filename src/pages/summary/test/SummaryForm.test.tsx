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
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Checkbox enabling and disabling button", async () => {
  // Setting-up user from userEvent
  const user = userEvent.setup();

  render(<SummaryForm></SummaryForm>);

  // define button and checkbox
  const button = screen.getByRole("button", { name: /confirm order/i });
  const checkbox = screen.getByRole("checkbox", {
    // text insensitive of case
    name: /terms and conditions/i,
  });

  // Checkbox is unchecked by default
  expect(checkbox).not.toBeChecked();

  // Clicking on checkbox
  await user.click(checkbox);

  // Checking checkbox enables button
  expect(button).toBeEnabled();

  // Clicking on checkbox
  await user.click(checkbox);

  // Unchecking checkbox again disables button
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm></SummaryForm>);

  // popover starts out hidden
  // unlike getBy, which, if doesn't find creates an error,
  // queryBy will be null
  const nullPopover = screen.queryByText(
    /no ice cream will be actually delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // propover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  // Hovers them
  await user.hover(termsAndConditions);
  // Need to research for popover -
  // this time we can use Get as it should be in the document
  const popover = screen.getByText(/no ice cream will be actually delivered/i);
  // Check if popover exists
  expect(popover).toBeInTheDocument();

  // poposver disappears when we mouse out
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
