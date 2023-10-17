// Core
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import { createUseStyles } from "react-jss";

// Components
import { PlusOutlined } from "@ant-design/icons";
import ModalAdd from "../ModalAdd";

// Hooks
import { useModalState } from "../../../store/modalsState.ts";

const useStyles = createUseStyles({
  iconClasses: {
    fontSize: "25px",
    cursor: "pointer",
  },
});

const Header = () => {
  const classes = useStyles();
  const { changeAddModalState } = useModalState();

  return (
    <header>
      <Flex gap="middle" justify="space-between" align="center">
        <Title level={2} type="secondary">
          todo
        </Title>
        <PlusOutlined
          className={classes.iconClasses}
          onClick={changeAddModalState}
        />
        <ModalAdd />
      </Flex>
    </header>
  );
};

export default Header;
