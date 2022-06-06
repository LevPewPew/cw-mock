import React, { useEffect } from "react";
import Parrot from "./shared-ui/components/parrot";
import GarlicBread from "./shared-ui/components/garlic-bread";
import BasicChart from "./shared-ui/components/basic-chart";
import appStore from "./shared-ui/stores/app-store";
// import { Provider } from "mobx-react";
import { Provider } from "mobx-react";
import lowdish from "lodash";

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
        <div className="homepage-hero" style={{ margin: "5rem 0" }}>
          <img src="https://www.stevensegallery.com/600/400" alt="aerial shot of land and sea" />
        </div>
        <h1 className="cover-heading">{lowdish.upperCase("about-us")}</h1>
        <p className="lead">This is a page to talk about us. We are amazing. Send us money.</p>
        <Parrot />
        <GarlicBread />
        <BasicChart />
      </section>
    </Provider>
  );
}
