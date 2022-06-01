import React from "react";
import { NavLink as Link, BrowserRouter as Router } from "react-router-dom";
/* NOTE: in real app, pretend this is the root "layout" app. the layout app is 
where you would put everything you expect to see on every page. so navbars,
status, notifications, user menu/settings, etc. 

ideally we would put global styles in the root single spa app, but for some reason
webpack has refused to play nice and i am unable to apply global styles from there.

we expect this "layout app" to be present on first app load, and every single page 
or micro app. so these global styles will be injected into the global style sheet
and be present where ever you navigate.
*/
import "./styles/global.css";

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
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About Us</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
        </Router>
      </div>
    </header>
  );
}
