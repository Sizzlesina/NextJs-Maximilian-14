"use client";

import { useRef } from "react";
import styles from "./ImagePicker.module.css";

function ImagePicker({ label, name }) {
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type='file'
          id={name}
          accept='image/png, image/jpg'
          name={name}
          ref={imageInputRef}
        />
      </div>
      <button className={styles.button} type='button' onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  );
}

export default ImagePicker;
