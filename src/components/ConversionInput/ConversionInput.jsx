import styles from "./conversionInput.module.scss";

const ConversionInput = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit} className={styles.optionForm}>
      <img
        src="./assets/nigerian-flag.jpg"
        alt="flag"
        className={styles.flag}
      />
      <select>
        <option className={styles.option}>Name</option>
      </select>
    </form>
  );
};

export default ConversionInput;
