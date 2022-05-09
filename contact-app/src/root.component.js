import React from "react";
import GarlicBread from "./shared-ui/components/garlic-bread";
import appStore from "./shared-ui/stores/app-store";
import { Provider } from "mobx-react";

const store = appStore.create({
  isCookingComplete: false,
});

export default function Root() {
  return (
    <Provider store={store}>
      <section>
        <div className="homepage-hero" style={{ margin: "5rem 0" }}>
          <img src="https://placekeanu.com/600/400" alt="man using laptop" />
        </div>
        <h1 className="cover-heading">Contact Us</h1>
        <p className="lead">Get in touch with Baron Micro and his gang of Frontends.</p>
        <GarlicBread />
      </section>
    </Provider>
  );
}
