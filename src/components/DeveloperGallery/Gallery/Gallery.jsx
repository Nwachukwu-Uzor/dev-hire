import DeveloperCard from "../DeveloperCard/DeveloperCard";
import styles from "./gallery.module.scss";

const Gallery = ({ developers }) => {
  console.log(developers);
  return (
    <section className={styles.gallery}>
      {/* <DeveloperCard />
      <DeveloperCard />
      <DeveloperCard />
      <DeveloperCard />
      <DeveloperCard /> */}
      {developers.map((dev) => (
        <DeveloperCard key={dev._id} developerDetail={dev._source} />
      ))}
    </section>
  );
};

export default Gallery;
