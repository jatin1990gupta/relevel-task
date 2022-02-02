import React, { useState } from "react";
import styles from "./ImageComponent.css";
import ImageModal from "../ImageModal/ImageModal";

const ImageComponent = ({ Image }) => {
  const [display, setDisplay] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getRandomValue = () => Math.floor(Math.random() * 501);

  return (
    <div
      onMouseOver={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      className={styles.imageComponent}
      onClick={() => setShowModal(true)}
    >
      <ImageModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        Image={Image}
      />
      <img src={Image} className={`${display ? styles.hoverState : ""}`} />
      {display && (
        <div className={styles.detailBox}>
          <p>{getRandomValue()} likes</p>
          <p>{getRandomValue()} comments</p>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
