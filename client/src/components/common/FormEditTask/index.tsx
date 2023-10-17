// Core
import { type FC } from "react";
import { type FieldValues, type SubmitHandler } from "react-hook-form";
import axios from "axios";

// Components
import AppForm from "../../ui/AppForm";

// Definitions
import { type TodoType } from "../../../types/todo.ts";

// Hooks
import { useTodos } from "../../../store/todos.ts";
import { useModalState } from "../../../store/modalsState.ts";

type FormEditTaskProps = {
  defaultValues: TodoType;
};

const FormEditTask: FC<FormEditTaskProps> = ({ defaultValues }) => {
  const { updateTodo } = useTodos();
  const { changeEditModalState } = useModalState();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const id = defaultValues.id;

    await axios
      .put(`http://localhost:3000/api/todo/${id}`, data)
      .then((res) => {
        updateTodo(res.data);
      })
      .catch((err) => {
        console.error("Err:", err);
      });
    changeEditModalState();
  };

  return (
    <AppForm onSubmit={onSubmit} isReset={true} defaultValues={defaultValues} />
  );
};

export default FormEditTask;
