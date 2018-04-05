import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import FetchingButton from "./components/fetchingbutton";
import { lifecycle, compose } from "recompose";
import { fetchAllJokes, fetchJokeById } from "./actions";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 360px;
  min-height: 480px;
  padding: 2em;
  margin: auto;
  margin-top: 2em;
  border-radius: 12px;
  box-shadow: 1px 2px 4px black;
`;

const componentName = props => {
  console.log(props.jokes);

  return (
    <div>
      {props.jokes.map(({ id, joke }) => (
        <div key={id}>
          <h2>{id}</h2>
          <p>{joke}</p>
        </div>
      ))}
    </div>
  );
};

const enhance = compose(
  connect(
    state => ({
      jokes: state.jokes
    }),
    { fetchAllJokes, fetchJokeById }
  ),
  lifecycle({
    componentDidMount() {
      console.log("recompose");

      this.props.fetchJokeById(1);
    }
  })
);

const A = enhance(componentName);

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Chuck Norris</h1>
        <A />
        <FetchingButton />
      </Wrapper>
    );
  }
}

export default App;
