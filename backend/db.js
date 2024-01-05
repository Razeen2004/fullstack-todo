const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Todo");

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean,
})

const Todo = new mongoose.model("Todo", TodoSchema);

module.exports = Todo;