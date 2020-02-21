import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BookIcon } from "../icons/BookIcon";

import "./styles.scss";

export const Header = ({ user, logout }) => {
  const logOutUser = () => {
    localStorage.removeItem("my_app");
    logout();
  };

  const { pathname } = useLocation();

  const getNav = () => {
    if (user) {
      return (
        <NavLink className="navbar-brand" to="/user_page">
          User page
        </NavLink>
      );
    }
    return null;
  };

  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <NavLink className="navbar-brand  logo" to="/">
        <BookIcon />
      </NavLink>
      {getNav()}

      <ul className="navbar-nav "></ul>
      <div className=" ml-auto d-flex justify-content-center align-items-center">
        {user ? (
          <>
            <p className="mb-0 pl-2 pr-2">Hello, {user.name}</p>
            <button
              onClick={logOutUser}
              className="btn btn-outline-success my-2 my-sm-0 ml-3"
            >
              Log out
            </button>
          </>
        ) : (
          !isAuthPage && (
            <NavLink className="navbar-brand" to="/signin">
              <button className="btn btn-outline-primary my-2 my-sm-0 ml-3">
                Go to auth
              </button>
            </NavLink>
          )
        )}
      </div>
    </nav>
  );
};
