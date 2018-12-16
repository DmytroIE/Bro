import React from 'react';

import Header from './shared/Header/Header';
import Main from './shared/Main/Main';
import Footer from './shared/Footer/Footer';
import MainPage from './MainPage/MainPage';
import TestPage from './TestPage/TestPage';
import ResultsPage from './ResultsPage/ResultsPage';

import styles from './App.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <Header />
    <Main>
      <MainPage />
      <TestPage />
      <ResultsPage />
    </Main>
    <Footer />
  </div>
);

export default App;
