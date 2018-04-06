import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Wrapper } from "./components/styled";
import { JokeList, FetchingButton, RenameButton } from "./components/";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Chuck Norris</h1>
        <RenameButton/>
        <FetchingButton />
        <JokeList />
      </Wrapper>
    );
  }
}

export default App;
