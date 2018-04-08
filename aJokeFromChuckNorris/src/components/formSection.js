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
import ClearButton from "./clearButton";

const FormSection = ({ isError }) => {
  return (
    <Flex fd="column" ali="center">
      <RenameForm />
      <Flex>
        <FetchAllButton />
        <ClearButton />
      </Flex>
      <FetchRandomButton />
      <FetchByIdForm />
      {isError && <ErrorBox />}
    </Flex>
  );
};

export default connect(state => ({ isError: state.error.isError }))(
  FormSection
);
