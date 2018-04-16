import React from "react";
import {connect} from "react-redux";
import {compose, withHandlers} from "recompose";
import {Button, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';
import {submitUsername} from "../../actions/name";

const enhance = compose(connect(state => ({firstname: state.name.firstname, lastname: state.name.lastname}), {submitUsername}), withHandlers({
  onSubmit: props => event => {
    event.preventDefault();
    let username = {
      [event.target[0].name]: event.target[0].value,
      [event.target[1].name]: event.target[1].value
    };
    props.submitUsername(username);
    props.afterSubmit();
  }
}));

const UsernameForm = props => {
  return (
    <Form onSubmit={props.onSubmit}>

      <FormGroup controlId="firstNameForm">
        <ControlLabel>FirstName:
        </ControlLabel>
        <FormControl
          id="firstNameForm"
          type="text"
          name="firstName"
          placeholder="Firstname"/>
      </FormGroup>
      <FormGroup controlId="lastNameForm">
        <ControlLabel >LastName:
        </ControlLabel>
        <FormControl
          id="lastNameForm"
          type="text"
          name="lastName"
          placeholder="Lastname"/>
      </FormGroup>
      <Button block type="submit">
        Let's Joke!!
      </Button>
    </Form>
  );
};

export default enhance(UsernameForm);
