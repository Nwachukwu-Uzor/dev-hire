import DeveloperCard from "../DeveloperCard/DeveloperCard";
import styles from "./gallery.module.scss";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <DeveloperCard />
      <DeveloperCard />
      <DeveloperCard />
      <DeveloperCard />
      <DeveloperCard />
    </section>
  );
};

export default Gallery;
