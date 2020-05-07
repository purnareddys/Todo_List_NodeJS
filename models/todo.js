const mongoose = require("mongoose");

//Describing the Schema
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

//Name of the Collection
const Todo = mongoose.model("Todo", todoSchema);

//Exporting
module.exports = Todo;
