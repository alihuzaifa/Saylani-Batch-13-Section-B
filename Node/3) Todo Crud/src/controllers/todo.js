let todos = [];

const addTodo = (req, res) => {
  const { name, age } = req.body;
  todos.push({ name, age, id: Date.now() });
  return res.send({ message: "Todo Saved Successfully" });
};
const getAllTodo = (_, res) => {
  return res.send({ todos, message: "Todos Fetched Successfully" });
};
const deleteTodo = (req, res) => {
  const id = req.params.id;
  const filterTodos = todos.filter((obj) => obj.id !== id);
  todos = filterTodos;
  return res.send({ message: "Todos Deleted Successfully" });
};
const updateTodo = (req, res) => {};

export { addTodo, getAllTodo, deleteTodo, updateTodo };
