import DeveloperCard from "../DeveloperCard/DeveloperCard";
import styles from "./gallery.module.scss";

const Gallery = ({ developers }) => {
  return (
    <section className={styles.gallery}>
      {developers.map((dev) => (
        <DeveloperCard key={dev._id} developerDetail={dev._source} />
      ))}
    </section>
  );
};

export default Gallery;
