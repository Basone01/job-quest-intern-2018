import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  max-width: 360px;
  min-height: 480px;
  padding: 2em;
  margin: auto;
  margin-top: 2em;
  border-radius: 12px;
  box-shadow: 1px 2px 4px black;
  
`;

class App extends Component {
  render() {
    return <Wrapper><h1>Chuck Norris</h1></Wrapper>;
  }
}

export default App;
