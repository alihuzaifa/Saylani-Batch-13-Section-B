import Todo from "../models/todo.js";

const addTodo = async (req, res) => {
  const { name, age } = req.body;
  const newRecord = {
    name,
    age,
  };
  await Todo.create(newRecord);
  return res.send({ message: "Todo Saved Successfully" });
};

const getAllTodo = async (_, res) => {
  const allTodos = await Todo.find({});
  return res.send({ todos: allTodos, message: "Todos Fetched Successfully" });
};

const deleteTodo = async (req, res) => {
  const id = req.query.id;
  await Todo.findByIdAndDelete(id);
  return res.send({ message: "Todo Deleted Successfully" });
};

const updateTodo = async (req, res) => {
  const { id, name, age } = req?.body;
  await Todo.findByIdAndUpdate(id, {
    name,
    age,
  });
  return res.send({ message: "Todo Updated Successfully" });
};

export { addTodo, getAllTodo, deleteTodo, updateTodo };
