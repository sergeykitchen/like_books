import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import socketApi from "../../api/socketServise";
import { loginUserRequest } from "../../actions/usersActions";
import { voteForBookSuccess } from "../../actions/booksActions";
import { CustomToast } from "../../components/customToast";
import "./styles.scss";
import { Loader } from "../../components/loader";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);
  const { socket, initSocket } = socketApi;

  useEffect(() => {
    if (!socket) {
      initSocket("http://localhost:8001");
    }
  }, [initSocket, socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on("voted", ({ voices }) => {
      dispatch(voteForBookSuccess(voices));
    });
    return () => {
      socket.off("voted");
    };
  }, [socket, dispatch]);

  useEffect(() => {
    dispatch(loginUserRequest());
  }, [dispatch]);

  return (
    <div>
      {loading ? <Loader /> : <main>{children}</main>}
      <CustomToast />
    </div>
  );
};

export default MainLayout;
