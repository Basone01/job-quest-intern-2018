import React, { Component } from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { fetchAllJokes } from "../../actions/";
import { Button, Flex } from "../styled";
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

class RenameButton extends Component {
  render() {
    const { isFormDisplay, name, onClick, toggleForm } = this.props;
    const { firstName, lastName } = name;
    return (
      <Flex fd="column" ali="center">
        <Button onClick={onClick}>
          Wanna be like {firstName} {lastName}?
        </Button>
        {isFormDisplay && (
          <UsernameForm
            afterSubmit={() => toggleForm(!isFormDisplay)}
          />
        )}
      </Flex>
    );
  }
}

export default enhance(RenameButton);
