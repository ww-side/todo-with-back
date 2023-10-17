// Core
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Todo' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column()
  category: string;

  @Column()
  content: string;

  @Column()
  isDone: boolean;
}
