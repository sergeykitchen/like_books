import React from "react";
import { Router } from "react-router-dom";
import history from "./history";
import { logOut } from "./actions/usersActions";
import MainLayout from "./layouts/mainLayout";
import { Header } from "./components/header";
import { useDispatch, useSelector } from "react-redux";
import { Routes } from "./routes";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <MainLayout>
      <Router history={history}>
        <Header user={user} logout={logout} />
        <Routes user={user} />
      </Router>
    </MainLayout>
  );
}

export default App;
