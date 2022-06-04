import { useDispatch, useSelector } from "react-redux";

import { fetchDeveloper } from "../../store/actions/fetchDevelopers";

import Gallery from "../../components/DeveloperGallery/Gallery/Gallery";
import Spinner from "../../UI/Spinner/Spinner";
import styles from "./home.module.scss";
import { useEffect } from "react";

const Home = () => {
  const { loading, error, developers } = useSelector(
    (state) => state.developers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeveloper());
    console.log(loading);
  }, [dispatch]);

  return (
    <div>
      <h1>Hire Top Developers</h1>
      {loading ? (
        <Spinner title={"Fetching Developers"} />
      ) : (
        <Gallery developers={developers} />
      )}
    </div>
  );
};

export default Home;
