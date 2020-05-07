const express = require("express");

//Router
const router = express.Router();
//Todo
const Todo = require("../models/todo");
//import controller
const todo_display_controller = require("../controllers/todo_display_controller");
const todo_create_controller = require("../controllers/todo_create_controller");
router.get("/", todo_display_controller.todo_display);
//basic todo structure.

// router.use("/create_todo", todo_create_controller.create);
//testing
// console.log("This is working");
//post method
// router.post("/create_todo", function (req, res) {
//   // todos.push(req.body);
//   // return res.redirect("back");
//   Todo.create(
//     {
//       name: req.body.name,
//       description: req.body.description,
//     },
//     function (err, newTodo) {
//       if (err) {
//         console.log("Error in creating Todo");
//         return;
//       }
//       console.log("Todo Created");
//       return res.redirect("back");
//     }
//   );
// });

// //deleting a todo

// router.get("/delete_todo/", function (req, res) {
//   //get the id from query in the url
//   let id = req.query.id;
//   //find the contact and delte todo
//   Todo.findByIdAndDelete(id, function (err) {
//     if (err) {
//       console.log("Error in deleting the todo");
//       return;
//     }
//     return res.redirect("back");
//   });
// });
//Exporting
module.exports = router;
