import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Reviews from './reviews';

const Mod = styled.div`
  padding: 32px;
  margin: 32px;
  margin-right: 150px;
  min-width: 22vw;
  max-width: 330px;
  max-height: 80vh;
  font: 15px;
  background-color: white;
  float: right;
  overflow: scroll;
  @font-face {
    font-family: "Calibre-Regular";
    src: url("http://localhost:3003/fonts/CalibreWeb-Regular.woff2") format("woff2");
  }
  @font-face {
    font-family: "Calibre-Semibold";
    src: url("http://localhost:3003/fonts/CalibreWeb-Semibold.woff2") format("woff2");
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
    const id = window.location.pathname.substring(13);
    $.ajax({
      type: 'GET',
      url: `/restaurants/${id}/googlereviews`,
      success: (data) => {
        this.setState({
          current: data,
        });
      },
    });
  }

  render() {
    const { current } = this.state;
    return (
      <Mod>
        <Reviews db={current} />
      </Mod>
    );
  }
}
export default App;
