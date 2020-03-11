import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthForm from "../../components/authForm";
import { createUserRequest } from "../../actions/usersActions";
import { INewUser } from "../../interfaces";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector<any>(state => state.users.loading);
  const user = useSelector<any>(state => state.users.user);
  useEffect(() => {
    if (!user) {
      localStorage.removeItem("my_app");
    }
  }, [user]);

  const submit = (data: INewUser) => {
    dispatch(createUserRequest(data));
  };

  return (
    <div className="row m-0">
      <div className="col-11 col-md-8 m-auto mw-1200">
        <h2>Sign Up</h2>
        <AuthForm
          isSignUp
          label="Sign Up"
          submit={submit}
          isLoading={loading}
        />
        Go to <Link to="/signin">sign in.</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
