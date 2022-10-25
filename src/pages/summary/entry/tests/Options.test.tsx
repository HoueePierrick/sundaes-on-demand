import { render, screen } from "@testing-library/react";
import * as React from "react";

import Options from "../Options";

test("displays image for each scoop from the server", () => {
  render(<Options optionType="scoops"></Options>);

  // find images
  // $ for scoop is at the end of the string
  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
});
