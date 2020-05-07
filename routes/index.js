const express = require("express");

//Router
const router = express.Router();

//import todo_display_controller
const todo_display_controller = require("../controllers/todo_display_controller");

//getting the todo_display
router.get("/", todo_display_controller.todo_display);

//Exporting the module
module.exports = router;
