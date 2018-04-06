import React, { Component } from "react";
import { withProps, compose } from "recompose";
import { connect } from "react-redux";
import { fetchAllJokes } from "../actions/";
import { Button } from "./styled";

const FetchingButton = props => {
  return <Button onClick={() => props.fetchAllJokes(props.name)}>FetchAllJokes</Button>;
};

export default connect(state => ({ name: state.name }), { fetchAllJokes })(
  FetchingButton
);
