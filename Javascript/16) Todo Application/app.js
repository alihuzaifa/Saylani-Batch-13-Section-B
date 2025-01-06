var inputEl = document.getElementById("todo");
var listEl = document.getElementById("list");
var btn = document.getElementById("btn");

var todos = [];

Swal.fire({
  title: "Succesfull",
  icon: "success",
  draggable: true,
});

var editIndex = -1;

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  var item = todos[index];
  inputEl.value = item;
  btn.innerHTML = "Update Todo";
  editIndex = index;
}

function renderTodos() {
  listEl.innerHTML = "";

  for (var index = 0; index < todos.length; index++) {
    var item = todos[index];
    listEl.innerHTML += `<div id="item">
            <p>
               ${item}
            </p>
            <button onclick="deleteTodo(${index})">Del</button>
            <button onclick="editTodo(${index})">Edit</button>
        </div>`;
  }
}

renderTodos();

function addTodo() {
  var text = inputEl.value;

  if (editIndex === -1) {
    // Add Todo
    if (text === "") {
      alert("Please fill value");
    } else {
      todos.push(text);
    }
  } else {
    todos.splice(editIndex, 1, text);
    btn.innerHTML = "Add Todo";
    editIndex = -1;
  }

  inputEl.value = "";
  renderTodos();
}
