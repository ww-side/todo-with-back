// Components
import Header from "./components/common/Header";
import Layout from "./components/layouts/Layout";
import TaskList from "./components/common/TaskList";

const App = () => {
  return (
    <Layout>
      <Header />
      <TaskList />
    </Layout>
  );
};

export default App;
