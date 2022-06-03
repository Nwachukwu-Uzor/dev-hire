import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./app.module.scss";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className={styles.sidebar}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
