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
  connect(null, {
    fetchFunct: fetchAllJokes
  }),
  withProps({
    text: "FetchAllJokes"
  })
)(FetchingButton);

export const FetchRandomButton = compose(
  connect(null, {
    fetchFunct: fetchRandomJokes
  }),
  withProps({
    text: "FetchRandomJokes"
  })
)(FetchingButton);
