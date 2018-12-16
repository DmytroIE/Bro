import React from 'react';

import styles from './TestQuestion.module.css';

const TestQuestion = ({ imgURL, text }) => (
  <div className={styles.container}>
    <p className={styles.text}>{text}</p>
    <div className={styles.imgContainer}>
      <img src={imgURL} alt="Task text" className={styles.img} />
    </div>
  </div>
);

export default TestQuestion;
