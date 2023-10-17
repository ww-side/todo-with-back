// Core
import { type FC, type ReactNode } from "react";
import Modal from "antd/es/modal/Modal";

type AppModalProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
};

const AppModal: FC<AppModalProps> = ({
  title,
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal title={title} open={isOpen} onCancel={setIsOpen} footer={null}>
      {children}
    </Modal>
  );
};

export default AppModal;
