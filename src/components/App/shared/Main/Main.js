import React from 'react';

import styles from './Main.module.css';

const Main = ({ children }) => (
  <div className={styles.container}> {children} </div>
);

export default Main;
