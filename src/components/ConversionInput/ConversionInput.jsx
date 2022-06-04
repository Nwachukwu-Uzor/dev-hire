import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchCurrency } from "../../store/slices/currencies";

import styles from "./conversionInput.module.scss";

const ConversionInput = () => {
  const { loading, currencies, currentCurrency } = useSelector(
    (state) => state.currencies
  );

  const dispatch = useDispatch();

  const handleCurrencySwitch = (e) => {
    dispatch(switchCurrency(e.target.value));
    // console.log(e.target.value);
  };

  return (
    <div className={styles.optionForm}>
      {!loading && currentCurrency !== null && (
        <div className={styles.inputHolder}>
          <img
            src={currentCurrency.flag_url}
            alt={currentCurrency.name}
            className={styles.flag}
          />
          <select onChange={handleCurrencySwitch}>
            {currencies.map((currency) => (
              <option
                className={styles.option}
                key={currency.id}
                value={currency.id}
              >
                {currency.short}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ConversionInput;
