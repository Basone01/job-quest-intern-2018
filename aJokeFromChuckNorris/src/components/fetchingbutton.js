import React, { Component } from "react";
import { withProps, compose } from "recompose";
import { connect } from "react-redux";
import { fetchAllJokes, fetchRandomJokes } from "../actions/";
import { Button } from "./styled";

const FetchingButton = props => {
  return (
    <Button onClick={() => props.fetchFunct(props.name)}>{props.text}</Button>
  );
};

export const FetchAllButton = compose(
  connect(state => ({ name: state.name }), {
    fetchFunct: fetchAllJokes
  }),
  withProps({
    text: "FetchAllJokes"
  })
)(FetchingButton);

export const FetchRandomButton = compose(
  connect(state => ({ name: state.name }), {
    fetchFunct: fetchRandomJokes
  }),
  withProps({
    text: "FetchRandomJokes"
  })
)(FetchingButton);
