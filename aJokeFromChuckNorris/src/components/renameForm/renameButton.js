import React, {Component} from "react";
import {compose, withState, withHandlers} from "recompose";
import {connect} from "react-redux";
import {Button, Panel} from 'react-bootstrap';

import UsernameForm from "./usernameForm";
const enhance = compose(connect(state => ({name: state.name}), {}), withState("isFormDisplay", "toggleForm", false), withHandlers({
  onClick: props => e => {
    props.toggleForm(!props.isFormDisplay);
  }
}));

class RenameButton extends Component {
  render() {
    const {isFormDisplay, name, onClick, toggleForm} = this.props;
    const {firstName, lastName} = name;
    return (
      <Panel id="renamePanel" expanded={isFormDisplay}>
        <Panel.Heading>
          <Button block onClick={onClick}>
            Wanna be like {firstName + " "}
            {lastName}?
          </Button>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <UsernameForm afterSubmit={() => toggleForm(!isFormDisplay)}/>
          </Panel.Body>

        </Panel.Collapse>

      </Panel>
    );
  }
}

export default enhance(RenameButton);
