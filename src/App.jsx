import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Sidebar from "./Layout/Sidebar/Sidebar";
import Main from "./Layout/Main/Main";

import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
