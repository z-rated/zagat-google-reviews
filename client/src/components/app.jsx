import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Reviews from './reviews';

const Module = styled.div`
  padding: 32px;
  margin: 32px;
  // margin-right: 150px;
  // min-width: 22vw;
  // max-width: 330px;
  // max-height: 80vh;
  background-color: white;
  float: right;
  overflow: scroll;
  @font-face {
    font-family: "Calibre-Regular";
    src: url("../../public/fonts/CalibreWeb-Regular.woff2") format("woff2");
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [],
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: `/api/restaurants/${this.randomRestaurant()}/googlereviews`,
      success: (data) => {
        this.setState({
          current: data,
        });
      },
    });
  }

  randomRestaurant() {
    this.num = Math.floor(Math.random() * 100);
    return this.num;
  }

  render() {
    const { current } = this.state;
    return (
      <Module>
        <Reviews db={current} />
      </Module>
    );
  }
}
export default App;
