// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api", (req, res) => {
  const date = new Date();
  const newdate = date.toUTCString();
  const timestamp = date.valueOf();
  res.json({ unix: timestamp, utc: `${newdate}` });
});

app.get("/api/:id", (req, res) => {
  const { id } = req.params;
  const Dats = new Date(id).valueOf();
  if (isNaN(Dats)) {
    var timestamp = Number(id);
    var date = new Date(timestamp).toUTCString();
    if (date.toString() === "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      res.json({ unix: timestamp, utc: `${date}` });
    }
  } else {
    const timestamp1 = new Date(id).toUTCString();
    const something = new Date(id).valueOf();
    res.json({ unix: something, utc: `${timestamp1}` });
  }
});

// listen for requests :
var listener = app.listen(process.env.PORT, function () {
  console.log(
    "Your app is listening on port " +
      ` http://localhost:${listener.address().port}`
  );
});
