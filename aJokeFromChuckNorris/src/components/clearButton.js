import React from "react";
import { Button } from "./styled";
import { clearAllJokes } from "../actions";
import { connect } from "react-redux";

const ClearButton = ({ clearAllJokes }) => {
  return <Button onClick={() => clearAllJokes()}>Clear All Jokes</Button>;
};

export default connect(null, { clearAllJokes })(ClearButton);
