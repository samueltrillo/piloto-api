const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const pilotoData = require("../../data/piloto.json");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send(pilotoData);
});

app.get("/piloto", (req, res) => {
  res.status(200).send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div>
          <h1>In memory of Pilot</h1>
          <img src="http://localhost:3000/img/piloto.jpg" />
          <img src="http://localhost:3000/img/plane.gif" />
      </div>
  </body>
  </html>`);
});
