// Core
import { type FC } from "react";

// Components
import AppModal from "../../ui/AppModal";
import FormEditTask from "../FormEditTask";

// Definitions
import { type TodoType } from "../../../types/todo.ts";

// Hooks
import { useModalState } from "../../../store/modalsState.ts";

type ModalEditProps = {
  defaultValues: TodoType;
};

const ModalEdit: FC<ModalEditProps> = ({ defaultValues }) => {
  const { isEditModalOpen, changeEditModalState } = useModalState();

  const handleModalClose = () => {
    changeEditModalState();
  };

  return (
    <AppModal
      title="Edit task"
      setIsOpen={handleModalClose}
      isOpen={isEditModalOpen}
    >
      <FormEditTask defaultValues={defaultValues} />
    </AppModal>
  );
};

export default ModalEdit;
