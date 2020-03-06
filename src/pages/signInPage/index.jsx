import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUserRequest } from "../../actions/usersActions";
import AuthForm from "../../components/authForm";

function SignInPage() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("my_app");
    }
  }, [user]);

  const submit = data => {
    dispatch(loginUserRequest(data));
  };

  return (
    <div className="row m-0">
      <div className="col-11 col-md-8 m-auto mw-1200">
        <h2>Sign In</h2>
        <AuthForm submit={submit} label="Sign In" isLoading={loading} />
        Go to <Link to="/signup">sign up.</Link>
      </div>
    </div>
  );
}

export default SignInPage;
