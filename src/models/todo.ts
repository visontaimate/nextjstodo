export interface Todo {
  id: number;
  name: string;
  todoItems: TodoItem[];
}

export interface TodoItem {
  text: string;
  isItDone: boolean;
}
