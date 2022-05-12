import React, { useEffect } from "react";
import GarlicBread from "./shared-ui/components/garlic-bread";
import appStore from "./shared-ui/stores/app-store";
import { Provider } from "mobx-react";

// dummy function to simulate fetching data from server
async function getCookingStatus() {
  // pretend API call
  return {
    isCookingComplete: false,
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
        <div className="homepage-hero" style={{ margin: "5rem 0" }}>
          <img src="https://placekeanu.com/600/400" alt="keanu reeves" />
        </div>
        <h1 className="cover-heading">Contact Us</h1>
        <p className="lead">Get in touch with Baron Micro and his gang of Frontends.</p>
        <GarlicBread />
      </section>
    </Provider>
  );
}
