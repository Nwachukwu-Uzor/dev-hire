import styles from "./sidebar.module.scss";
import { useState } from "react";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => setOpenSidebar((opened) => !opened);

  return (
    <>
      <i
        className={`fa-solid fa-bars ${styles.openIcon}`}
        onClick={handleOpenSidebar}
      ></i>
      <div className={`${styles.sidebar} ${!openSidebar && styles.closed}`}>
        <img className={styles.logo} src="./assets/Logo.png" alt="logo" />
        <i
          className={`fa-solid fa-xmark ${styles.closeIcon}`}
          onClick={handleOpenSidebar}
        ></i>
        <ul className={styles.navLinks}>
          <li>
            <a href="#" className={styles.activeLink}>
              <i className="fa-solid fa-magnifying-glass"></i>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
              Favorite
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
