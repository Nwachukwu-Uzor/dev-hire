import { useSelector } from "react-redux";

import Gallery from "../../components/DeveloperGallery/Gallery/Gallery";

const Favorite = () => {
  const favorites = useSelector((state) => state.developers);
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length ? (
        <Gallery developers={favorites} />
      ) : (
        <div>No Favorites yet!</div>
      )}
    </div>
  );
};

export default Favorite;
