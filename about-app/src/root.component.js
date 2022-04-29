import React from "react";
import Parrot from "../../shared-ui/parrot";

export default function Root() {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img src="https://www.stevensegallery.com/600/400" alt="aerial shot of land and sea" />
      </div>
      <h1 className="cover-heading">About Us!</h1>
      <p className="lead">This is a page to talk about us. We are amazing. Send us money.</p>
      <Parrot />
    </section>
  );
}
