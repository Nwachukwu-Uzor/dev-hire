import styles from "./developerCard.module.scss";

const DeveloperCard = ({ developerDetail }) => {
  const isFavorite = true;
  const {
    avatar,
    service_photo,
    starting_from,
    display_name,
    service_description,
    service_expression,
  } = developerDetail;
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
        >
          <i className={`fa-solid fa-heart ${styles.icon}`}></i>
        </div>
      </div>
      <div className={styles.action}>
        <div className={styles.bio}>
          <h4>{display_name}</h4>
          <p>N{starting_from}</p>
        </div>
        <h4 className={styles.actionLink}>Hire</h4>
      </div>
    </div>
  );
};

export default DeveloperCard;
