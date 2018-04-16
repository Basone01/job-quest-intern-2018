import React from "react";
import {compose, withProps} from "recompose";
import {connect} from "react-redux";
import {fetchJokeById} from "../actions/";
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const JokeItem = props => {
  const {id, joke} = props;
  const noQuotEntityJoke = joke.split("&quot;").join('"');
  return (
    <ListGroupItem header={`#${id}`}>
      {noQuotEntityJoke}
    </ListGroupItem>
  );
};

const enhance = compose(connect(state => ({jokes: state.jokes.jokes}), {fetchJokeById}), withProps(props => ({
  jokes: props
    .jokes
    .map(joke => <JokeItem key={joke.id} {...joke}/>)
})));

const JokeList = ({jokes}) => {
  return <ListGroup>{jokes}</ListGroup>;
};

export default enhance(JokeList);
