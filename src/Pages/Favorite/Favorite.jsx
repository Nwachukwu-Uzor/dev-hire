import { useSelector } from "react-redux";

import Gallery from "../../components/DeveloperGallery/Gallery/Gallery";

const Favorite = () => {
  const { favoriteDevelopers } = useSelector((state) => state.developers);
  console.log(favoriteDevelopers);
  return (
    <div>
      <h1>Favorites</h1>
      {favoriteDevelopers.length ? (
        <Gallery developers={favoriteDevelopers} />
      ) : (
        <div>No Favorites yet!</div>
      )}
    </div>
  );
};

export default Favorite;
