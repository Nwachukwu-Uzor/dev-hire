import { useSelector } from "react-redux";

import Gallery from "../../components/DeveloperGallery/Gallery/Gallery";
import styles from "./home.module.scss";

const Home = () => {
  const { loading, error, developers } = useSelector(
    (state) => state.developers
  );
  return (
    <div>
      <h1>Hire Top Developers</h1>
      {loading ? <h1>Loading</h1> : <Gallery developers={developers} />}
    </div>
  );
};

export default Home;
