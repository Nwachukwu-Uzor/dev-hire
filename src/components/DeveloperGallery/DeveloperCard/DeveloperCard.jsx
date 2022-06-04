import styles from "./developerCard.module.scss";

const DeveloperCard = () => {
  const isFavorite = true;
  return (
    <div className={styles.card}>
      <div className={styles.images}>
        <img
          src="./assets/dummy-coding.jpg"
          alt="hire a top developer"
          className={styles.mainImage}
        />
        <img
          src="./assets/dummy-avatar.jpg"
          alt="hire a top developer"
          className={styles.avatar}
        />
        <div
          className={`${styles.favoriteIcon} ${isFavorite && styles.favorite}`}
        >
          <i className={`fa-solid fa-heart ${styles.icon}`}></i>
        </div>
      </div>
      <div className={styles.action}>
        <div className={styles.bio}>
          <h4>Dominic</h4>
          <p>N5,000</p>
        </div>
        <h4 className={styles.actionLink}>Hire</h4>
      </div>
    </div>
  );
};

export default DeveloperCard;
