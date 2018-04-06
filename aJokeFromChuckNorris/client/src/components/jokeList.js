import React from "react";
import { compose, mapProps, lifecycle, withProps } from "recompose";
import { connect } from "react-redux";
import { fetchJokeById } from "../actions/";

const JokeItem = props => {
  const { id, joke, catagories } = props;
  return (
    <div>
      <h2>{id}</h2>
      <p>{joke}</p>
    </div>
  );
};

const enhance = compose(
  connect(state => ({ jokes: state.jokes.jokes }), { fetchJokeById })
);

const JokeList = props => {
  return (
    <div>{props.jokes.map(joke => <JokeItem key={joke.id} {...joke} />)}</div>
  );
};

export default enhance(JokeList);
