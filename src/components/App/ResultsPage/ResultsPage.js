import React, { Component, createRef } from 'react';

const style = {
  height: '480px',
  backgroundColor: '#4ea',
};

class ResultsPage extends Component {
  ref = createRef();

  componentDidUpdate() {}

  render() {
    // const { innerRef } = this.props;
    return (
      <div ref={this.ref} style={style}>
        Results Page
      </div>
    );
  }
}
export default ResultsPage;
// export default React.forwardRef((props, ref) => (
//   <ResultsPage innerRef={ref} {...props} />
// ));
