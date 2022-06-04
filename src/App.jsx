import Sidebar from "./Layout/Sidebar/Sidebar";
import styles from "./app.module.scss";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
