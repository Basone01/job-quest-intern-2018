import React from "react";
import { compose, withProps } from "recompose";
import { connect } from "react-redux";
import { fetchJokeById } from "../actions/";
import { Quote, Flex } from "./styled";

const JokesBox = Flex.extend`
  flex-grow: 1;
  align-self: stretch;
  max-height: 250px;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const JokeItem = props => {
  const { id, joke } = props;
  return (
    <div>
      <h2>#{id}</h2>
      <Quote dangerouslySetInnerHTML={{ __html: joke }} />
      <hr />
    </div>
  );
};

const enhance = compose(
  connect(state => ({ jokes: state.jokes.jokes }), { fetchJokeById }),
  withProps(props => ({
    jokes: props.jokes.map(joke => <JokeItem key={joke.id} {...joke} />)
  }))
);

const JokeList = ({ jokes }) => {
  return <JokesBox fd="column">{jokes}</JokesBox>;
};

export default enhance(JokeList);
