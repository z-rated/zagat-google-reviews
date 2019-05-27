/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import Review from './review';

const GoogleReviews = styled.div`
  padding: 24px 0px 34px;
  font: 16px Calibre-Semibold;
  color: #656666;
  border-bottom: 1px solid lightgrey;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.starRating = this.starRating.bind(this);
  }

  starRating() {
    this.num = Math.random() * 5;
    this.stars = this.num.toFixed(1);

    return this.stars;
  }


  render() {
    const { db } = this.props;
    return (
      <div>
        <GoogleReviews>
          GOOGLE REVIEWS
          {this.starRating()}
        </GoogleReviews>
        {db.map(review => <Review review={review} key={review.review_id} />)}
      </div>
    );
  }
}

export default Reviews;
