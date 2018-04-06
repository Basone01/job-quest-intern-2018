import React from "react";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { Button } from "./styled";
import { submitUsername } from "../actions/name";
const enhance = compose(
  connect(
    state => ({
      firstname: state.name.firstname,
      lastname: state.name.lastname
    }),
    { submitUsername }
  ),
  withHandlers({
    onSubmit: props => event => {
      event.preventDefault();
      let username = {
        [event.target[0].name]: event.target[0].value,
        [event.target[1].name]: event.target[1].value
      };

      props.submitUsername(username);
    }
  })
);

const UsernameForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" name="firstName" placeholder="Firstname" />
      <input type="text" name="lastName" placeholder="Lastname" />
      <Button type="submit"> Let's Joke!! </Button>
    </form>
  );
};

export default enhance(UsernameForm);
