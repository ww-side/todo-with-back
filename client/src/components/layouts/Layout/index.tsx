// Core
import { type FC, type ReactNode } from "react";
import { createUseStyles } from "react-jss";

type LayoutProps = {
  children: ReactNode;
};

const useStyles = createUseStyles({
  wrapper: {
    marginLeft: "50px",
    marginRight: "50px",
  },
});

const Layout: FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
};

export default Layout;
