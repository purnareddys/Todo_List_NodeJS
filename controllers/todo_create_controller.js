const Todo = require("../models/todo");
module.exports.create = function (req, res) {
  Todo.create(
    {
      name: req.body.name,
      description: req.body.description,
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
};
