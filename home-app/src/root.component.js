import React from "react";
import Parrot from "./shared-ui/parrot";

export default function Root() {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img src="https://www.fillmurray.com/600/400" alt="house" />
      </div>
      <h1 className="cover-heading">
        Welcome to the micro-frontend world! THIS IS A CHANGE ON HOME
      </h1>
      <p className="lead">
        This is an example of how powerful micro-frontends can be!
        <br /> You may integrate any and all of your frontend apps.
      </p>
      <p className="lead">
        <a href="/about" className="btn btn-lg btn-secondary">
          Learn more.
        </a>
      </p>
      <Parrot />
    </section>
  );
}

// NEXT make shared-ui imports work from root shared-ui folder when local, and the nested copied folder when deployed
//      is this the best solution? investigate the other options a bit more indepth
