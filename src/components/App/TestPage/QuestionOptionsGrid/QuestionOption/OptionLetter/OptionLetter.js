import React from 'react';

import styles from './OptionLetter.module.css';

const OptionLetter = ({ letter }) => (
  <div className={styles.circle}>{letter}</div>
);

export default OptionLetter;
