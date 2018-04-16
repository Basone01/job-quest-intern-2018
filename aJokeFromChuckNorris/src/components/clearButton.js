import React from "react";
import { Button } from "react-bootstrap";
import { clearAllJokes } from "../actions";
import { connect } from "react-redux";

const ClearButton = ({ clearAllJokes,children }) => {
  return <Button onClick={() => clearAllJokes()}>{children}</Button>;
};

export default connect(null, { clearAllJokes })(ClearButton);
