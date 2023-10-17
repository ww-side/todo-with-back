import { TodoType } from "../types/todo.ts";
import { create } from "zustand";

type Store = {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
  selectedTodo: TodoType | null;
  changeSelectedTodo: (todo: TodoType | null) => void;
  addTodo: (todo: TodoType) => void;
  updateTodo: (todo: TodoType) => void;
  isDone: boolean;
  changeIsDone: () => void;
};

export const useTodos = create<Store>((set) => ({
  selectedTodo: null,
  todos: [],
  isDone: false,
  changeIsDone: () => {
    set((state) => ({
      isDone: !state.isDone,
    }));
  },
  changeSelectedTodo: (todo) =>
    set(() => ({
      selectedTodo: todo,
    })),
  setTodos: (todos: TodoType[]) => {
    set({ todos });
  },
  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  updateTodo: (updatedTodo) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    }));
  },
}));
