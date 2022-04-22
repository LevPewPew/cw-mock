const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5522;

express()
  .use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "mfe-root/dist" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

// NEXT heroku should use node 14 not 16
