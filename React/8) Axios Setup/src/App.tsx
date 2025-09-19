import { useEffect, useState } from "react";
import { apiRequest } from "./services/api";

const App = () => {
  const [todo, setTodo] = useState("");
  const [allData, setAllData] = useState([]);

  const getTodos = async () => {
    const response = await apiRequest("GET", "todo");
    setAllData(response?.data?.todos);
  };

  const addTodo = async () => {
    if (todo?.trim() === "") {
      alert("Please fill the form");
    }
    try {
      await apiRequest("POST", "create", {
        name: todo,
        age: 10,
      });
      getTodos();
      setTodo("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: string) => {
    await apiRequest("DELETE", `todo?id=${id}`);
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo Application</h1>
      <input
        type="text"
        name="todo"
        placeholder="Enter Your Name"
        value={todo}
        onChange={(e) => setTodo(e?.target?.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {allData?.map((obj: { name: string; _id: string }, index) => {
          return (
            <li key={index}>
              <h4>{obj?.name}</h4>
              <button
                onClick={() => {
                  deleteTodo(obj?._id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
