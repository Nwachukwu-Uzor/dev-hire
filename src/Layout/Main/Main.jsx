import React from "react";
import Home from "../../Pages/Home/Home";

import { Routes, Route } from "react-router-dom";

import ConversionInput from "../../components/ConversionInput/ConversionInput";
import styles from "./main.module.scss";
import Favorite from "../../Pages/Favorite/Favorite";

const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="favorite" element={<Favorite />} /> */}
      </Routes>
      <div className={styles.footerSeperator}></div>
      <div className={styles.mainFooter}>
        <p>&copy; 2022 DevHire</p>
        <ConversionInput />
      </div>
    </div>
  );
};

export default Main;
