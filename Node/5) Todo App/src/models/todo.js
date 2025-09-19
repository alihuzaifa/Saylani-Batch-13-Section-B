import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
