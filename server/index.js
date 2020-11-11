const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const City = require('../models/City')
// const { Op } = require("sequelize");
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", express.static(path.join(__dirname, "public")));

app.get('/getCity', (req, res) => {
  const q = req.query.index
  console.log('this IS q: ', q)
  const callback = (city) => {
    console.log("dis an object foo: ", city[q]);
    res.json(city[q])
  }
  City(callback)

})

app.listen(port, () => console.log(`ByeByeTrump is listening on ${port}`));
