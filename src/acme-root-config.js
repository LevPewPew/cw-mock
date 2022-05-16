import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});
const layoutEngine = constructLayoutEngine({ routes, applications, active: false });
applications.forEach(registerApplication);

// registerApplication({
//   name: "@acme/navbar-app",
//   app: () => System.import("@acme/navbar-app"),
//   /* navbar should be on any page within the root, default matching looks at the
//   base and wildcards anything proceeding it */
//   activeWhen: ["/"],
//   customProps: { domElement: document.getElementById("nav-container") },
// });

// registerApplication({
//   name: "@acme/home-app",
//   app: () => System.import("@acme/home-app"),
//   /* specific condition is needed here as we want home to show when path is
//   EXACTLY "/" */
//   activeWhen: [(location) => location.pathname === "/"],
//   customProps: { domElement: document.getElementById("home-container") },
// });

// registerApplication({
//   name: "@acme/about-app",
//   app: () => System.import("@acme/about-app"),
//   activeWhen: ["/about"],
//   customProps: { domElement: document.getElementById("about-container") },
// });

// registerApplication({
//   name: "@acme/contact-app",
//   app: () => System.import("@acme/contact-app"),
//   activeWhen: ["/contact"],
//   customProps: { domElement: document.getElementById("contact-container") },
// });

// layoutEngine.activate();
// start({
//   urlRerouteOnly: true,
// });
System.import("@acme/root-config")
  .then(() => {
    console.log("i worked");
    layoutEngine.activate();
    start();
    // Activate the layout engine once the styleguide CSS is loaded
  })
  .catch(() => console.log("i failed"));
