import React from "react";

export default function Root(props) {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img
          style={{ width: "100%" }}
          src="https://blog.logrocket.com/wp-content/uploads/2019/05/logrocket-blog.jpg"
          alt="log rocket logo"
        />
      </div>
      <h1 className="cover-heading">About Us!</h1>
      <p className="lead">
        Hey, what's up?
        <br />
        This is a page to talk about us. A CHANGE ON ABOUT PAGE.
      </p>
    </section>
  );
}
