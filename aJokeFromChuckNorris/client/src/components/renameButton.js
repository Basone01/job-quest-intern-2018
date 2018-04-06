import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { fetchAllJokes } from "../actions/";
import { Button } from "./styled";
import UsernameForm from "./usernameForm";
const enhance = compose(
  connect(
    state => ({
      name: state.name
    }),
    {}
  )
);

const RenameButton = props => {
  const { firstName, lastName } = props.name;
  return (
    <div>
      <Button>
        Wanna be like {firstName} {lastName}?
      </Button>
      <UsernameForm/>
    </div>
  );
};

export default enhance(RenameButton);
