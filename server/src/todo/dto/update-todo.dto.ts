export class UpdateTodoDto {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly content: string;
  readonly isDone: boolean;
}
