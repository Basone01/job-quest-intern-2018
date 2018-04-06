import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import FetchingButton from "./components/fetchingbutton";
import { lifecycle, compose } from "recompose";
import { fetchAllJokes, fetchJokeById } from "./actions";
import { Wrapper } from "./components/styled";
import JokeList from "./components/jokeList";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Chuck Norris</h1>
        <JokeList />
        <FetchingButton />
      </Wrapper>
    );
  }
}

export default App;
