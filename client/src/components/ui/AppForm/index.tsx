// Core
import { type FC } from "react";
import { Button, Flex } from "antd";
import { Controller, type FieldValues, useForm } from "react-hook-form";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUseStyles } from "react-jss";

// Definitions
import { type TodoType } from "../../../types/todo.ts";

// Utils
import { formValidationSchema } from "./config.ts";

type AppFormProps = {
  onSubmit: (data: FieldValues) => void;
  defaultValues: Omit<TodoType, "id">;
  isReset?: boolean;
};

const useStyles = createUseStyles({
  inputBg: {
    backgroundColor: "#efebdc",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  errorText: {
    color: "red",
  },
});

const AppForm: FC<AppFormProps> = ({ onSubmit, isReset, defaultValues }) => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formValidationSchema),
    defaultValues: defaultValues,
    reValidateMode: "onSubmit",
  });

  const onSubmitWithReset = (data: FieldValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(isReset ? onSubmitWithReset : onSubmit)}>
      <Flex gap={10} vertical>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <>
              <Input
                {...field}
                className={classes.inputBg}
                placeholder="Title"
              />
              <span className={classes.errorText}>
                <>{errors.title && errors.title.message}</>
              </span>
            </>
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <>
              <TextArea
                {...field}
                className={classes.inputBg}
                rows={4}
                placeholder="Content"
                style={{ resize: "none" }}
              />
              <span className={classes.errorText}>
                <>{errors.content && errors.content.message}</>
              </span>
            </>
          )}
        />
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <>
              <Input
                {...field}
                className={classes.inputBg}
                placeholder="Category"
              />
              <span className={classes.errorText}>
                <>{errors.category && errors.category.message}</>
              </span>
            </>
          )}
        />
      </Flex>
      <Button
        htmlType="submit"
        style={{
          backgroundColor: "#69665C",
          borderColor: "#69665C",
          color: "#FFFFFF",
          width: "max-content",
        }}
      >
        Create a new task
      </Button>
    </form>
  );
};

export default AppForm;
