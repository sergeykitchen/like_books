import io from "socket.io-client";

// "http://localhost:8001"

class socketApi {
  socket = null;

  initSocket = url => {
    this.socket = io(url);
    this.socket.on("connect", () => {
      console.log("Connected");
      this.socket.on("disconnect", () => {
        console.log("Disconnected");
      });
    });
    return this.socket;
  };
}

export default new socketApi();
