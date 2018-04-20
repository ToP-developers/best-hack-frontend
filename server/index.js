const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 4004;

app.use("/", express.static(path.join("dist")));

app.listen(port, () => console.log(`Example app listening on port: ${port}!`));
