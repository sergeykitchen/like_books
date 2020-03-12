import React from "react";
import { Spinner } from "react-bootstrap";
import "./styles.scss";

export const Loader = () => {
  return (
    <div className="spinner_container">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
