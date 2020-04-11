const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("userinfo");
});

app.listen(5150, () => {
  console.log("\t\t \n Here at 5150!!");
});
