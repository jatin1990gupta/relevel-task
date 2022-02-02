import React from "react";
import styles from "./Profile.css";
import UserImg from "../../assets/images/user.jpg";
import Pic1 from "../../assets/images/photo1.jpeg";
import Pic2 from "../../assets/images/photo2.jpeg";
import Pic3 from "../../assets/images/photo3.jpeg";
import Pic4 from "../../assets/images/photo4.jpeg";
import Pic5 from "../../assets/images/photo5.jpeg";
import Pic6 from "../../assets/images/photo6.jpeg";
import ImageComponent from "../Utils/ImageComponent/ImageComponent";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.details}>
        <div className={styles.detailsLeft}>
          <img src={UserImg} />
        </div>
        <div className={styles.detailsRight}>
          <p className={styles.userName}>through_my_quirky_lens</p>
          <ul>
            <li>
              <span>40</span> posts
            </li>
            <li>
              <span>283</span> followers
            </li>
            <li>
              <span>274</span> following
            </li>
          </ul>
          <div className={styles.nameSection}>
            <p>Rushabh Shah</p>
            <p>The world through my lens.</p>
          </div>
        </div>
      </div>
      <div className={styles.postsContainer}>
        <ImageComponent Image={Pic1} />
        <ImageComponent Image={Pic2} />
        <ImageComponent Image={Pic3} />
        <ImageComponent Image={Pic4} />
        <ImageComponent Image={Pic5} />
        <ImageComponent Image={Pic6} />
      </div>
    </div>
  );
};

export default Profile;
