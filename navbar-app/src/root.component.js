import React from "react";

export default function Root(props) {
  return (
    <header className="masthead mb-auto ">
      <div className="inner">
        <a className="blog-logo" href="/">
          <img
            style={{ maxWidth: "40px", margin: "20px" }}
            src="https://single-spa.js.org/img/logo-white-bgblue.svg"
            alt="Single Spa logo"
          />{" "}
          React + single-spa
        </a>
        <nav className="nav nav-pills p-4">
          <a className={`nav-link ${location.pathname === "/" && "active"}`} href="/">
            Home
          </a>
          <a className={`nav-link ${location.pathname === "/about" && "active"}`} href="/about">
            About Us
          </a>
          <a className={`nav-link ${location.pathname === "/contact" && "active"}`} href="/contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
