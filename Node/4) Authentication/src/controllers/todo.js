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
  const id = req.query.id;
  const filterTodos = todos.filter((obj) => obj.id != id);
  if (filterTodos.length !== todos.length) {
    todos = filterTodos;
    return res.send({ message: "Todos Deleted Successfully" });
  } else {
     return res.send({ message: "Id Not Matched" });
  }
};
const updateTodo = (req, res) => {};

export { addTodo, getAllTodo, deleteTodo, updateTodo };
