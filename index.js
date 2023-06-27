let arrayList = [];

const todo = document.getElementById("todo-input");
const inputBtn = document.getElementById("input-btn");
const todoUl = document.getElementById("todo-ul");

if (arrayList.length === 0) {
  todoUl.textContent = "Empty List";
}

inputBtn.addEventListener("click", function () {
  arrayList.push(todo.value);
  console.log(arrayList);
  renderList();
  todo.value = "";
});

function renderList() {
  let todoList = "";
  for (i = 0; i < arrayList.length; i++) {
    todoList += "<li>" + arrayList[i] + "</li>";
  }

  todoUl.innerHTML = todoList;
}
