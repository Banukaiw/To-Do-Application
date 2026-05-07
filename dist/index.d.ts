declare const input: HTMLInputElement;
declare const button: HTMLButtonElement;
declare const list: HTMLUListElement;
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};
declare let todos: Todo[];
declare function renderTodos(): void;
declare function addTodo(): void;
declare function deleteTodo(id: number): void;
//# sourceMappingURL=index.d.ts.map