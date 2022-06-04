import { useSelector } from "react-redux";

import Gallery from "../../components/DeveloperGallery/Gallery/Gallery";

import styles from "./favorites.module.scss";

const Favorite = () => {
  const { favoriteDevelopers } = useSelector((state) => state.developers);
  return (
    <div>
      <h1>Favorites</h1>
      {favoriteDevelopers.length ? (
        <Gallery developers={favoriteDevelopers} />
      ) : (
        <div className={styles.noFavorite}>
          <h4>No Favorites yet!</h4>
        </div>
      )}
    </div>
  );
};

export default Favorite;
