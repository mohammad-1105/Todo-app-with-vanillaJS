// initializing variable
const input = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const clear = document.getElementById("clearAllBtn");
const todosListBox = document.querySelector(".todosListBox");

// adding events
addBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (input.value != "") {
    todo(input.value);
    input.value = "";
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value != "") {
      todo(input.value);
      input.value = "";
    }
  }
});

const todo = (todoData) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todoItem");
  todoItem.innerHTML = ` 
        <div id="todoDataElement">${todoData}</div>
        <i class="fa-solid fa-square-check"></i><i class="fa-solid fa-square-minus"></i>
  `;

  todosListBox.append(todoItem);

  // check
  const check = todoItem.querySelector(".fa-square-check");
  check.addEventListener("click", (e) => {
    e.stopPropagation();
    todoItem
      .querySelector("#todoDataElement")
      .classList.toggle("todoDataClass");
    todoItem.classList.toggle("shadowblowing");
  });

  // delete
  const del = todoItem.querySelector(".fa-square-minus");
  del.addEventListener("click", (e) => {
    e.stopPropagation();
    todoItem.remove();
  });

  // clear All
  clear.addEventListener("click", () => {
    todoItem.remove();
  });
};
