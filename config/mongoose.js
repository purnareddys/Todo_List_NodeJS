//require the library
const mongoose = require("mongoose");

//connect the database
mongoose.connect("mongodb://localhost/todo_list_db");

//acquire the connection (to check if it is successfull)
const db = mongoose.connection;

//error
db.on("error", console.error.bind("error connecting to db"));

//no error and server is running
db.once("open", function () {
  console.log("successfully connected to database");
});
