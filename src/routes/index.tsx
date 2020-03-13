import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../pages/mainPage";
import SignInPage from "../pages/signInPage";
import BookPage from "../pages/bookPage";
import SignUpPage from "../pages/signUpPage";
import HomePage from "../pages/homePage";
import { IUser } from "../interfaces";

export const Routes: React.FC<{ user: IUser | null }> = ({ user }) => {
  if (user) {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user_page" component={MainPage} />
        <Route path="/book_page/:id" component={BookPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/book_page/:id" component={BookPage} />
      <Route path="/signup" component={SignUpPage} />
      <Redirect to="/" />
    </Switch>
  );
};
