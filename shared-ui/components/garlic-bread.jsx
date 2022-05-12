import React from "react";
import { observer, inject } from "mobx-react";

function GarlicBread(props) {
  const breadText = props.store.isCookingComplete ? "Ready to eat" : "It's raw";

  return (
    <div style={{ border: "3px dashed green", backgroundColor: "yellow", color: "black" }}>
      <div>{breadText}</div>
    </div>
  );
}

export default inject("store")(observer(GarlicBread));
