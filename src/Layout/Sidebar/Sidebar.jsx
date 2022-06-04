import { useState } from "react";

import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.scss";

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
        <nav className={styles.navLinks}>
          <NavLink
            to="/"
            className={(data) =>
              `${styles.navLink} ${data.isActive && styles.activeLink}`
            }
            onClick={handleOpenSidebar}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            Home
          </NavLink>
          <NavLink
            to="/favorite"
            onClick={handleOpenSidebar}
            className={(data) =>
              `${styles.navLink} ${data.isActive && styles.activeLink}`
            }
          >
            <i className="fa-regular fa-heart"></i>
            Favorite
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
