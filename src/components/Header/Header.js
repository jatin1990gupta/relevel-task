import React from "react";
import styles from "./Header.css";
import UserImg from "../../assets/images/user.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1>Instagram</h1>
      </Link>
      <Link to="/profile">
        <img src={UserImg} />
      </Link>
    </div>
  );
};

export default Header;
