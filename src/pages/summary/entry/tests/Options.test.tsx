import { render, screen } from "@testing-library/react";
import * as React from "react";

import Options from "../Options";

test("displays image for each scoop from the server", () => {
  render(<Options optionType="scoops"></Options>);

  // find images
  // $ for scoop is at the end of the string
  const scoopImages = screen.getAllByRole("img", {
    name: /scoop$/i,
  }) as HTMLInputElement[]; // for typescript not to bug
  expect(scoopImages).toHaveLength(2);

  const AltText = scoopImages.map((elem) => elem.alt);

  // arrays and objects need to use the toEqual matcher
  expect(AltText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
