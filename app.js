// initializing variable
const input = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const clear = document.getElementById("clearAllBtn");
const todosListBox = document.querySelector(".todosListBox");
const darkMode = document.querySelector(".darkModeBtn");
const html = document.querySelector("html");
const appContainer = document.querySelector(".appContainer");
const h2 = document.querySelector("h2");

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
    todoItem.querySelector("#todoDataElement");
    todoItem.classList.toggle("todoItemWhiteModeEffect");
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

//  dark mode logic

darkMode.addEventListener("click", (e) => {
  e.stopPropagation();
  if (html.style.backgroundColor === "white") {
    darkMode.textContent = "☀️";
    html.style.backgroundColor = "black";
    html.style.color = "white";
    appContainer.style.backgroundColor = "#2C272E";
    h2.style.color = "#63686E";
    input.style.color = 'white';
  } else {
    html.style.backgroundColor = "white";
    html.style.color = "black";
    darkMode.textContent = "🌙";
    appContainer.style.backgroundColor = "#f0eee1";
    h2.style.color = "black";
    input.style.color = "#f0eee1";

  }
});
