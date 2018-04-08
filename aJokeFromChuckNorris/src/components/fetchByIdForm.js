import React from "react";
import { withHandlers, compose, withState } from "recompose";
import { connect } from "react-redux";
import { fetchJokeById } from "../actions/";
import { Button, Flex } from "./styled";

const enhance = compose(
  connect(null, {
    fetchJokeById
  }),
  withState("jokeId", "changeJokeId", 1),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      props.fetchJokeById(props.jokeId);
    }
  })
);

const FetchByIdForm = ({ jokeId, changeJokeId, fetchJokeById, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Flex fd="row" ali="baseline" jc="center">
        <label>
          Joke Number:{" "}
          <input
            type="number"
            placeholder="Enter your joke number"
            style={{ textAlign: "right" }}
            value={jokeId}
            min="1"
            onChange={e =>
              e.target.value !== "" && changeJokeId(e.target.value)
            }
          />
        </label>
        <Button type="submit">Get it</Button>
      </Flex>
    </form>
  );
};

export default enhance(FetchByIdForm);
