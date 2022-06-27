import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "mobx-react";
import GarlicBread from "./garlic-bread";
import appStore from "../stores/app-store";

describe("GarlicBread component", () => {
  it("bread can start raw", () => {
    const store = appStore.create({ isCookingComplete: false });

    render(
      <Provider store={store}>
        <GarlicBread />
      </Provider>,
    );

    expect(screen.getByText("It's raw")).toBeInTheDocument();
  });

  it("bread can start cooked", () => {
    const store = appStore.create({ isCookingComplete: true });

    render(
      <Provider store={store}>
        <GarlicBread />
      </Provider>,
    );

    expect(screen.getByText("Ready to eat")).toBeInTheDocument();
  });
});
