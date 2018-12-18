import React, { Component, createRef } from 'react';

const style = {
  height: '480px',
  backgroundColor: '#a3a',
};

class MainPage extends Component {
  ref = createRef();

  componentDidUpdate() {}

  render() {
    // const { innerRef } = this.props;
    return (
      <div ref={this.ref} style={style}>
        Main Page
      </div>
    );
  }
}
export default MainPage;
// export default React.forwardRef((props, ref) => (
//   <ResultsPage innerRef={ref} {...props} />
// ));
