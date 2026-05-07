// Select elements
const input = document.getElementById("todo-input") as HTMLInputElement;
const button = document.getElementById("add-btn") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

// Define Todo type
type Todo = {
  id:number;
  text: string;
  completed: boolean;
}

// Store todos
let todos: Todo[] = [];

// Add Todo function
function renderTodos(): void {
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


function saveTodos(): void{
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(): void {
  const text = input.value.trim();
  if (text === "") return;

  const newTodo: Todo = {
    id: Date.now(),
    
    text: text,
    completed:false
  };

  todos.push(newTodo);
  input.value = "";
  saveTodos();
  renderTodos();
}

//delete the tasks 
function deleteTodo(id:number): void {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}






function loadTodos(): void {
  const stored = localStorage.getItem("todos");

  if (stored) {
    try {
      todos = JSON.parse(stored) as Todo[];
    } catch {
      todos = [];
    }
  }
}
loadTodos();
renderTodos();

// Event listener
button.addEventListener("click", addTodo);




