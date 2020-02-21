import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.users.user);

  return (
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

export default PrivateRoute;
