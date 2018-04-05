import React, { Component } from "react";
import { withProps, compose } from "recompose";
import { connect } from "react-redux";
import { fetchAllJokes } from "../actions/";

const FetchingButton = props => {
  return <button onClick={() => props.fetchAllJokes()}>FetchAllJokes</button>;
};

export default connect(null, { fetchAllJokes })(FetchingButton);
