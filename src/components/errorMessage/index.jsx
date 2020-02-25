import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const ErrorMessage = ({ error }) => {
  console.log("error", error.message);
  console.log("error", error.response);

  if (!error.response) {
    return (
      <div className="error-container">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">
            {error.message}
          </h1>
          <div className="inline-block align-middle">
            <h2 className="font-weight-normal lead">Try again later.</h2>
          </div>
        </div>
      </div>
    );
  }

  const { status, statusText } = error.response;
  return (
    <div className="error-container">
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">
          {status}
        </h1>
        <div className="inline-block align-middle">
          <h2 className="font-weight-normal lead">{statusText}</h2>
        </div>
      </div>
      {status !== 500 && (
        <div className="d-flex mt-4 justify-content-center">
          <Link to="/">Go to main page</Link>
        </div>
      )}
    </div>
  );
};
