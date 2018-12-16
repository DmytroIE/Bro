import React from 'react';

import QuestionOption from './QuestionOption/QuestionOption';

import styles from './QuestionOptionsGrid.module.css';

const QuestionOptionsGrid = ({ questionOptions = [], onOptionClick }) => (
  <ul className={styles.grid}>
    {questionOptions.map(({ id, isChosen, text, letter }) => (
      <li key={id} className={styles.item}>
        <QuestionOption
          isChosen={isChosen}
          text={text}
          letter={letter}
          onClick={() => {
            onOptionClick(id);
          }}
        />
      </li>
    ))}
  </ul>
);

export default QuestionOptionsGrid;
