// Core
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Other
import { TodoEntity } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import * as process from 'process';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async getAll() {
    return this.todoRepository.find();
  }

  async getById(id: string) {
    return this.todoRepository.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  async createTodo(dto: CreateTodoDto) {
    const todo = new TodoEntity();
    todo.title = dto.title;
    todo.content = dto.content;
    todo.category = dto.category;
    todo.isDone = false;
    return this.todoRepository.save(todo);
  }

  async deleteTodo(id: string) {
    return this.todoRepository.delete({ id: Number(id) });
  }

  async updateTodo(id: string, dto: UpdateTodoDto) {
    const updatedTodo = await this.getById(id);
    updatedTodo.title = dto.title;
    updatedTodo.content = dto.content;
    updatedTodo.category = dto.category;
    return this.todoRepository.save(updatedTodo);
  }

  async doneTodo(id: string) {
    const todo = await this.getById(id);
    todo.isDone = !todo.isDone;
    return this.todoRepository.save(todo);
  }
}
