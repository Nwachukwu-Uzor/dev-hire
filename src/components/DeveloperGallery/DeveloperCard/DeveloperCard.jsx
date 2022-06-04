import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromFavorite,
  addToFavorite,
} from "../../../store/slices/developers";

import styles from "./developerCard.module.scss";

const DeveloperCard = ({ developerDetail }) => {
  const dispatch = useDispatch();
  const { currentCurrency } = useSelector((state) => state.currencies);
  const { symbol, divider } = currentCurrency;

  const [isFavorite, setIsFavorite] = useState(false);

  const {
    avatar,
    service_photo,
    starting_from,
    display_name,
    service_description,
    service_expression,
    profile_id,
  } = developerDetail;

  const handleFavoriteChange = () => {
    setIsFavorite((isFavorite) => !isFavorite);
    if (isFavorite) {
      dispatch(removeFromFavorite(profile_id));
      return;
    }
    dispatch(addToFavorite(profile_id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.images}>
        <img
          src={service_photo}
          alt={service_description}
          className={styles.mainImage}
        />
        <img src={avatar} alt={service_expression} className={styles.avatar} />
        <div
          className={`${styles.favoriteIcon} ${isFavorite && styles.favorite}`}
          onClick={handleFavoriteChange}
        >
          <i className={`fa-solid fa-heart ${styles.icon}`}></i>
        </div>
      </div>
      <div className={styles.action}>
        <div className={styles.bio}>
          <h4>{display_name}</h4>
          <p>
            {symbol} {(starting_from / divider).toFixed(2)}
          </p>
        </div>
        <h4 className={styles.actionLink}>Hire</h4>
      </div>
    </div>
  );
};

export default DeveloperCard;