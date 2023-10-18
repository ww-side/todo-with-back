import { FieldValues } from "react-hook-form";
import axios from "axios";

class TodoServices {
  async addTodo(data: FieldValues) {
    try {
      const res = await axios.post("http://localhost:3000/api/todo/", data);
      return res.data;
    } catch (err) {
      console.error("Err:", err);
      throw err;
    }
  }

  async editTodo(data: FieldValues, id: number) {
    try {
      const res = await axios.put(`http://localhost:3000/api/todo/${id}`, data);
      return res.data;
    } catch (err) {
      console.error("Err:", err);
      throw err;
    }
  }

  async deleteTodo(id: number) {
    try {
      const res = await axios.delete(`http://localhost:3000/api/todo/${id}`);
      return res.data;
    } catch (err) {
      console.error("Err:", err);
      throw err;
    }
  }

  async updateTodoIsDone(id: number, isDone: boolean) {
    try {
      await axios.patch(`http://localhost:3000/api/todo/${id}/done`, {
        isDone,
      });
    } catch (err) {
      console.error("Error updating todo isDone:", err);
      throw err;
    }
  }
}

const todoService = new TodoServices();

export default todoService;
