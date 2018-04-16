import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import styled from 'styled-components';

const StyledTitle = styled.h4`
  text-align:center;
`

const enhance = compose(
  connect(state => ({
    name: state.name
  }))
);

const Title = props => {
  const { firstName, lastName } = props.name;
  return (
    <StyledTitle>
      {firstName} {lastName}'s Jokes
    </StyledTitle>
  );
};

export default enhance(Title);
