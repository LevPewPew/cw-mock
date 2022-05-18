import React from "react";
import { NavLink as Link, BrowserRouter as Router } from "react-router-dom";

function NavLink(props) {
  return <Link {...props} className="nav-link" activeClassName="active" />;
}

export default function Root() {
  return (
    <header className="mb-auto masthead ">
      <div className="inner">
        <a className="blog-logo" href="/">
          <img
            style={{ maxWidth: "40px", margin: "20px" }}
            src="https://single-spa.js.org/img/logo-white-bgblue.svg"
            alt="Single Spa logo"
          />{" "}
          Reload Site and Root App
        </a>
        <Router>
          <nav className="p-4 nav nav-pills">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About Us</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
        </Router>
      </div>
    </header>
  );
}
