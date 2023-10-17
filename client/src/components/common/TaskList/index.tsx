// Core
import { useEffect } from "react";
import axios from "axios";
import { createUseStyles } from "react-jss";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Flex } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// Components
import ModalEdit from "../ModalEdit";

// Definitions
import { type TodoType } from "../../../types/todo.ts";

// Hooks
import { useTodos } from "../../../store/todos.ts";
import { useModalState } from "../../../store/modalsState.ts";
import Checkbox from "antd/es/checkbox/Checkbox";

const useStyles = createUseStyles({
  todoWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  todoCard: {
    backgroundColor: "#FFF9DE",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
  },
  iconSize: {
    fontSize: "23px",
  },
  textSize: {
    fontSize: "16px",
  },
});

const TaskList = () => {
  const classes = useStyles();
  const {
    selectedTodo,
    todos,
    changeSelectedTodo,
    setTodos,
    changeIsDone,
    // isDone,
  } = useTodos();

  const { changeEditModalState, isEditModalOpen } = useModalState();

  const handleEditTodo = (todo: TodoType) => {
    changeEditModalState();
    changeSelectedTodo(todo);
  };

  useEffect(() => {
    axios
      .get<TodoType[]>("http://localhost:3000/api/todo")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.error("Err:", err);
      });
  }, []);

  const handleDeleteTodo = (id: number | string) => {
    axios
      .delete(`http://localhost:3000/api/todo/${id}`)
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch((err) => {
        console.error("Err:", err);
      });
  };

  const onChangeCheckbox = (id: number | string) => {
    const updatedIsDone = !todos.find((todo) => todo.id === id)?.isDone;
    axios
      .patch(`http://localhost:3000/api/todo/${id}/done`, {
        isDone: updatedIsDone,
      })
      .then(() => {
        changeIsDone();
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: updatedIsDone } : todo
        );
        setTodos(updatedTodos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className={classes.todoWrapper}>
      {todos.map((todo) => (
        <div className={classes.todoCard} key={todo.id}>
          <Flex justify="space-between">
            <Title level={3}>{todo.title}</Title>
            <Flex gap={15}>
              <DeleteOutlined
                className={classes.iconSize}
                onClick={() => handleDeleteTodo(todo.id)}
              />
              <EditOutlined
                className={classes.iconSize}
                onClick={() => handleEditTodo(todo)}
              />
              {isEditModalOpen &&
                selectedTodo &&
                selectedTodo.id === todo.id && (
                  <ModalEdit defaultValues={selectedTodo} />
                )}
            </Flex>
          </Flex>
          <Flex vertical>
            <Text className={classes.textSize}>{todo.content}</Text>
            <Text className={classes.textSize} type="secondary">
              {todo.category}
            </Text>
            <Checkbox
              checked={todo.isDone}
              onChange={() => onChangeCheckbox(todo.id)}
            >
              {todo.isDone ? "Done" : "In progress"}
            </Checkbox>
          </Flex>
        </div>
      ))}
    </section>
  );
};

export default TaskList;
