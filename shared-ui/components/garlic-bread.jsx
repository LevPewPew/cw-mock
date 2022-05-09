import React from "react";
import { observer, inject } from "mobx-react";

function GarlicBread(props) {
  const breadText = props.store.isCookingComplete ? "Read to eat" : "Ewww!";

  function handleToggleBread() {
    props.store.toggleIsCookingComplete();
  }

  return (
    <div style={{ border: "3px dashed green", backgroundColor: "yellow" }}>
      <div>{breadText}</div>
      <button onClick={handleToggleBread}>toggle bread</button>
    </div>
  );
}

export default inject("store")(observer(GarlicBread));
