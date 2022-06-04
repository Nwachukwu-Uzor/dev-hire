import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Sidebar from "./Layout/Sidebar/Sidebar";
import Main from "./Layout/Main/Main";

import { fetchDeveloper } from "./store/actions/fetchDevelopers";

import styles from "./app.module.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeveloper());
  }, [dispatch]);
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
