import React from "react";
import { connect } from "react-redux";
import { Flex } from "./styled";
import {
  FetchAllButton,
  FetchRandomButton,
  RenameForm,
  FetchByIdForm,
  ErrorBox
} from "./";

const FormSection = ({ isError }) => {
  return (
    <Flex fd="column" ali="center">
      <RenameForm />
      <FetchAllButton />
      <FetchRandomButton />
      <FetchByIdForm />
      {isError && <ErrorBox />}
    </Flex>
  );
};

export default connect(state => ({ isError: state.error.isError }))(
  FormSection
);
