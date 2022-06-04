import { useSelector } from "react-redux";

import Gallery from "../../components/DeveloperGallery/Gallery/Gallery";
import Spinner from "../../UI/Spinner/Spinner";
import styles from "./home.module.scss";

const Home = () => {
  const { loading, error, developers } = useSelector(
    (state) => state.developers
  );

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
