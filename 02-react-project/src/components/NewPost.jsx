// Built-in imports
import { useState } from "react";
// Style import
import styles from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function handleChangeBody(e) {
    setEnteredBody(e.target.value);
  }

  function handleChangeAuthor(e) {
    setEnteredAuthor(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' rows={3} required onChange={handleChangeBody} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={handleChangeAuthor} />
      </p>
      <p className={styles.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
