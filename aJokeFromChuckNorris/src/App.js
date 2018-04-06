import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Wrapper } from "./components/styled";
import {
  JokeList,
  FetchAllButton,
  FetchRandomButton,
  RenameForm
} from "./components/";
import Title from "./components/title";
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title />
        <RenameForm />
        <FetchAllButton />
        <FetchRandomButton/>
        <JokeList />
      </Wrapper>
    );
  }
}

export default App;
