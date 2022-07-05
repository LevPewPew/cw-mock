import React from "react";
import { Parrot } from "@levpewpew/cw-mock-shared";
import officeImage from "@Assets/images/stock-3.jpg";

export default function Root() {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img src={officeImage} alt="office" style={{ height: 300, width: 500 }} />
      </div>
      <h1 className="cover-heading">Welcome to the micro-frontend world!</h1>
      <p className="lead">
        This is an example of how powerful micro-frontends can be!
        <br /> You may integrate any and all of your frontend apps.
      </p>
      <p className="lead">
        <a href="/about" className="btn btn-lg btn-secondary">
          Learn more.
        </a>
      </p>
      <h1 className="foobar">FOOBAR</h1>
      <Parrot />
    </section>
  );
}
