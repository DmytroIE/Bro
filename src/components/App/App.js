import React from 'react';

import Header from './shared/Header/Header';
import Main from './shared/Main/Main';
import Footer from './shared/Footer/Footer';

import styles from './App.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <Header />
    <Main>
      {/* {bgRef => (
        <Switch>
          <Route exact path="/" render={() => <MainPage ref={bgRef} />} />
          <Route path="/testpage" render={() => <TestPage ref={bgRef} />} />
          <Route
            path="/resultspage"
            render={() => <ResultsPage ref={bgRef} />}
          />
        </Switch>
      )} */}
    </Main>
    <Footer />
  </div>
);

export default App;
