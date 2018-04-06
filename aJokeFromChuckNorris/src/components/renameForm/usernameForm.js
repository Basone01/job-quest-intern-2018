import React from "react";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { Button, Flex } from "../styled";
import { submitUsername } from "../../actions/name";
/*===================Styled===================*/
const BorderedFlex = Flex.extend`
  border: 1px solid black;
  border-radius:1em;
  padding:1em;
  margin-bottom:1em;
`;


/*======================================*/
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
      props.afterSubmit();
    }
  })
);

const UsernameForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <BorderedFlex fd="column" ali="center">
      <label>FirstName: <input type="text" name="firstName" placeholder="Firstname" /></label>
        <label>LastName: <input type="text" name="lastName" placeholder="Lastname" /></label>
        {props.s}
        <Button type="submit"> Let's Joke!! </Button>
      </BorderedFlex>
    </form>
  );
};

export default enhance(UsernameForm);
