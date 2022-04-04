import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@acme/navbar-app",
  app: () => System.import("@acme/navbar-app"),
  /* navbar should be on any page within the root, default matching looks at the
  base and wildcards anything proceeding it */
  activeWhen: ["/"],
  customProps: { domElement: document.getElementById("nav-container") },
});

registerApplication({
  name: "@acme/home-app",
  app: () => System.import("@acme/home-app"),
  /* specific condition is needed here as we want home to show when path is 
  EXACTLY "/" */
  activeWhen: [(location) => location.pathname === "/"],
  customProps: { domElement: document.getElementById("home-container") },
});

registerApplication({
  name: "@acme/about-app",
  app: () => System.import("@acme/about-app"),
  activeWhen: ["/about"],
  customProps: { domElement: document.getElementById("about-container") },
});

registerApplication({
  name: "@acme/contact-app",
  app: () => System.import("@acme/contact-app"),
  activeWhen: ["/contact"],
  customProps: { domElement: document.getElementById("contact-container") },
});

start({
  urlRerouteOnly: true,
});
