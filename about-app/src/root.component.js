import React, { useEffect } from "react";
import Parrot from "./shared-ui/components/parrot";
import GarlicBread from "./shared-ui/components/garlic-bread";
import appStore from "./shared-ui/stores/app-store";
import { Provider } from "mobx-react";

// dummy function to simulate fetching data from server
async function getCookingStatus() {
  // pretend API call
  return {
    isCookingComplete: true,
  };
}

const store = appStore.create({});

export default function Root() {
  useEffect(() => {
    async function fetchData() {
      const cookingStatusResponse = await getCookingStatus();

      if (cookingStatusResponse) {
        store.setIsCookingComplete(cookingStatusResponse.isCookingComplete);
      }
    }

    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <section>
        <div className="homepage-hero" style={{ margin: "5rem 0" }}></div>
        <h1 className="cover-heading">About Us</h1>
        <p className="lead">This is a page to talk about us. We are amazing. Send us money.</p>
        <Parrot />
        <GarlicBread />
      </section>
    </Provider>
  );
}
