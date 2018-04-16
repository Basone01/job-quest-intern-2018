import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import {Alert} from 'react-bootstrap';
const enhance = compose(
  connect(
    state => ({
      errorMessage: state.error.message,
      isError:state.error.isError
    }),
    null
  )
);

const ErrorBox = ({ isError, errorMessage }) => {
  return (
    isError&&<Alert bsStyle="danger">Error: {errorMessage}</Alert>
  );
};

export default enhance(ErrorBox);
