import React from "react";
import {withHandlers, compose, withState} from "recompose";
import {connect} from "react-redux";
import {fetchJokeById} from "../actions/";
import {
  Form,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup
} from 'react-bootstrap'

const enhance = compose(connect(null, {fetchJokeById}), withState("jokeId", "changeJokeId", 1), withHandlers({
  onSubmit: props => e => {
    e.preventDefault();
    props.fetchJokeById(props.jokeId);
  }
}));

const FetchByIdForm = ({jokeId, changeJokeId, fetchJokeById, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup controlId="jokeIdForm">
        <ControlLabel>
          Enter a Joke Number:
        </ControlLabel>

        <InputGroup>
          <FormControl
            id="jokeIdForm"
            type="number"
            placeholder="Enter your joke number"
            style={{
            textAlign: "right"
          }}
            value={jokeId}
            min="1"
            onChange={e => e.target.value !== "" && changeJokeId(e.target.value)}/>
          <InputGroup.Button>
            <Button type="submit">Get It!</Button>
          </InputGroup.Button>

        </InputGroup>

      </FormGroup>
    </Form>
  );
};

export default enhance(FetchByIdForm);
