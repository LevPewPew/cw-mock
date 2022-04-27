const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5522;

express()
  .use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

/* NEXT seems like doubling up on the root. it is built in heroku and served from there,
but it is also built in S3 and the index built in heroku is actually pulling it from
the bucket via the import map. i think?

it doesn't create any problems but it's not a "clean" solution */
