const Todo = require("../models/todo");
module.exports.todo_display = function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log("Error in fetching some data");
      return;
    }
    return res.render("home", {
      title: "My todos..",
      todo_list: todos,
    });
  });
};
