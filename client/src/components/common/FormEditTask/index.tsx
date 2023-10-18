// Core
import { type FC } from "react";
import { type FieldValues, type SubmitHandler } from "react-hook-form";

// Components
import AppForm from "../../ui/AppForm";

// Definitions
import { type TodoType } from "../../../types/todo.ts";

// Hooks
import { useTodos } from "../../../store/todos.ts";
import { useModalState } from "../../../store/modalsState.ts";

// Services
import todoService from "../../../services/Todo.ts";

type FormEditTaskProps = {
  defaultValues: TodoType;
};

const FormEditTask: FC<FormEditTaskProps> = ({ defaultValues }) => {
  const { updateTodo } = useTodos();
  const { changeEditModalState } = useModalState();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const id = defaultValues.id;
    const res = await todoService.editTodo(data, id);

    updateTodo(res);
    changeEditModalState();
  };

  return (
    <AppForm onSubmit={onSubmit} isReset={true} defaultValues={defaultValues} />
  );
};

export default FormEditTask;
