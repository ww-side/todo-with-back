// Components
import AppModal from "../../ui/AppModal";
import FormAddTask from "../FormAddTask";

// Hooks
import { useModalState } from "../../../store/modalsState.ts";

const ModalAdd = () => {
  const { isAddModalOpen, changeAddModalState } = useModalState();

  return (
    <>
      <AppModal
        title="Create a new task"
        isOpen={isAddModalOpen}
        setIsOpen={changeAddModalState}
      >
        <FormAddTask />
      </AppModal>
    </>
  );
};

export default ModalAdd;
