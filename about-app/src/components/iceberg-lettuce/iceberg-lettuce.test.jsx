import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IcebergLettuce from "./iceberg-lettuce";

test("displays heading", () => {
  render(<IcebergLettuce />);

  expect(screen.getByRole("heading")).toHaveTextContent("I am an expensive vegetable");
});
