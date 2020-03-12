import React from "react";
import { IVoice } from "../../interfaces";
// import { useDispatch } from "react-redux";
// import socketApi from "../../api/socketService";

interface IVotedUsersPanelProp {
  voices: IVoice[];
}

export const VotedUsersPanel: React.FC<IVotedUsersPanelProp> = ({ voices }) => {
  //const dispatch = useDispatch();

  // const { socket } = socketApi;
  // useEffect(() => {
  //   if (!socket) return;
  //   socket.on("updateUsersList", () => {
  //     dispatch({
  //       type: "update_user_list"
  //     });
  //   });
  //   return () => {
  //     socket.off("updateUsersList");
  //   };
  // }, [socket, dispatch]);

  return (
    <div className=" col-md-4">
      <div className="jumbotron aside">
        {voices.length ? (
          <>
            <h6>Voted users:</h6>
            {voices.map((i: IVoice) => (
              <div key={i._id}>{i.name}</div>
            ))}
          </>
        ) : (
          <h6>Nobody voted yet.</h6>
        )}
      </div>
    </div>
  );
};
