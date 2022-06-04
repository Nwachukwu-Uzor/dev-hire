import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Layout/Sidebar/Sidebar";
import Main from "./Layout/Main/Main";

import Spinner from "./UI/Spinner/Spinner";

import { fetchCurrencies } from "./store/actions/fetchCurrencies";
import { fetchDevelopers } from "./store/actions/fetchDevelopers";

import styles from "./app.module.scss";

const App = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.currencies);
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Spinner title={"Fetching data"} />
      ) : (
        <div className={styles.app}>
          <Sidebar />
          <Main />
        </div>
      )}
    </>
  );
};

export default App;
