// Core
import { type FieldValues, type SubmitHandler } from "react-hook-form";

// Components
import AppForm from "../../ui/AppForm";

// Hooks
import { useTodos } from "../../../store/todos.ts";
import { useModalState } from "../../../store/modalsState.ts";

// Services
import todoService from "../../../services/Todo.ts";

const FormAddTask = () => {
  const { addTodo } = useTodos();
  const { changeAddModalState } = useModalState();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await todoService.addTodo(data);

    addTodo(res);
    changeAddModalState();
  };

  const defaultValues = {
    title: "",
    category: "",
    content: "",
    isDone: false,
  };

  return (
    <AppForm onSubmit={onSubmit} isReset={true} defaultValues={defaultValues} />
  );
};

export default FormAddTask;
