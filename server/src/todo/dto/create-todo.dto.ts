export class CreateTodoDto {
  readonly id: number;
  readonly title: string;
  readonly category: string;
  readonly content: string;
  readonly isDone: boolean;
}
