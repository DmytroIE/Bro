import React from 'react';

import styles from './TestTitle.module.css';

const TestTitle = ({ title }) => <p className={styles.title}>{title}</p>;

export default TestTitle;
