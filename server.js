const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5522;

express()
  .use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

/* LEFTOFF when i deploy server to heroku, it is looking in mfe-root/dist, but
  ofc that doesn't exist as it hasn't been built on the server
  
  either i need to build it within heroku somehow... or look at the tute i have 
  been following i am sure it explains what i should be doing

  or should the server be pulling it from s3, not the heroku server/env?
  */
