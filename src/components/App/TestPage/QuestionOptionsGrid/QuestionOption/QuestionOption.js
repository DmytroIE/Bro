import React from 'react';

import OptionLetter from './OptionLetter/OptionLetter';

import styles from './QuestionOption.module.css';

const QuestionOption = ({ isChosen, text, letter, onClick }) => (
  <button
    type="button"
    className={isChosen ? styles.selected : styles.container}
    onClick={onClick}
  >
    <div className={styles.letter}>
      <OptionLetter letter={letter} />
    </div>
    <p className={styles.text}>{text}</p>
  </button>
);

export default QuestionOption;
