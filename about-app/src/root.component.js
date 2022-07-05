import React, { useEffect } from "react";
import { GarlicBread, Parrot, store } from "@levpewpew/cw-mock-shared";
import { Provider } from "mobx-react";

// dummy function to simulate fetching data from server
async function getCookingStatus() {
  // pretend API call
  return {
    isCookingComplete: true,
  };
}

const initialisedStore = store.appStore.create({});

export default function Root() {
  useEffect(() => {
    async function fetchData() {
      const cookingStatusResponse = await getCookingStatus();

      if (cookingStatusResponse) {
        initialisedStore.setIsCookingComplete(cookingStatusResponse.isCookingComplete);
      }
    }

    fetchData();
  }, []);

  return (
    <Provider store={initialisedStore}>
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
