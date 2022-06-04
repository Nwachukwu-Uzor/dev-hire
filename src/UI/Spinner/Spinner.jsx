import styles from "./spinner.module.scss";

const Spinner = ({ title }) => {
  return (
    <div className={styles.spinner}>
      <div>
        <div className={styles.loaderRipple}>
          <div></div>
          <div></div>
        </div>
        <h4 className={styles.spinnerTitle}>{title}</h4>
      </div>
    </div>
  );
};

export default Spinner;
