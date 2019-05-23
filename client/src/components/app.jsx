import React from 'react';
import Reviews from './reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Reviews db={this.props} />
      </div>
    );
  }
}
export default App;
