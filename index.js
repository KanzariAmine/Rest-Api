const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

//Set up express app
const app = express();

app.use(morgan("dev"));
//connect to mongodb
mongoose.connect("mongodb://localhost/ninjago", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.static("public"));

app.use(bodyParser.json());

//initialize routes.
app.use("/api", routes);

//Custom 404 error page
app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  error.status = 404;
  next(error);
});
//error handling router
app.use((err, req, res, next) => {
  res.status(422).send({ error: err });
  //res.status(200).send({ error: err });
  //res.send({ error: err });
});

//Listen for request
const Port = process.env.port || 4000;
app.listen(Port, () => {
  console.log("Now Listing from request");
});
