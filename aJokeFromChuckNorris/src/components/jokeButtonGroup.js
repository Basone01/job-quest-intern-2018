import React from "react";
import {connect} from "react-redux";
import {ButtonGroup, Button} from 'react-bootstrap'
import {fetchAllJokes, fetchRandomJokes, clearAllJokes} from "../actions/";

const JokeButtonGroup = ({clearAllJokes, fetchAllJokes, fetchRandomJokes}) => {
  return (
    <ButtonGroup justified>
      <ButtonGroup>
        <Button onClick={fetchRandomJokes}>
          Get One
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={fetchAllJokes}>
          Get All
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={clearAllJokes}>
          Clear
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default connect(state => ({isError: state.error.isError}), {clearAllJokes, fetchAllJokes, fetchRandomJokes})(JokeButtonGroup);
