import React from "react";
import Parrot from "./shared-ui/components/parrot";
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
          <img src="https://www.stevensegallery.com/600/400" alt="aerial shot of land and sea" />
        </div>
        <h1 className="cover-heading">About Us!</h1>
        <p className="lead">This is a page to talk about us. We are amazing. Send us money.</p>
        <Parrot />
        <GarlicBread />
      </section>
    </Provider>
  );
}
