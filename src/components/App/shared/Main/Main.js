import React, { Component, createRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../MainPage/MainPage';
import TestPage from '../../TestPage/TestPage';
import ResultsPage from '../../ResultsPage/ResultsPage';

import styles from './Main.module.css';

class Main extends Component {
  // mainRef = createRef();

  testRef = createRef();

  // resultsRef = createRef();

  state = { height: 0 };

  componentDidMount() {
    // if (this.mainRef.current)
    //   console.log(this.mainRef.current.ref.current.clientHeight);
    // if (this.testRef.current)
    //   console.log(this.testRef.current.ref.current.clientHeight);
    // if (this.resultsRef.current)
    //   console.log(this.resultsRef.current.ref.current.clientHeight);
    // const compStyles = getComputedStyle(this.bgRef.current);
    // // debugger
    // if (compStyles.position === 'absolute') {
    //   this.setState({ height: Number.parseInt(compStyles.height, 10) });
    // } else {
    //   this.setState({ height: 0 });
    // }
  }

  componentDidUpdate() {
    // if (this.mainRef.current)
    //   console.log(this.mainRef.current.ref.current.clientHeight);
    // if (this.testRef.current)
    //   console.log(this.testRef.current.ref.current.clientHeight);
    // if (this.resultsRef.current)
    //   console.log(this.resultsRef.current.ref.current.clientHeight);
    // const compStyles = getComputedStyle(this.bgRef.current);
    // // debugger
    // if (compStyles.position === 'absolute') {
    //   this.setState({ height: Number.parseInt(compStyles.height, 10) });
    // } else {
    //   this.setState({ height: 0 });
    // }
  }

  handleResize = newHeight => {
    const { height } = this.state;
    if (height !== newHeight) this.setState({ height: newHeight });
  };

  render() {
    const { height } = this.state;
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <MainPage />
              </div>
            )}
          />
          <Route
            path="/testpage"
            render={() => (
              <div className={styles.absolute}>
                <TestPage onResize={this.handleResize} />
              </div>
            )}
          />
          <Route
            path="/testpage"
            render={() => (
              <div>
                <ResultsPage />
              </div>
            )}
          />
          {/* <Route
            exact
            path="/"
            render={() => <MainPage ref={this.mainRef} />}
          />
          <Route path="/testpage" component={TestPage} />
          <Route
            path="/resultspage"
            render={() => <ResultsPage ref={this.resultsRef} />}
          /> */}
        </Switch>

        <div className={styles.container} style={{ height }}>
          background
        </div>
      </>
    );
  }
}

export default Main;
