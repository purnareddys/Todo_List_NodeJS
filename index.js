const express = require("express");
const app = express();

// Declaring the port Number
const port = 8000;

//use express routes

app.use("/", require("./routes/index"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//setting up static files
app.use(express.static("assets"));
//Listening to the port number

app.listen(port, function (err) {
  if (err) {
    console.log(`Something went wrong ${err}`);
  }
  console.log(`Server is running in Port Number ${port}`);
});
