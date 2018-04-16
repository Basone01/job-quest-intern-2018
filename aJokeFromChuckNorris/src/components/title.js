import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

const enhance = compose(
  connect(state => ({
    name: state.name
  }))
);

const Title = props => {
  const { firstName, lastName } = props.name;
  return (
    <h4 className="text-center">
      {firstName} {lastName}'s Jokes
    </h4>
  );
};

export default enhance(Title);
