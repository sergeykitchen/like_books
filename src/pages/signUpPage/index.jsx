import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthForm from "../../components/authForm";
import { createUserRequest } from "../../actions/usersActions";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);
  const user = useSelector(state => state.users.user);
  useEffect(() => {
    if (!user) {
      localStorage.removeItem("my_app");
    }
  }, [user]);

  const submit = data => {
    dispatch(createUserRequest(data));
  };

  return (
    <div className="row m-0">
      <div className="col-11 col-md-8 m-auto mw-1200">
        <h2>Sign Up</h2>
        <AuthForm label="Sign Up" submit={submit} isLoading={loading} />
        Go to <Link to="/signin">sign in.</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
