import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import socketApi from "../../api/socketService";

export const VotedUsersPanel = ({ voices }) => {
  const dispatch = useDispatch();

  const { socket } = socketApi;
  useEffect(() => {
    if (!socket) return;
    socket.on("updateUsersList", data => {
      dispatch({
        type: "update_user_list"
      });
    });
    return () => {
      socket.off("updateUsersList");
    };
  }, [socket, dispatch]);

  return (
    <div className=" col-md-4">
      <div className="jumbotron aside">
        {voices.length ? (
          <>
            <h6>Voted users:</h6>
            {voices.map((i, index) => (
              <div key={index}>{i.name}</div>
            ))}
          </>
        ) : (
          <h6>Nobody voted yet.</h6>
        )}
      </div>
    </div>
  );
};
