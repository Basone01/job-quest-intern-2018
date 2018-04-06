import React, { Component } from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { fetchAllJokes } from "../../actions/";
import { Button } from "../styled";
import UsernameForm from "./usernameForm";
const enhance = compose(
  connect(
    state => ({
      name: state.name
    }),
    {}
  ),
  withState("isFormDisplay", "toggleForm", false),
  withHandlers({
    onClick: props => e => {
      props.toggleForm(!props.isFormDisplay);
    }
  })
);

const RenameButton = ({ isFormDisplay, name, onClick, toggleForm }) => {
  const { firstName, lastName } = name;
  return (
    <div>
      <Button onClick={onClick}>
        Wanna be like {firstName} {lastName}?
      </Button>
      {isFormDisplay && <UsernameForm />}
    </div>
  );
};

export default enhance(RenameButton);
