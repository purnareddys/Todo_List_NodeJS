const express = require("express");

const db = require("./config/mongoose");
const Todo = require("./models/todo");
const app = express();

// Declaring the port Number
const port = 8000;

//use express routes

app.use("/", require("./routes/index"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//setting up static files
app.use(express.urlencoded());
app.use(express.static("assets"));

//basic todo structure left this for reference.
// let todos = [
//   {
//     name: "Gym",
//     description: "Go to gym",
//      catergory:"Personal",
//
//   },
//   {
//     name: "Milk",
//     description: "Go and get the milk",
//      catergory:"Personal",
//   },
// ];

//post method for creating a todo
//I have tried creating a separate controller for
//todo but I ended up in erros. so I have included
//most of the methods here.
app.post("/create_todo", function (req, res) {
  console.log(req.body.date);
  Todo.create(
    {
      name: req.body.name.toUpperCase(),
      description: req.body.description,
      category: req.body.select,
      date: req.body.date,
    },
    function (err, newTodo) {
      if (err) {
        console.log("Error in creating Todo");
        return;
      }
      console.log("Todo Created");
      return res.redirect("back");
    }
  );
});

//deleting a todo

app.get("/delete_todo/", function (req, res) {
  //get the id from query in the url
  let id = req.query.id;
  //find the contact and delte todo
  Todo.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting the todo");
      return;
    }
    return res.redirect("back");
  });
});
//Listening to the port number

app.listen(port, function (err) {
  if (err) {
    console.log(`Something went wrong ${err}`);
  }
  console.log(`Server is running in Port Number ${port}`);
});
