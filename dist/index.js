"use strict";
// Select elements
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
// Store todos
let todos = [];
// Add Todo function
function renderTodos() {
    list.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        // Text
        const span = document.createElement("span");
        span.textContent = todo.text;
        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "✖";
        delBtn.className = "del-btn";
        // 🔥 Important: attach event
        delBtn.addEventListener("click", () => {
            deleteTodo(todo.id);
        });
        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}
function addTodo() {
    const text = input.value.trim();
    if (text === "")
        return;
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    input.value = "";
    renderTodos();
}
//delete the tasks 
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}
// Event listener
button.addEventListener("click", addTodo);
button. DOCUMENT_NODE("click")
//# sourceMappingURL=index.js.map
