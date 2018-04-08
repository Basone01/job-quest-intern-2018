import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Flex } from "./styled";
const enhance = compose(
  connect(
    state => ({
      errorMessage: state.error.message
    }),
    null
  )
);

const ErrorBox = ({ isError, errorMessage }) => {
  return (
    <Flex dir="row" jc="space-around" ali="baseline" >
      <p>Error: {errorMessage}</p>
    </Flex>
  );
};

export default enhance(ErrorBox);
