import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import socketApi from "../../api/socketService";
import { loginUserRequest } from "../../actions/usersActions";
import { voteForBookSuccess } from "../../actions/booksActions";
import { CustomToast } from "../../components/customToast";
import { Loader } from "../../components/loader";
import { IDefaultState, IVoteResponse } from "../../interfaces";

import "./styles.scss";

const MainLayout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector<IDefaultState, boolean>(
    state => state.users.loading
  );
  const { socket, initSocket } = socketApi;

  useEffect(() => {
    if (!socket) {
      initSocket("http://localhost:8001");
    }
  }, [initSocket, socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on("voted", (data: IVoteResponse) => {
      const { voices } = data;
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
