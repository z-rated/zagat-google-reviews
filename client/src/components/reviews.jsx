/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        // eslint-disable-next-line react/prop-types
        {this.props.db.map(review => <div>{review}</div>)}
      </div>
    );
  }
}
export default Reviews;
