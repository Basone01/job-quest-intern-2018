import React from "react";
import { compose, mapProps, lifecycle, withProps } from "recompose";
import { connect } from "react-redux";
import { fetchJokeById } from "../actions/";
import { Quote, Flex } from "./styled";

const JokeItem = props => {
  const { id, joke, catagories } = props;
  return (
    <div>
      <h2>{id}</h2>
      <Quote dangerouslySetInnerHTML={{__html: joke}}></Quote>
      
      <hr />
    </div>
  );
};

const enhance = compose(
  connect(state => ({ jokes: state.jokes.jokes }), { fetchJokeById })
);

const JokeList = props => {
  return (
    <Flex fd="column">{props.jokes.map(joke => <JokeItem key={joke.id} {...joke} />)}</Flex>
  );
};

export default enhance(JokeList);
