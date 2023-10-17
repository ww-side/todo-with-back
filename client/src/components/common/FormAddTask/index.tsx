// Core
import { type FieldValues, type SubmitHandler } from "react-hook-form";
import axios from "axios";

// Components
import AppForm from "../../ui/AppForm";

// Hooks
import { useTodos } from "../../../store/todos.ts";
import { useModalState } from "../../../store/modalsState.ts";

const FormAddTask = () => {
  const { addTodo } = useTodos();
  const { changeAddModalState } = useModalState();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await axios
      .post("http://localhost:3000/api/todo/", data)
      .then((res) => {
        addTodo(res.data);
      })
      .catch((err) => {
        console.error("Err:", err);
      });
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
