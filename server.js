const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5522;

express()
  .use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

/* FIXME:

sort of doubling up on the root here, it is being built and served by server
and heroku, but a build is also being fetched from the S3 bucket via import map.
it looks like the bucket is what is actually being used when visiting the deployed
site, but due to heroku's high level of abstraction we can't not serve it from
the server here or it will error because we cannot control it wanting to serve
something from here

when porting over to env with more control, can possibly remove this double serve
*/
