import React, { useEffect } from "react";
import { GarlicBread, store } from "@levpewpew/cw-mock-shared";
import { Provider } from "mobx-react";

// dummy function to simulate fetching data from server
async function getCookingStatus() {
  // pretend API call
  return {
    isCookingComplete: false,
  };
}

const initialisedStore = store.appStore.create({});

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
    <Provider store={initialisedStore}>
      <section>
        <div className="homepage-hero" style={{ margin: "5rem 0" }}></div>
        <h1 className="cover-heading">Contact Us</h1>
        <p className="lead">Get in touch with Baron Micro and his gang of Frontends.</p>
        <GarlicBread />
      </section>
    </Provider>
  );
}
